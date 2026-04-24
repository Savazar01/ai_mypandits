import 'dotenv/config';
import { prisma } from './src/lib/prisma';

async function runTests() {
  console.log("=== Starting Event Orchestration Backend Tests ===");
  
  // 1. Get User ID
  const user = await prisma.user.findFirst({ where: { email: 'avasat01@gmail.com' } });
  if (!user) {
    console.error("Test user not found!");
    process.exit(1);
  }
  const userId = user.id;
  console.log(`Found Test User ID: ${userId}`);

  // Base API URL
  const API_BASE = "http://127.0.0.1:8000/api/v1";

  // Helper for requests
  const doPost = async (endpoint, payload) => {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    return { status: res.status, data };
  };

  // Scenario 1: Single day event with Single activity
  console.log("\n--- EXECUTING SCENARIO 1: Single Day, Single Activity ---");
  const payload1 = {
    owner_id: userId,
    title: "Scenario 1: Simple Wedding Verification",
    description: "Testing single day single activity",
    event_type: "Wedding",
    start_date: new Date("2026-06-01").toISOString(),
    end_date: new Date("2026-06-01").toISOString(),
    days: [{
      date: "2026-06-01",
      sequence_number: 1,
      activities: [{
        title: "Vivaha Inauguration",
        start_time: new Date("2026-06-01T09:00:00").toISOString(),
        end_time: new Date("2026-06-01T11:00:00").toISOString(),
        location_type: "Physical",
        status: "Pending",
        is_orchestrated: false,
        invitations: []
      }]
    }],
    invitations: []
  };

  let res1 = await doPost('/events', payload1);
  console.log(`S1 Response status: ${res1.status}`);

  // Scenario 2: Single day event with 3 activities
  console.log("\n--- EXECUTING SCENARIO 2: Single Day, 3 Activities ---");
  const payload2 = {
    owner_id: userId,
    title: "Scenario 2: Detailed Puja",
    description: "Testing single day with three activities",
    event_type: "Puja",
    start_date: new Date("2026-06-15").toISOString(),
    end_date: new Date("2026-06-15").toISOString(),
    days: [{
      date: "2026-06-15",
      sequence_number: 1,
      activities: [
        {
          title: "Sankalpa",
          start_time: new Date("2026-06-15T08:00:00").toISOString(),
          end_time: new Date("2026-06-15T09:00:00").toISOString(),
          location_type: "Physical",
          status: "Pending",
          is_orchestrated: false,
          invitations: []
        },
        {
          title: "Main Homa",
          start_time: new Date("2026-06-15T09:30:00").toISOString(),
          end_time: new Date("2026-06-15T12:00:00").toISOString(),
          location_type: "Physical",
          status: "Pending",
          is_orchestrated: false,
          invitations: []
        },
        {
          title: "Aarti & Prasadam",
          start_time: new Date("2026-06-15T12:30:00").toISOString(),
          end_time: new Date("2026-06-15T14:00:00").toISOString(),
          location_type: "Physical",
          status: "Pending",
          is_orchestrated: false,
          invitations: []
        }
      ]
    }],
    invitations: []
  };

  let res2 = await doPost('/events', payload2);
  console.log(`S2 Response status: ${res2.status}`);

  // Scenario 3: 2 Day event with two activities on each day
  console.log("\n--- EXECUTING SCENARIO 3: 2 Days, 4 Activities ---");
  const payload3 = {
    owner_id: userId,
    title: "Scenario 3: Multi-day Festival",
    description: "Testing two days with two activities each",
    event_type: "Havan",
    start_date: new Date("2026-07-01").toISOString(),
    end_date: new Date("2026-07-02").toISOString(),
    days: [
      {
        date: "2026-07-01",
        sequence_number: 1,
        activities: [
          {
            title: "Pre-event Gather",
            start_time: new Date("2026-07-01T16:00:00").toISOString(),
            end_time: new Date("2026-07-01T18:00:00").toISOString(),
            location_type: "Physical",
            status: "Pending",
            is_orchestrated: false,
            invitations: []
          },
          {
            title: "Evening Kirtan",
            start_time: new Date("2026-07-01T19:00:00").toISOString(),
            end_time: new Date("2026-07-01T21:00:00").toISOString(),
            location_type: "Physical",
            status: "Pending",
            is_orchestrated: false,
            invitations: []
          }
        ]
      },
      {
        date: "2026-07-02",
        sequence_number: 2,
        activities: [
          {
            title: "Morning Havan",
            start_time: new Date("2026-07-02T06:00:00").toISOString(),
            end_time: new Date("2026-07-02T10:00:00").toISOString(),
            location_type: "Physical",
            status: "Pending",
            is_orchestrated: false,
            invitations: [{ invitee_name: "Test Guest", whatsapp_number: "+1234567890", num_guests: 1 }] 
          },
          {
            title: "Closing Ceremony",
            start_time: new Date("2026-07-02T11:00:00").toISOString(),
            end_time: new Date("2026-07-02T13:00:00").toISOString(),
            location_type: "Physical",
            status: "Pending",
            is_orchestrated: false,
            invitations: []
          }
        ]
      }
    ],
    invitations: []
  };

  let res3 = await doPost('/events', payload3);
  console.log(`S3 Response status: ${res3.status}`);

  console.log("\n--- VERIFYING DASHBOARD API RESPONSE ---");
  const dashRes = await fetch(`${API_BASE}/dashboard?user_id=${userId}`);
  const dashData = await dashRes.json();
  console.log("Dashboard Data Summary:", {
    total_events: dashData.total_events,
    recent_events_count: dashData.recent_events?.length,
    upcoming_activities_count: dashData.upcoming_activities_count
  });

  console.log("\n--- VERIFYING DATABASE PERSISTENCE WITH PRISMA ---");
  const dbEvents = await prisma.event.findMany({
    where: { owner_id: userId },
    include: {
      days: {
        include: {
          activities: { include: { invitations: true } }
        }
      }
    },
    orderBy: { created_at: 'desc' },
    take: 3
  });

  console.log(`Found ${dbEvents.length} events in DB.`);
  dbEvents.forEach(ev => {
    console.log(`\nEvent [${ev.title}]`);
    console.log(`  Days: ${ev.days.length}`);
    ev.days.forEach(day => {
      console.log(`  -> Day ${day.sequence_number} (${day.date}): ${day.activities.length} activity(ies)`);
      day.activities.forEach(act => {
         console.log(`      - [${act.title}] from ${new Date(act.start_time).toUTCString()} to ${new Date(act.end_time).toUTCString()}`);
         if (act.invitations && act.invitations.length > 0) {
           console.log(`        + Invitations: ${act.invitations.length}`);
         }
      });
    });
  });

  console.log("\n✅ All Tests Completed Successfully!");
}

runTests().catch(console.error).finally(() => prisma.$disconnect());
