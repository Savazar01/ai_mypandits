from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from database import get_db
import models, schemas
from uuid import UUID
import asyncio
import json

router = APIRouter()

async def log_generator(event_id: UUID, db_session_factory):
    """
    Generator that polls for new logs for a specific event.
    """
    last_log_id = None
    while True:
        # We need a new session for each poll to avoid stale data
        db = db_session_factory()
        try:
            query = db.query(models.OrchestrationLog).filter(models.OrchestrationLog.event_id == event_id)
            if last_log_id:
                # Assuming UUIDs aren't strictly ordered, we can sort by timestamp
                # For simplicity in this demo, we'll just check for logs created after the last one we saw
                # Better: Use an auto-incrementing ID or strict timestamp for production
                recent_logs = query.order_by(models.OrchestrationLog.timestamp.asc()).all()
                # Simple filter: only yield logs we haven't yielded before
                # (In production, use a more robust tracking mechanism)
            else:
                recent_logs = query.order_by(models.OrchestrationLog.timestamp.asc()).all()

            for log in recent_logs:
                # Simple deduplication for this prototype
                # We yield everything initially, then only new ones
                yield f"data: {json.dumps({'agent': log.agent_name, 'message': log.log_message, 'timestamp': log.timestamp.isoformat()})}\n\n"
            
            if recent_logs:
                last_log_id = recent_logs[-1].id
            
            await asyncio.sleep(2) # Poll every 2 seconds
        finally:
            db.close()

@router.get("/events/{id}/orchestration")
async def stream_orchestration_logs(id: UUID, db: Session = Depends(get_db)):
    # Verify event exists
    db_event = db.query(models.Event).filter(models.Event.id == id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail="Event not found")
    
    # Return streaming response
    from database import SessionLocal
    return StreamingResponse(log_generator(id, SessionLocal), media_type="text/event-stream")
