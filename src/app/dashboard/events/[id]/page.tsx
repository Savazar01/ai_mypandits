"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Plus, Clock, MapPin, Users, Sparkles, X, Activity,
  Pencil, Trash2, Check, CalendarDays, Save,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ActivityItem {
  id: string;
  title: string;
  start_time: string;
  end_time: string;
  location_type: string;
  location: string;
}
interface EventDay {
  id: string;
  sequence_number: number;
  date: string;
  activities: ActivityItem[];
}
interface Guest {
  id: string;
  invitee_name: string;
  whatsapp_number: string;
  invitee_email: string;
  num_guests: number;
  rsvp_status: string;
  activity_id: string | null;
}
interface EventData {
  id: string;
  title: string;
  description: string;
  days: EventDay[];
  invitations: Guest[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (iso: string) =>
  new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const toTimeInput = (iso: string) => {
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};

// ─── Reusable modal shell ─────────────────────────────────────────────────────
function Modal({
  title, onClose, children,
}: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#1A1C1A]/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-[#887364] hover:text-[#1A1C1A] transition-colors">
          <X className="w-5 h-5" />
        </button>
        <h3 className="font-serif text-2xl font-bold mb-6">{title}</h3>
        {children}
      </motion.div>
    </div>
  );
}

// ─── Field input ──────────────────────────────────────────────────────────────
const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-xs font-bold uppercase tracking-widest text-[#887364] mb-1.5">
      {label}
    </label>
    {children}
  </div>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className={`w-full px-4 py-3 bg-[#faf9f6] rounded-xl outline-none focus:ring-1 ring-[#f28c28] transition-all text-sm ${props.className ?? ""}`} />
);

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) => (
  <select {...props} className={`w-full px-4 py-3 bg-[#faf9f6] rounded-xl outline-none focus:ring-1 ring-[#f28c28] transition-all text-sm ${props.className ?? ""}`}>
    {props.children}
  </select>
);

const PrimaryBtn = ({ onClick, children, danger = false }: {
  onClick: () => void; children: React.ReactNode; danger?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`w-full py-3.5 rounded-xl font-bold uppercase text-sm tracking-widest transition-all text-white ${
      danger ? "bg-red-500 hover:bg-red-600" : "bg-[#f28c28] hover:bg-[#d4af37]"
    }`}
  >
    {children}
  </button>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function EventDetailsPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();

  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ── Event header editing ──
  const [editingHeader, setEditingHeader] = useState(false);
  const [headerDraft, setHeaderDraft] = useState({ title: "", description: "" });

  // ── Modal states ──
  const [addDayOpen, setAddDayOpen] = useState(false);
  const [dayDate, setDayDate] = useState("");

  const [addActivityTarget, setAddActivityTarget] = useState<{ dayId: string; seq: number } | null>(null);
  const [activityDraft, setActivityDraft] = useState({ title: "", start_time: "", end_time: "", location_type: "Physical", location: "" });

  const [editActivityTarget, setEditActivityTarget] = useState<{ dayId: string; activity: ActivityItem } | null>(null);
  const [editActivityDraft, setEditActivityDraft] = useState({ title: "", start_time: "", end_time: "", location_type: "Physical", location: "" });

  const [editDayTarget, setEditDayTarget] = useState<EventDay | null>(null);
  const [editDayDate, setEditDayDate] = useState("");

  const [addGuestOpen, setAddGuestOpen] = useState(false);
  const [guestDraft, setGuestDraft] = useState({ invitee_name: "", invitee_email: "", whatsapp_number: "", num_guests: 1, activity_id: "" });

  const [editGuestTarget, setEditGuestTarget] = useState<Guest | null>(null);
  const [editGuestDraft, setEditGuestDraft] = useState({ invitee_name: "", whatsapp_number: "", invitee_email: "", num_guests: 1 });

  const [confirmDelete, setConfirmDelete] = useState<{ label: string; onConfirm: () => void } | null>(null);

  // ── Fetch ──
  const fetchEvent = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/v1/events/${id}`);
      if (res.ok) setEventData(await res.json());
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }, [id]);

  useEffect(() => { fetchEvent(); }, [fetchEvent]);

  // ── Helper: patch/delete with refresh ──
  const api = async (url: string, method: string, body?: object) => {
    setSaving(true);
    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        ...(body ? { body: JSON.stringify(body) } : {}),
      });
      await fetchEvent();
    } catch (e) { console.error(e); }
    finally { setSaving(false); }
  };

  // ── Event header save ──
  const saveHeader = () =>
    api(`/api/v1/events/${id}`, "PATCH", headerDraft).then(() => setEditingHeader(false));

  // ── Day operations ──
  const addDay = () => {
    const seq = (eventData?.days?.length ?? 0) + 1;
    api(`/api/v1/events/${id}/days`, "POST", { date: dayDate, sequence_number: seq })
      .then(() => { setAddDayOpen(false); setDayDate(""); });
  };

  const saveDay = () => {
    if (!editDayTarget) return;
    api(`/api/v1/events/${id}/days/${editDayTarget.id}`, "PATCH", { date: editDayDate })
      .then(() => setEditDayTarget(null));
  };

  const deleteDay = (day: EventDay) => setConfirmDelete({
    label: `Delete Day ${day.sequence_number} and all its activities?`,
    onConfirm: () => api(`/api/v1/events/${id}/days/${day.id}`, "DELETE")
      .then(() => setConfirmDelete(null)),
  });

  // ── Activity operations ──
  const addActivity = () => {
    if (!addActivityTarget) return;
    const day = eventData!.days.find(d => d.id === addActivityTarget.dayId)!;
    const base = day.date.split("T")[0];
    const start = new Date(`${base}T${activityDraft.start_time}:00`).toISOString();
    const end = new Date(`${base}T${activityDraft.end_time}:00`).toISOString();
    api(`/api/v1/events/${id}/days/${addActivityTarget.dayId}/activities`, "POST", {
      title: activityDraft.title, start_time: start, end_time: end,
      location_type: activityDraft.location_type, location: activityDraft.location,
    }).then(() => {
      setAddActivityTarget(null);
      setActivityDraft({ title: "", start_time: "", end_time: "", location_type: "Physical", location: "" });
    });
  };

  const openEditActivity = (dayId: string, act: ActivityItem) => {
    setEditActivityTarget({ dayId, activity: act });
    setEditActivityDraft({
      title: act.title,
      start_time: toTimeInput(act.start_time),
      end_time: toTimeInput(act.end_time),
      location_type: act.location_type,
      location: act.location,
    });
  };

  const saveActivity = () => {
    if (!editActivityTarget) return;
    const { dayId, activity } = editActivityTarget;
    const day = eventData!.days.find(d => d.id === dayId)!;
    const base = day.date.split("T")[0];
    const start = new Date(`${base}T${editActivityDraft.start_time}:00`).toISOString();
    const end = new Date(`${base}T${editActivityDraft.end_time}:00`).toISOString();
    api(`/api/v1/events/${id}/days/${dayId}/activities/${activity.id}`, "PATCH", {
      title: editActivityDraft.title, start_time: start, end_time: end,
      location_type: editActivityDraft.location_type, location: editActivityDraft.location,
    }).then(() => setEditActivityTarget(null));
  };

  const deleteActivity = (dayId: string, act: ActivityItem) => setConfirmDelete({
    label: `Delete activity "${act.title}"?`,
    onConfirm: () => api(`/api/v1/events/${id}/days/${dayId}/activities/${act.id}`, "DELETE")
      .then(() => setConfirmDelete(null)),
  });

  // ── Guest operations ──
  const addGuest = () => {
    api(`/api/v1/events/${id}/invitations`, "POST", {
      ...guestDraft,
      activity_id: guestDraft.activity_id || null,
    }).then(() => {
      setAddGuestOpen(false);
      setGuestDraft({ invitee_name: "", invitee_email: "", whatsapp_number: "", num_guests: 1, activity_id: "" });
    });
  };

  const openEditGuest = (g: Guest) => {
    setEditGuestTarget(g);
    setEditGuestDraft({ invitee_name: g.invitee_name, whatsapp_number: g.whatsapp_number, invitee_email: g.invitee_email, num_guests: g.num_guests });
  };

  const saveGuest = () => {
    if (!editGuestTarget) return;
    api(`/api/v1/events/${id}/invitations/${editGuestTarget.id}`, "PATCH", editGuestDraft)
      .then(() => setEditGuestTarget(null));
  };

  const deleteGuest = (g: Guest) => setConfirmDelete({
    label: `Remove guest "${g.invitee_name}"?`,
    onConfirm: () => api(`/api/v1/events/${id}/invitations/${g.id}`, "DELETE")
      .then(() => setConfirmDelete(null)),
  });

  // ─────────────────────────────────────────────────────────────────────────────
  if (loading) return <div className="p-20 text-center font-serif text-[#1A1C1A]">Loading Event Details…</div>;
  if (!eventData) return <div className="p-20 text-center font-serif text-red-500">Event Not Found</div>;

  const allActivities = eventData.days?.flatMap(d => d.activities) ?? [];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1A1C1A] font-sans pb-24">
      {/* ── Nav ── */}
      <nav className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 border-b border-[#DBC2B0]/20 bg-white sticky top-0 z-40 gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href="/dashboard/customer" className="flex items-center gap-2 text-[#887364] hover:text-[#f28c28] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Back</span>
          </Link>
          <div className="hidden sm:block h-6 w-px bg-[#DBC2B0]/30" />

          {/* Editable title */}
          {editingHeader ? (
            <input
              autoFocus
              value={headerDraft.title}
              onChange={e => setHeaderDraft(p => ({ ...p, title: e.target.value }))}
              className="font-serif text-xl md:text-2xl font-bold border-b-2 border-[#f28c28] bg-transparent outline-none"
            />
          ) : (
            <h1 className="font-serif text-xl md:text-2xl font-bold tracking-tight">{eventData.title}</h1>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {editingHeader ? (
            <>
              <button
                onClick={saveHeader}
                className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-colors"
              >
                <Save className="w-4 h-4" /> Save
              </button>
              <button
                onClick={() => setEditingHeader(false)}
                className="flex items-center gap-2 px-5 py-3 bg-[#faf9f6] text-[#887364] rounded-xl font-bold text-sm hover:bg-[#DBC2B0]/20 transition-colors"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => { setHeaderDraft({ title: eventData.title, description: eventData.description }); setEditingHeader(true); }}
              className="flex items-center gap-2 px-5 py-3 bg-[#faf9f6] text-[#887364] rounded-xl font-bold text-sm hover:bg-[#DBC2B0]/20 transition-colors border border-[#DBC2B0]/40"
            >
              <Pencil className="w-4 h-4" /> Edit Details
            </button>
          )}

          <Link href={`/dashboard/events/${id}/orchestration`} className="flex-1 sm:flex-none">
            <button className="w-full sm:w-auto px-6 py-3 bg-[#f28c28] text-white rounded-xl font-bold uppercase text-sm tracking-wide shadow-lg shadow-[#f28c28]/20 hover:bg-[#d4af37] transition-all flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>AI Orchestration</span>
            </button>
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-14">
        {saving && (
          <div className="fixed bottom-6 right-6 bg-[#f28c28] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg z-50 flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Saving…
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── Timeline ── */}
          <div className="lg:col-span-8 space-y-10">

            {/* Description edit */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold italic mb-3">Event Timeline</h2>
              {editingHeader ? (
                <textarea
                  value={headerDraft.description}
                  onChange={e => setHeaderDraft(p => ({ ...p, description: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-[#DBC2B0]/40 rounded-xl outline-none focus:ring-1 ring-[#f28c28] text-sm text-[#887364] leading-relaxed resize-none"
                />
              ) : (
                <p className="text-[#887364] leading-relaxed">{eventData.description}</p>
              )}
            </div>

            {/* Days */}
            {eventData.days
              ?.sort((a, b) => a.sequence_number - b.sequence_number)
              .map(day => (
                <div key={day.id} className="relative pl-10 border-l border-[#DBC2B0] space-y-6">
                  {/* Day bullet */}
                  <div className="absolute left-[-20px] top-0 w-10 h-10 bg-white border-4 border-[#faf9f6] shadow-sm flex items-center justify-center rounded-full">
                    <span className="font-serif text-lg font-bold text-[#f28c28]">{day.sequence_number}</span>
                  </div>

                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                    {/* Day header */}
                    <div className="flex items-center justify-between mb-6 gap-4">
                      <h3 className="font-serif text-xl font-bold">Day {day.sequence_number}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#887364] bg-[#faf9f6] px-3 py-1.5 rounded-lg">
                          {new Date(day.date).toLocaleDateString()}
                        </span>
                        {/* Edit day date */}
                        <button
                          onClick={() => { setEditDayTarget(day); setEditDayDate(day.date.split("T")[0]); }}
                          className="p-2 text-[#887364] hover:text-[#f28c28] hover:bg-[#f28c28]/10 rounded-lg transition-colors"
                          title="Edit day date"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {/* Delete day */}
                        <button
                          onClick={() => deleteDay(day)}
                          className="p-2 text-[#887364] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete this day"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="space-y-3">
                      {day.activities
                        ?.sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
                        .map(activity => (
                          <div
                            key={activity.id}
                            className="p-4 border border-[#DBC2B0]/30 rounded-xl hover:border-[#f28c28]/30 transition-all flex items-start gap-4 group"
                          >
                            <div className="bg-[#f28c28]/10 p-3 rounded-xl text-[#f28c28] flex-shrink-0">
                              <Activity className="w-5 h-5" />
                            </div>
                            <div className="flex-grow min-w-0">
                              <h4 className="font-bold text-base mb-1 truncate">{activity.title}</h4>
                              <div className="flex flex-wrap items-center gap-4 text-xs text-[#887364]">
                                <span className="flex items-center gap-1.5">
                                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                                  {fmt(activity.start_time)}{activity.end_time ? ` – ${fmt(activity.end_time)}` : ""}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                                  {activity.location || activity.location_type}
                                </span>
                              </div>
                            </div>
                            {/* Edit / Delete activity */}
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                              <button
                                onClick={() => openEditActivity(day.id, activity)}
                                className="p-2 text-[#887364] hover:text-[#f28c28] hover:bg-[#f28c28]/10 rounded-lg transition-colors"
                                title="Edit activity"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => deleteActivity(day.id, activity)}
                                className="p-2 text-[#887364] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete activity"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}

                      <button
                        onClick={() => setAddActivityTarget({ dayId: day.id, seq: day.sequence_number })}
                        className="w-full py-5 border-2 border-dashed border-[#DBC2B0]/50 rounded-xl text-sm font-bold uppercase tracking-wide text-[#887364] hover:bg-[#f28c28]/5 hover:border-[#f28c28]/30 hover:text-[#f28c28] transition-all flex items-center justify-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Activity to Day {day.sequence_number}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {/* Add day */}
            <button
              onClick={() => setAddDayOpen(true)}
              className="w-full py-7 text-[#d4af37] bg-white rounded-2xl border border-[#DBC2B0]/30 font-bold uppercase tracking-wide text-sm hover:border-[#d4af37] shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Event Day</span>
            </button>
          </div>

          {/* ── Guest Sidebar ── */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm sticky top-28">
              <h3 className="font-serif text-xl font-bold flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-[#f28c28]" />
                Event Guests
              </h3>

              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1 mb-6">
                {eventData.invitations?.length > 0 ? (
                  eventData.invitations.map(guest => (
                    <div key={guest.id} className="p-4 border border-[#f4f3f1] rounded-xl bg-[#faf9f6] group relative">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-bold text-sm truncate">{guest.invitee_name}</p>
                          <p className="text-xs text-[#887364] mt-0.5">{guest.whatsapp_number}</p>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <button
                            onClick={() => openEditGuest(guest)}
                            className="p-1.5 text-[#887364] hover:text-[#f28c28] hover:bg-[#f28c28]/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                            title="Edit guest"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteGuest(guest)}
                            className="p-1.5 text-[#887364] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                            title="Remove guest"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">{guest.rsvp_status}</span>
                        <span className="text-xs font-medium bg-white px-2 py-0.5 rounded text-[#887364]">{guest.num_guests} Pax</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[#887364] italic text-center py-6">No guests invited yet.</p>
                )}
              </div>

              <button
                onClick={() => setAddGuestOpen(true)}
                className="w-full py-4 text-white bg-[#d4af37] rounded-xl font-bold uppercase text-sm tracking-wide shadow-lg shadow-[#d4af37]/20 hover:bg-[#b8922c] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Invite Guest</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ═══════════════════════════════════ MODALS ═══════════════════════════ */}
      <AnimatePresence>

        {/* ── Confirm Delete ── */}
        {confirmDelete && (
          <Modal title="Confirm Deletion" onClose={() => setConfirmDelete(null)}>
            <p className="text-[#887364] text-sm mb-8 leading-relaxed">{confirmDelete.label}</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(null)} className="flex-1 py-3 rounded-xl font-bold text-sm border border-[#DBC2B0] text-[#887364] hover:bg-[#faf9f6] transition-colors">
                Cancel
              </button>
              <button onClick={confirmDelete.onConfirm} className="flex-1 py-3 rounded-xl font-bold text-sm bg-red-500 text-white hover:bg-red-600 transition-colors">
                Delete
              </button>
            </div>
          </Modal>
        )}

        {/* ── Add Day ── */}
        {addDayOpen && (
          <Modal title="Add Event Day" onClose={() => setAddDayOpen(false)}>
            <div className="space-y-5">
              <Field label="Calendar Date">
                <Input type="date" value={dayDate} onChange={e => setDayDate(e.target.value)} />
              </Field>
              <PrimaryBtn onClick={addDay}>Create Day</PrimaryBtn>
            </div>
          </Modal>
        )}

        {/* ── Edit Day Date ── */}
        {editDayTarget && (
          <Modal title={`Edit Day ${editDayTarget.sequence_number}`} onClose={() => setEditDayTarget(null)}>
            <div className="space-y-5">
              <Field label="Calendar Date">
                <Input type="date" value={editDayDate} onChange={e => setEditDayDate(e.target.value)} />
              </Field>
              <PrimaryBtn onClick={saveDay}>Save Changes</PrimaryBtn>
            </div>
          </Modal>
        )}

        {/* ── Add Activity ── */}
        {addActivityTarget && (
          <Modal title={`Add Activity — Day ${addActivityTarget.seq}`} onClose={() => setAddActivityTarget(null)}>
            <div className="space-y-5">
              <Field label="Activity Title">
                <Input type="text" value={activityDraft.title} onChange={e => setActivityDraft(p => ({ ...p, title: e.target.value }))} placeholder="e.g. Ganesh Puja" />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Start Time">
                  <Input type="time" value={activityDraft.start_time} onChange={e => setActivityDraft(p => ({ ...p, start_time: e.target.value }))} />
                </Field>
                <Field label="End Time">
                  <Input type="time" value={activityDraft.end_time} onChange={e => setActivityDraft(p => ({ ...p, end_time: e.target.value }))} />
                </Field>
              </div>
              <Field label="Location Type">
                <Select value={activityDraft.location_type} onChange={e => setActivityDraft(p => ({ ...p, location_type: e.target.value }))}>
                  <option value="Physical">Offline (Physical Venue)</option>
                  <option value="Virtual">Virtual (Zoom/Meet)</option>
                </Select>
              </Field>
              <Field label="Location / Address">
                <Input type="text" value={activityDraft.location} onChange={e => setActivityDraft(p => ({ ...p, location: e.target.value }))} placeholder="Venue name or link" />
              </Field>
              <PrimaryBtn onClick={addActivity}>Save Activity</PrimaryBtn>
            </div>
          </Modal>
        )}

        {/* ── Edit Activity ── */}
        {editActivityTarget && (
          <Modal title="Edit Activity" onClose={() => setEditActivityTarget(null)}>
            <div className="space-y-5">
              <Field label="Activity Title">
                <Input type="text" value={editActivityDraft.title} onChange={e => setEditActivityDraft(p => ({ ...p, title: e.target.value }))} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Start Time">
                  <Input type="time" value={editActivityDraft.start_time} onChange={e => setEditActivityDraft(p => ({ ...p, start_time: e.target.value }))} />
                </Field>
                <Field label="End Time">
                  <Input type="time" value={editActivityDraft.end_time} onChange={e => setEditActivityDraft(p => ({ ...p, end_time: e.target.value }))} />
                </Field>
              </div>
              <Field label="Location Type">
                <Select value={editActivityDraft.location_type} onChange={e => setEditActivityDraft(p => ({ ...p, location_type: e.target.value }))}>
                  <option value="Physical">Offline (Physical Venue)</option>
                  <option value="Virtual">Virtual (Zoom/Meet)</option>
                </Select>
              </Field>
              <Field label="Location / Address">
                <Input type="text" value={editActivityDraft.location} onChange={e => setEditActivityDraft(p => ({ ...p, location: e.target.value }))} />
              </Field>
              <PrimaryBtn onClick={saveActivity}>Save Changes</PrimaryBtn>
            </div>
          </Modal>
        )}

        {/* ── Add Guest ── */}
        {addGuestOpen && (
          <Modal title="Invite Guest" onClose={() => setAddGuestOpen(false)}>
            <div className="space-y-4">
              <Field label="Guest Name">
                <Input type="text" value={guestDraft.invitee_name} onChange={e => setGuestDraft(p => ({ ...p, invitee_name: e.target.value }))} />
              </Field>
              <Field label="WhatsApp Number (with +CountryCode)">
                <Input type="text" value={guestDraft.whatsapp_number} onChange={e => setGuestDraft(p => ({ ...p, whatsapp_number: e.target.value }))} placeholder="+91..." />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Email (Optional)">
                  <Input type="email" value={guestDraft.invitee_email} onChange={e => setGuestDraft(p => ({ ...p, invitee_email: e.target.value }))} />
                </Field>
                <Field label="Party Size">
                  <Input type="number" min={1} value={guestDraft.num_guests} onChange={e => setGuestDraft(p => ({ ...p, num_guests: parseInt(e.target.value) }))} />
                </Field>
              </div>
              <Field label="Specific Activity (Optional)">
                <Select value={guestDraft.activity_id} onChange={e => setGuestDraft(p => ({ ...p, activity_id: e.target.value }))}>
                  <option value="">Full Event (Global)</option>
                  {allActivities.map(act => (
                    <option key={act.id} value={act.id}>{act.title}</option>
                  ))}
                </Select>
              </Field>
              <div className="pt-2">
                <PrimaryBtn onClick={addGuest}>Add to Guest List</PrimaryBtn>
              </div>
            </div>
          </Modal>
        )}

        {/* ── Edit Guest ── */}
        {editGuestTarget && (
          <Modal title="Edit Guest" onClose={() => setEditGuestTarget(null)}>
            <div className="space-y-4">
              <Field label="Guest Name">
                <Input type="text" value={editGuestDraft.invitee_name} onChange={e => setEditGuestDraft(p => ({ ...p, invitee_name: e.target.value }))} />
              </Field>
              <Field label="WhatsApp Number">
                <Input type="text" value={editGuestDraft.whatsapp_number} onChange={e => setEditGuestDraft(p => ({ ...p, whatsapp_number: e.target.value }))} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Email">
                  <Input type="email" value={editGuestDraft.invitee_email} onChange={e => setEditGuestDraft(p => ({ ...p, invitee_email: e.target.value }))} />
                </Field>
                <Field label="Party Size">
                  <Input type="number" min={1} value={editGuestDraft.num_guests} onChange={e => setEditGuestDraft(p => ({ ...p, num_guests: parseInt(e.target.value) }))} />
                </Field>
              </div>
              <div className="pt-2">
                <PrimaryBtn onClick={saveGuest}>Save Changes</PrimaryBtn>
              </div>
            </div>
          </Modal>
        )}

      </AnimatePresence>
    </div>
  );
}
