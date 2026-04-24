-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Events Table
CREATE TABLE IF NOT EXISTS "events" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "owner_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "event_type" TEXT NOT NULL, -- e.g., 'Wedding', 'Puja'
    "start_date" TIMESTAMP WITH TIME ZONE,
    "end_date" TIMESTAMP WITH TIME ZONE,
    "status" TEXT NOT NULL DEFAULT 'Draft', -- 'Draft', 'Orchestrating', 'Confirmed'
    "orchestration_state" JSONB DEFAULT '{}',
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_owner FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE
);

-- 2. Event_Days Table
CREATE TABLE IF NOT EXISTS "event_days" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "event_id" UUID NOT NULL,
    "date" DATE NOT NULL,
    "sequence_number" INTEGER NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_event FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE
);

-- 3. Activities Table
CREATE TABLE IF NOT EXISTS "activities" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "day_id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "start_time" TIMESTAMP WITH TIME ZONE NOT NULL,
    "end_time" TIMESTAMP WITH TIME ZONE NOT NULL,
    "location_type" TEXT NOT NULL DEFAULT 'Physical', -- 'Physical', 'Virtual'
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "is_orchestrated" BOOLEAN DEFAULT FALSE,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_day FOREIGN KEY ("day_id") REFERENCES "event_days"("id") ON DELETE CASCADE,
    CONSTRAINT fk_event_act FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE
);

-- 4. Invitations Table
CREATE TABLE IF NOT EXISTS "invitations" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "event_id" UUID NOT NULL,
    "activity_id" UUID, -- Nullable for event-level invites
    "invitee_email" TEXT NOT NULL,
    "rsvp_status" TEXT NOT NULL DEFAULT 'Pending', -- 'Pending', 'Attending', 'Declined'
    "access_token" TEXT UNIQUE NOT NULL DEFAULT md5(random()::text),
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_event_inv FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE,
    CONSTRAINT fk_act_inv FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE SET NULL
);

-- 5. Orchestration_Logs Table
CREATE TABLE IF NOT EXISTS "orchestration_logs" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "event_id" UUID NOT NULL,
    "agent_name" TEXT NOT NULL,
    "log_message" TEXT NOT NULL,
    "timestamp" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_event_log FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE
);

-- Add updated_at trigger for events
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON "events"
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
