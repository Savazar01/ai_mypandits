from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import func
from typing import List
from database import get_db
import models, schemas
from uuid import UUID

router = APIRouter()

@router.post("/events", response_model=schemas.Event)
def create_event(event: schemas.EventCreate, db: Session = Depends(get_db)):
    # Create the event
    db_event = models.Event(
        owner_id=event.owner_id,
        title=event.title,
        description=event.description,
        event_type=event.event_type,
        start_date=event.start_date,
        end_date=event.end_date,
        location=event.location,
        status="Draft"
    )
    db.add(db_event)
    db.flush() # Get the ID

    # Create event-level global invitations
    for inv_data in event.invitations:
        db_inv = models.Invitation(
            event_id=db_event.id,
            invitee_name=inv_data.invitee_name,
            invitee_email=inv_data.invitee_email,
            whatsapp_number=inv_data.whatsapp_number,
            num_guests=inv_data.num_guests,
            rsvp_status="Pending"
        )
        db.add(db_inv)

    for day_data in event.days:
        db_day = models.EventDay(
            event_id=db_event.id,
            date=day_data.date,
            sequence_number=day_data.sequence_number
        )
        db.add(db_day)
        db.flush()

        for act_data in day_data.activities:
            db_activity = models.Activity(
                day_id=db_day.id,
                event_id=db_event.id,
                title=act_data.title,
                start_time=act_data.start_time,
                end_time=act_data.end_time,
                location_type=act_data.location_type,
                location=act_data.location,
                status=act_data.status,
                is_orchestrated=act_data.is_orchestrated
            )
            db.add(db_activity)
            db.flush()

            # Create activity-specific invitations
            for inv_data in act_data.invitations:
                db_inv = models.Invitation(
                    event_id=db_event.id,
                    activity_id=db_activity.id,
                    invitee_name=inv_data.invitee_name,
                    invitee_email=inv_data.invitee_email,
                    whatsapp_number=inv_data.whatsapp_number,
                    num_guests=inv_data.num_guests,
                    rsvp_status="Pending"
                )
                db.add(db_inv)
    
    db.commit()
    db.refresh(db_event)
    return db_event

@router.get("/events/{id}", response_model=schemas.EventDetail)
def get_event(id: UUID, db: Session = Depends(get_db)):
    db_event = db.query(models.Event).options(
        joinedload(models.Event.days).joinedload(models.EventDay.activities),
        joinedload(models.Event.invitations)
    ).filter(models.Event.id == id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail="Event not found")
    return db_event

@router.post("/events/{id}/days", response_model=schemas.EventDay)
def add_event_day(id: UUID, day: schemas.EventDayBase, db: Session = Depends(get_db)):
    db_day = models.EventDay(event_id=id, date=day.date, sequence_number=day.sequence_number)
    db.add(db_day)
    db.commit()
    db.refresh(db_day)
    return db_day

@router.post("/events/{id}/days/{day_id}/activities", response_model=schemas.Activity)
def add_activity(id: UUID, day_id: UUID, activity: schemas.ActivityBase, db: Session = Depends(get_db)):
    db_activity = models.Activity(
        event_id=id,
        day_id=day_id,
        title=activity.title,
        start_time=activity.start_time,
        end_time=activity.end_time,
        location_type=activity.location_type,
        location=activity.location
    )
    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)
    return db_activity

@router.post("/events/{id}/invitations", response_model=schemas.Invitation)
def add_invitation(id: UUID, inv: schemas.InvitationCreate, db: Session = Depends(get_db)):
    db_inv = models.Invitation(
        event_id=id,
        activity_id=inv.activity_id,
        invitee_name=inv.invitee_name,
        invitee_email=inv.invitee_email,
        whatsapp_number=inv.whatsapp_number,
        num_guests=inv.num_guests
    )
    db.add(db_inv)
    db.commit()
    db.refresh(db_inv)
    return db_inv

@router.delete("/events/{id}/days/{day_id}")
def delete_event_day(id: UUID, day_id: UUID, db: Session = Depends(get_db)):
    db_day = db.query(models.EventDay).filter(models.EventDay.id == day_id, models.EventDay.event_id == id).first()
    if not db_day:
        raise HTTPException(status_code=404, detail="Day not found")
    db.delete(db_day)
    db.commit()
    return {"message": "Day deleted"}

@router.patch("/events/{id}/days/{day_id}", response_model=schemas.EventDay)
def update_event_day(id: UUID, day_id: UUID, day_update: schemas.EventDayUpdate, db: Session = Depends(get_db)):
    db_day = db.query(models.EventDay).filter(models.EventDay.id == day_id, models.EventDay.event_id == id).first()
    if not db_day:
        raise HTTPException(status_code=404, detail="Day not found")
    
    update_data = day_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_day, key, value)
    
    db.commit()
    db.refresh(db_day)
    return db_day

@router.patch("/events/{id}/days/{day_id}/activities/{activity_id}", response_model=schemas.Activity)
def update_activity(id: UUID, day_id: UUID, activity_id: UUID, activity_update: schemas.ActivityUpdate, db: Session = Depends(get_db)):
    db_activity = db.query(models.Activity).filter(
        models.Activity.id == activity_id, 
        models.Activity.day_id == day_id,
        models.Activity.event_id == id
    ).first()
    if not db_activity:
        raise HTTPException(status_code=404, detail="Activity not found")
    
    update_data = activity_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_activity, key, value)
    
    db.commit()
    db.refresh(db_activity)
    return db_activity

@router.delete("/events/{id}/days/{day_id}/activities/{activity_id}")
def delete_activity(id: UUID, day_id: UUID, activity_id: UUID, db: Session = Depends(get_db)):
    db_activity = db.query(models.Activity).filter(
        models.Activity.id == activity_id,
        models.Activity.day_id == day_id,
        models.Activity.event_id == id
    ).first()
    if not db_activity:
        raise HTTPException(status_code=404, detail="Activity not found")
    db.delete(db_activity)
    db.commit()
    return {"message": "Activity deleted"}

@router.patch("/events/{id}/invitations/{inv_id}", response_model=schemas.Invitation)
def update_invitation(id: UUID, inv_id: UUID, inv_update: schemas.InvitationUpdate, db: Session = Depends(get_db)):
    db_inv = db.query(models.Invitation).filter(models.Invitation.id == inv_id, models.Invitation.event_id == id).first()
    if not db_inv:
        raise HTTPException(status_code=404, detail="Invitation not found")
    
    update_data = inv_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_inv, key, value)
    
    db.commit()
    db.refresh(db_inv)
    return db_inv

@router.delete("/events/{id}/invitations/{inv_id}")
def delete_invitation(id: UUID, inv_id: UUID, db: Session = Depends(get_db)):
    db_inv = db.query(models.Invitation).filter(models.Invitation.id == inv_id, models.Invitation.event_id == id).first()
    if not db_inv:
        raise HTTPException(status_code=404, detail="Invitation not found")
    db.delete(db_inv)
    db.commit()
    return {"message": "Invitation deleted"}

@router.patch("/events/{id}", response_model=schemas.Event)
def update_event(id: UUID, event_update: schemas.EventUpdate, db: Session = Depends(get_db)):
    db_event = db.query(models.Event).filter(models.Event.id == id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail="Event not found")
    
    update_data = event_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_event, key, value)
    
    db.commit()
    db.refresh(db_event)
    return db_event

@router.delete("/events/{id}")
def delete_event(id: UUID, db: Session = Depends(get_db)):
    db_event = db.query(models.Event).filter(models.Event.id == id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail="Event not found")
    
    db.delete(db_event)
    db.commit()
    return {"message": "Event deleted successfully"}

@router.get("/dashboard", response_model=schemas.DashboardSummary)
def get_dashboard(user_id: str, db: Session = Depends(get_db)):
    # Fetch summary data
    total_events = db.query(models.Event).filter(models.Event.owner_id == user_id).count()
    active_orchestrations = db.query(models.Event).filter(
        models.Event.owner_id == user_id, 
        models.Event.status == "Orchestrating"
    ).count()
    
    upcoming_activities_count = db.query(models.Activity).join(models.Event).filter(
        models.Event.owner_id == user_id,
        models.Activity.start_time > func.now()
    ).count()

    recent_events = db.query(models.Event).filter(models.Event.owner_id == user_id).order_by(models.Event.created_at.desc()).limit(5).all()

    return {
        "total_events": total_events,
        "active_orchestrations": active_orchestrations,
        "upcoming_activities_count": upcoming_activities_count,
        "recent_events": [schemas.Event.from_orm(e) for e in recent_events]
    }

@router.patch("/events/{id}/trigger-orchestration", response_model=schemas.Event)
def trigger_orchestration(id: UUID, db: Session = Depends(get_db)):
    db_event = db.query(models.Event).filter(models.Event.id == id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail="Event not found")
    
    db_event.status = "Orchestrating"
    
    # Add initial log
    initial_log = models.OrchestrationLog(
        event_id=id,
        agent_name="System Orchestrator",
        log_message=f"Orchestration triggered for event: {db_event.title}"
    )
    db.add(initial_log)
    
    db.commit()
    db.refresh(db_event)
    return db_event
@router.post("/events/{id}/send-invites", response_model=schemas.Event)
def send_invites(id: UUID, db: Session = Depends(get_db)):
    db_event = db.query(models.Event).filter(models.Event.id == id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail="Event not found")
    
    # Get all pending invitations
    pending_invites = db.query(models.Invitation).filter(
        models.Invitation.event_id == id,
        models.Invitation.invite_sent == False
    ).all()

    if not pending_invites:
        # Just return the event, maybe add a log
        return db_event

    # Trigger logic (Mocking Agent here)
    for invite in pending_invites:
        invite.invite_sent = True
        
        # Log the orchestration step
        log_msg = f"Guest Invitation dispatched to {invite.invitee_name} ({invite.whatsapp_number})"
        if invite.activity_id:
            activity = db.query(models.Activity).get(invite.activity_id)
            log_msg += f" for activity: {activity.title}"
        else:
            log_msg += " for the overall event."

        new_log = models.OrchestrationLog(
            event_id=id,
            agent_name="Messenger Agent",
            log_message=log_msg
        )
        db.add(new_log)
    
    db.commit()
    db.refresh(db_event)
    return db_event
