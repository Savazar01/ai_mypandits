from sqlalchemy import Column, String, DateTime, ForeignKey, Integer, Boolean, Date, Text
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from database import Base

class User(Base):
    __tablename__ = "user"
    id = Column(String, primary_key=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    events = relationship("Event", back_populates="owner")

class Event(Base):
    __tablename__ = "events"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id = Column(String, ForeignKey("user.id", ondelete="CASCADE"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text)
    event_type = Column(String, nullable=False)
    start_date = Column(DateTime(timezone=True))
    end_date = Column(DateTime(timezone=True))
    status = Column(String, default="Draft")
    location = Column(String)
    orchestration_state = Column(JSONB, default={})
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    owner = relationship("User", back_populates="events")
    days = relationship("EventDay", back_populates="event", cascade="all, delete-orphan")
    activities = relationship("Activity", back_populates="event", cascade="all, delete-orphan")
    logs = relationship("OrchestrationLog", back_populates="event", cascade="all, delete-orphan")
    invitations = relationship("Invitation", back_populates="event", cascade="all, delete-orphan")

class EventDay(Base):
    __tablename__ = "event_days"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    event_id = Column(UUID(as_uuid=True), ForeignKey("events.id", ondelete="CASCADE"), nullable=False)
    date = Column(Date, nullable=False)
    sequence_number = Column(Integer, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    event = relationship("Event", back_populates="days")
    activities = relationship("Activity", back_populates="day", cascade="all, delete-orphan")

class Activity(Base):
    __tablename__ = "activities"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    day_id = Column(UUID(as_uuid=True), ForeignKey("event_days.id", ondelete="CASCADE"), nullable=False)
    event_id = Column(UUID(as_uuid=True), ForeignKey("events.id", ondelete="CASCADE"), nullable=False)
    title = Column(String, nullable=False)
    start_time = Column(DateTime(timezone=True), nullable=False)
    end_time = Column(DateTime(timezone=True), nullable=False)
    location_type = Column(String, default="Physical")
    location = Column(String, nullable=True)
    status = Column(String, default="Pending")
    is_orchestrated = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    day = relationship("EventDay", back_populates="activities")
    event = relationship("Event", back_populates="activities")
    invitations = relationship("Invitation", back_populates="activity")

class Invitation(Base):
    __tablename__ = "invitations"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    event_id = Column(UUID(as_uuid=True), ForeignKey("events.id", ondelete="CASCADE"), nullable=False)
    activity_id = Column(UUID(as_uuid=True), ForeignKey("activities.id", ondelete="SET NULL"), nullable=True)
    invitee_name = Column(String, nullable=False)
    invitee_email = Column(String)
    whatsapp_number = Column(String, nullable=False)
    num_guests = Column(Integer, default=1)
    rsvp_status = Column(String, default="Pending")
    invite_sent = Column(Boolean, default=False)
    access_token = Column(String, unique=True, default=lambda: uuid.uuid4().hex)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    event = relationship("Event", back_populates="invitations")
    activity = relationship("Activity", back_populates="invitations")

class OrchestrationLog(Base):
    __tablename__ = "orchestration_logs"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    event_id = Column(UUID(as_uuid=True), ForeignKey("events.id", ondelete="CASCADE"), nullable=False)
    agent_name = Column(String, nullable=False)
    log_message = Column(Text, nullable=False)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())

    event = relationship("Event", back_populates="logs")
