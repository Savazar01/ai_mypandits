from pydantic import BaseModel, EmailStr, Field
from datetime import datetime, date
from typing import List, Optional, Dict, Any
from uuid import UUID

class ActivityBase(BaseModel):
    title: str
    start_time: datetime
    end_time: datetime
    location_type: str = "Physical"
    location: Optional[str] = None
    status: str = "Pending"
    is_orchestrated: bool = False

class InvitationBase(BaseModel):
    invitee_name: str
    invitee_email: Optional[str] = None
    whatsapp_number: str
    num_guests: int = 1

class InvitationCreate(InvitationBase):
    activity_id: Optional[UUID] = None

class Invitation(InvitationBase):
    id: UUID
    event_id: UUID
    activity_id: Optional[UUID]
    rsvp_status: str
    invite_sent: bool
    access_token: str
    created_at: datetime
    class Config:
        from_attributes = True

class ActivityCreate(ActivityBase):
    invitations: List[InvitationBase] = []

class Activity(ActivityBase):
    id: UUID
    day_id: UUID
    event_id: UUID
    created_at: datetime
    invitations: List[Invitation] = []
    class Config:
        from_attributes = True

class EventDayBase(BaseModel):
    date: date
    sequence_number: int

class EventDayCreate(EventDayBase):
    activities: List[ActivityCreate] = []

class EventDay(EventDayBase):
    id: UUID
    event_id: UUID
    created_at: datetime
    activities: List[Activity] = []
    class Config:
        from_attributes = True

class EventBase(BaseModel):
    title: str
    description: Optional[str] = None
    event_type: str
    location: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None

class EventCreate(EventBase):
    owner_id: str
    days: List[EventDayCreate] = []
    invitations: List[InvitationBase] = [] # Global event guests

class EventUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    event_type: Optional[str] = None
    location: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    status: Optional[str] = None
    orchestration_state: Optional[Dict[str, Any]] = None

class Event(EventBase):
    id: UUID
    owner_id: str
    status: str
    orchestration_state: Optional[Dict[str, Any]] = {}
    created_at: datetime
    updated_at: datetime
    class Config:
        from_attributes = True

class EventDetail(Event):
    days: List[EventDay] = []
    invitations: List[Invitation] = []
    class Config:
        from_attributes = True

class EventDayUpdate(BaseModel):
    date: Optional[date] = None
    sequence_number: Optional[int] = None

class ActivityUpdate(BaseModel):
    title: Optional[str] = None
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None
    location_type: Optional[str] = None
    location: Optional[str] = None
    status: Optional[str] = None

class InvitationUpdate(BaseModel):
    invitee_name: Optional[str] = None
    invitee_email: Optional[str] = None
    whatsapp_number: Optional[str] = None
    num_guests: Optional[int] = None
    rsvp_status: Optional[str] = None

class OrchestrationLogBase(BaseModel):
    agent_name: str
    log_message: str

class OrchestrationLog(OrchestrationLogBase):
    id: UUID
    event_id: UUID
    timestamp: datetime
    class Config:
        from_attributes = True

class DashboardSummary(BaseModel):
    total_events: int
    active_orchestrations: int
    upcoming_activities_count: int
    recent_events: List[Event]
