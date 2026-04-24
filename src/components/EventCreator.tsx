"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Plus, 
  Trash2, 
  ChevronRight, 
  ChevronLeft,
  Users,
  CheckCircle2,
  X,
  AlertCircle,
  Sparkles,
  UserPlus,
  MessageSquare,
  Check,
  Send
} from "lucide-react";
import { toast } from "sonner";
import DateModal from "./DateModal";
import TimeModal from "./TimeModal";
import AddressForm from "./AddressForm";

interface Address {
  country: string;
  street: string;
  room: string;
  city: string;
  state: string;
  zip: string;
}

const DEFAULT_ADDRESS: Address = {
  country: "IN",
  street: "",
  room: "",
  city: "",
  state: "",
  zip: "",
};

interface Guest {
  id: string;
  name: string;
  whatsapp: string;
  num_guests: number;
  activity_ids: string[];
  is_full_event: boolean;
}

interface Activity {
  id: string;
  title: string;
  start_time: string;
  end_time: string;
  location_type: 'Physical' | 'Virtual';
  address: Address;
  inherit_location: boolean;
  location: string; // Keep for backward compat/simple storage
  guest_ids: string[];
}

interface EventDay {
  date: string;
  address: Address;
  activities: Activity[];
  inherit_day1_location?: boolean;
}

interface EventCreatorProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

// Helper to add minutes to a time string like "09:00 AM"
const addMinutesToTime = (timeStr: string, minutesToAdd: number): string => {
  try {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    
    const date = new Date(2000, 0, 1, hours, minutes);
    date.setMinutes(date.getMinutes() + minutesToAdd);
    
    let newHours = date.getHours();
    const newMinutes = date.getMinutes().toString().padStart(2, "0");
    const newPeriod = newHours >= 12 ? "PM" : "AM";
    
    newHours = newHours % 12;
    if (newHours === 0) newHours = 12;
    
    return `${newHours.toString().padStart(2, "0")}:${newMinutes} ${newPeriod}`;
  } catch (e) {
    return timeStr;
  }
};

const formatAddress = (addr: Address): string => {
  if (!addr) return "";
  const parts = [addr.street, addr.room, addr.city, addr.state, addr.zip].filter(Boolean);
  return parts.join(", ");
};

export default function EventCreator({ onSuccess, onCancel }: EventCreatorProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    event_type: "Wedding",
    location: "", // Primary display location
    address: { ...DEFAULT_ADDRESS },
    start_date: "",
    end_date: "",
    days: [] as EventDay[],
    guests: [] as Guest[]
  });

  const [pickerState, setPickerState] = useState<{
    type: "date" | "time" | null,
    dayIdx?: number,
    actIdx?: number,
    field?: "start_time" | "end_time" | "date"
  }>({ type: null });
  const [showGuestPicker, setShowGuestPicker] = useState<{ dayIdx: number, actIdx: number } | null>(null);

  const addDay = () => {
    const isCurrentlyDefaulting = eventData.days.length > 0 && eventData.days[eventData.days.length - 1].inherit_day1_location;
    
    setEventData({
      ...eventData,
      days: [...eventData.days, { 
        date: "", 
        address: isCurrentlyDefaulting ? { ...eventData.days[0].address } : { ...DEFAULT_ADDRESS }, 
        activities: [],
        inherit_day1_location: isCurrentlyDefaulting
      }]
    });
  };

  const removeDay = (index: number) => {
    const newDays = [...eventData.days];
    newDays.splice(index, 1);
    setEventData({ ...eventData, days: newDays });
  };

  const updateDay = (index: number, field: keyof EventDay, value: any) => {
    const newDays = [...eventData.days];
    newDays[index] = { ...newDays[index], [field]: value };
    
    // If Day 1 address is updated and others inherit, propagate changes
    if (index === 0 && field === "address") {
      for (let i = 1; i < newDays.length; i++) {
        if (newDays[i].inherit_day1_location) {
          newDays[i].address = { ...value };
        }
      }
    }
    
    setEventData({ ...eventData, days: newDays });
  };

  const addActivity = (dayIndex: number) => {
    const newDays = [...eventData.days];
    if (!newDays[dayIndex]) return;
    
    newDays[dayIndex].activities.push({
      id: Math.random().toString(36).substr(2, 9),
      title: "",
      start_time: "09:00 AM",
      end_time: "10:00 AM",
      location_type: "Physical",
      address: { ...DEFAULT_ADDRESS },
      inherit_location: true,
      location: "",
      guest_ids: []
    });
    setEventData({ ...eventData, days: newDays });
  };

  const addGuest = (name: string, whatsapp: string, count: number, activityIds: string[] = [], isFullEvent: boolean = true) => {
    const guestId = Math.random().toString(36).substr(2, 9);
    const newGuest: Guest = {
      id: guestId,
      name,
      whatsapp,
      num_guests: count,
      activity_ids: activityIds,
      is_full_event: isFullEvent
    };
    
    // If not full event, add this guest ID to the specific activities
    let updatedDays = [...eventData.days];
    if (!isFullEvent && activityIds.length > 0) {
      updatedDays = eventData.days.map(day => ({
        ...day,
        activities: day.activities.map(act => ({
          ...act,
          guest_ids: activityIds.includes(act.id) 
            ? [...new Set([...act.guest_ids, guestId])] 
            : act.guest_ids
        }))
      }));
    }

    setEventData({ 
      ...eventData, 
      guests: [...eventData.guests, newGuest],
      days: updatedDays
    });
  };

  const removeGuest = (id: string) => {
    setEventData({
      ...eventData,
      guests: eventData.guests.filter(g => g.id !== id),
      days: eventData.days.map(day => ({
        ...day,
        activities: day.activities.map(act => ({
          ...act,
          guest_ids: act.guest_ids.filter(gid => gid !== id)
        }))
      }))
    });
  };

  const updateActivity = (dayIndex: number, actIndex: number, field: keyof Activity, value: any) => {
    try {
      const newDays = [...eventData.days];
      if (!newDays[dayIndex] || !newDays[dayIndex].activities[actIndex]) return;
      
      newDays[dayIndex].activities[actIndex] = { ...newDays[dayIndex].activities[actIndex], [field]: value };
      setEventData({ ...eventData, days: newDays });
    } catch (e) {
      // Silently fail
    }
  };

  const handleTimeSelect = (startTime: string, duration: number) => {
    if (pickerState.dayIdx === undefined || pickerState.actIdx === undefined) return;
    
    try {
      const endTime = addMinutesToTime(startTime, duration);
      const newDays = [...eventData.days];
      const activity = newDays[pickerState.dayIdx].activities[pickerState.actIdx];
      
      newDays[pickerState.dayIdx].activities[pickerState.actIdx] = {
        ...activity,
        start_time: startTime,
        end_time: endTime
      };
      
      setEventData({ ...eventData, days: newDays });
      setPickerState({ type: null });
    } catch (e) {
      setPickerState({ type: null });
    }
  };

  const handleSubmit = async () => {
    if (!session?.user?.id) return;
    setLoading(true);
    try {
      const payload = {
        owner_id: session.user.id,
        title: eventData.title,
        description: eventData.description,
        event_type: eventData.event_type,
        location: formatAddress(eventData.address),
        start_date: eventData.days[0]?.date ? new Date(eventData.days[0].date).toISOString() : null,
        end_date: eventData.days[eventData.days.length - 1]?.date ? new Date(eventData.days[eventData.days.length - 1].date).toISOString() : null,
        days: eventData.days.map((day, dIdx) => ({
          date: day.date,
          sequence_number: dIdx + 1,
          activities: day.activities.map(act => {
            const loc = act.inherit_location ? formatAddress(day.address) : formatAddress(act.address);
            return {
              title: act.title,
              start_time: new Date(`${day.date} ${act.start_time}`).toISOString(),
              end_time: new Date(`${day.date} ${act.end_time}`).toISOString(),
              location_type: act.location_type,
              location: loc,
              status: "Pending",
              is_orchestrated: false,
              invitations: eventData.guests
                .filter(g => act.guest_ids.includes(g.id))
                .map(g => ({
                  invitee_name: g.name,
                  whatsapp_number: g.whatsapp,
                  num_guests: g.num_guests
                }))
            };
          })
        })),
        invitations: eventData.guests
          .filter(g => g.is_full_event)
          .map(g => ({
            invitee_name: g.name,
            whatsapp_number: g.whatsapp,
            num_guests: g.num_guests
          }))
      };
      
      const response = await fetch("/api/v1/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Failed to create orchestration");
      
      const data = await response.json();
      
      await fetch(`/api/v1/events/${data.id}/trigger-orchestration`, {
        method: "PATCH"
      });
      
      // Step 3: Send initial invitations if any
      await fetch(`/api/v1/events/${data.id}/send-invites`, {
        method: "POST"
      });

      toast.success("Event created and orchestration triggered!");
      if (onSuccess) onSuccess();
      router.push('/dashboard/customer');
    } catch (error) {
      toast.error("Failed to create event. Please check if the backend services are running.");
    } finally {
      setLoading(true); // Keep loading state until navigation completes
    }
  };

  return (
    <div className="w-full md:max-w-4xl h-full md:h-auto mx-auto bg-white md:rounded-[2.5rem] shadow-2xl shadow-[#f28c28]/10 border border-[#faf9f6] overflow-hidden flex flex-col">
      {/* Progress Bar */}
      <div className="h-1 bg-[#faf9f6]">
        <motion.div 
          className="h-full bg-[#f28c28]"
          initial={{ width: "0%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="p-6 md:p-12 overflow-y-auto flex-grow custom-scrollbar">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1C1A] mb-2">Basic Event Details</h2>
                <p className="text-[#887364] text-xs md:text-sm">Define the logistical details of your event.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-[#887364]">Event Title</label>
                  <input 
                    type="text" 
                    value={eventData.title}
                    onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                    placeholder="e.g., Annual Leadership Summit"
                    className="w-full px-6 py-4 bg-[#fcfbf9] border border-[#faf9f6] rounded-xl outline-none focus:border-[#f28c28]/30 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-[#887364]">Event Category</label>
                  <select 
                    value={eventData.event_type}
                    onChange={(e) => setEventData({ ...eventData, event_type: e.target.value })}
                    className="w-full px-6 py-4 bg-[#fcfbf9] border border-[#faf9f6] rounded-xl outline-none focus:border-[#f28c28]/30 transition-all font-medium appearance-none"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Puja">Puja / Religious Ceremony</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Conference">Conference</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Social">Social Gathering</option>
                    <option value="Sporting">Sporting Event</option>
                    <option value="Community">Community Event</option>
                    <option value="Charity">Charity Gala</option>
                    <option value="Celebration">Anniversary / Birthday</option>
                    <option value="Other">Other Event</option>
                  </select>
                </div>
              </div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                <MapPin className="text-primary" size={20} />
                Event Primary Location
              </h3>
              <AddressForm 
                address={eventData.address}
                onChange={(addr) => setEventData({ ...eventData, address: addr, location: formatAddress(addr) })}
                labelPrefix="Event"
              />
            </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#887364]">Event Description & Logistic Requirements</label>
                <textarea 
                  value={eventData.description}
                  onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                  rows={4}
                  placeholder="Describe the logistics, requirements and any special instructions..."
                  className="w-full px-6 py-4 bg-[#fcfbf9] border border-[#faf9f6] rounded-xl outline-none focus:border-[#f28c28]/30 transition-all font-medium resize-none"
                />
              </div>

              <div className="flex justify-between pt-8">
                {onCancel ? (
                  <button 
                    onClick={onCancel}
                    className="px-8 py-4 text-[#887364] font-bold uppercase text-base tracking-wide hover:text-[#1A1C1A] transition-all flex items-center space-x-3"
                  >
                    <span>Cancel</span>
                  </button>
                ) : (
                  <div />
                )}
                  <button 
                    onClick={() => {
                      // Logic to automatically default Day 1 and first activity
                      if (eventData.days.length === 0) {
                        const day1: EventDay = {
                          date: "",
                          address: { ...eventData.address },
                          activities: [
                            {
                              id: Math.random().toString(36).substr(2, 9),
                              title: "",
                              start_time: "09:00 AM",
                              end_time: "10:00 AM",
                              location_type: 'Physical',
                              address: { ...eventData.address },
                              inherit_location: true,
                              location: formatAddress(eventData.address),
                              guest_ids: []
                            }
                          ],
                          inherit_day1_location: false
                        };
                        setEventData({ ...eventData, days: [day1] });
                      }
                      setStep(2);
                    }}
                    disabled={!eventData.title}
                    className="w-full sm:w-auto justify-center px-10 py-4 bg-[#f28c28] text-white rounded-xl font-bold uppercase text-sm md:text-base tracking-wide shadow-lg shadow-[#f28c28]/20 hover:bg-[#d4af37] transition-all flex items-center space-x-3 disabled:opacity-50"
                  >
                  <span>Define Timeline</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-[#1A1C1A] mb-2">Event Timeline</h2>
                  <p className="text-[#887364] text-sm">Organize your event activities across days.</p>
                </div>
                <button 
                  onClick={addDay}
                  className="p-3 bg-[#f28c28]/10 text-[#f28c28] rounded-full hover:bg-[#f28c28]/20 transition-all"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                {eventData.days.length === 0 && (
                  <div className="text-center py-12 bg-[#fcfbf9] rounded-2xl border-2 border-dashed border-[#faf9f6]">
                    <Calendar className="w-12 h-12 text-[#DBC2B0] mx-auto mb-4" />
                    <p className="text-[#887364] font-medium">Add your first day to begin scheduling.</p>
                    <button onClick={addDay} className="mt-4 text-[#f28c28] text-sm font-bold uppercase tracking-widest">Add Day</button>
                  </div>
                )}
                
                 {eventData.days.map((day, dIdx) => (
                   <div className="p-4 md:p-8 bg-[#fcfbf9] rounded-2xl border border-[#faf9f6] space-y-6">
                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <span className="w-8 h-8 bg-[#8f4e00] rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold shrink-0">D{dIdx + 1}</span>
                        <button 
                          onClick={() => setPickerState({ type: "date", dayIdx: dIdx })}
                          className="flex-grow sm:flex-grow-0 px-4 py-3 md:py-2 bg-white border border-[#DBC2B0]/30 rounded-lg font-serif text-lg md:text-xl font-bold text-[#1A1C1A] hover:border-[#f28c28]/50 transition-all flex items-center justify-between sm:justify-start space-x-3"
                        >
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#f28c28]" />
                            <span className="truncate">{day.date ? new Date(day.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : "Select Date"}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#887364] sm:hidden" />
                        </button>
                      </div>
                      <div className="flex items-center justify-end sm:justify-start">
                        <button onClick={() => removeDay(dIdx)} className="text-red-400 hover:text-red-600 transition-colors p-2 md:p-0">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>


                     <div className="bg-stone-50/50 p-6 rounded-xl border border-stone-100 mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2">
                             <MapPin size={12} className="text-primary" />
                             Day {dIdx + 1} Venue / Location
                          </h4>
                          {dIdx === 0 ? (
                            <label className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase cursor-pointer">
                              <input 
                                type="checkbox"
                                checked={eventData.days.length > 1 && eventData.days.slice(1).every(d => d.inherit_day1_location)}
                                onChange={(e) => {
                                  const checked = e.target.checked;
                                  const newDays = [...eventData.days];
                                  for (let i = 1; i < newDays.length; i++) {
                                    newDays[i].inherit_day1_location = checked;
                                    if (checked) {
                                      newDays[i].address = { ...newDays[0].address };
                                      // Also set all activities on subsequent days to inherit from their day
                                      newDays[i].activities = newDays[i].activities.map(a => ({ ...a, inherit_location: true }));
                                    }
                                  }
                                  // Also set Day 1 activities to inherit from Day 1
                                  if (checked) {
                                    newDays[0].activities = newDays[0].activities.map(a => ({ ...a, inherit_location: true }));
                                  }
                                  setEventData({ ...eventData, days: newDays });
                                  if (checked) toast.success("Day 1 location set as default for all days and activities");
                                }}
                                className="w-3 h-3 accent-primary"
                              />
                              Set as Default for all Days
                            </label>
                          ) : (
                            <label className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase cursor-pointer">
                              <input 
                                type="checkbox"
                                checked={day.inherit_day1_location}
                                onChange={(e) => {
                                  const checked = e.target.checked;
                                  const newDays = [...eventData.days];
                                  newDays[dIdx].inherit_day1_location = checked;
                                  if (checked) {
                                    newDays[dIdx].address = { ...newDays[0].address };
                                    newDays[dIdx].activities = newDays[dIdx].activities.map(a => ({ ...a, inherit_location: true }));
                                  }
                                  setEventData({ ...eventData, days: newDays });
                                }}
                                className="w-3 h-3 accent-primary"
                              />
                              Inherit Day 1 Location
                            </label>
                          )}
                        </div>
                        
                        {!day.inherit_day1_location || dIdx === 0 ? (
                          <AddressForm 
                            address={day.address}
                            onChange={(addr) => updateDay(dIdx, "address", addr)}
                            showIcon={false}
                          />
                        ) : (
                          <div className="p-4 bg-white/50 rounded-xl border border-stone-200 text-sm text-stone-500 italic">
                            Inheriting location from Day 1: {formatAddress(eventData.days[0].address)}
                          </div>
                        )}
                     </div>

                     <div className="space-y-4">
                      {day.activities.map((act, aIdx) => (
                        <div key={`act-${dIdx}-${aIdx}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start bg-white p-6 rounded-xl shadow-sm border border-[#faf9f6]">
                          <div className="md:col-span-12 lg:col-span-5 space-y-2">
                             <label className="text-[9px] font-bold uppercase tracking-tighter text-[#887364]">Activity Name</label>
                             <input 
                               type="text" 
                               value={act.title}
                               onChange={(e) => updateActivity(dIdx, aIdx, "title", e.target.value)}
                               placeholder="e.g., Welcome Keynote"
                               className="w-full px-4 py-2 bg-[#fcfbf9] rounded-lg outline-none text-sm font-medium focus:ring-1 ring-[#f28c28]/20 transition-all"
                             />
                          </div>

                          <div className="md:col-span-12 lg:col-span-4 space-y-2">
                             <label className="text-[9px] font-bold uppercase tracking-tighter text-[#887364]">Schedule (Start Time & Duration)</label>
                             <button 
                               onClick={() => setPickerState({ type: "time", dayIdx: dIdx, actIdx: aIdx })}
                               className="w-full pl-4 pr-4 py-2 bg-[#fcfbf9] rounded-lg outline-none text-sm flex items-center justify-between border border-transparent hover:border-[#f28c28]/20 transition-all group"
                             >
                               <div className="flex items-center space-x-3">
                                 <Clock className="w-4 h-4 text-[#f28c28]" />
                                 <span className="font-bold text-[#1A1C1A]">{act.start_time} - {act.end_time}</span>
                               </div>
                               <span className="text-[10px] text-[#f28c28] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase">Edit</span>
                             </button>
                          </div>

                          <div className="md:col-span-12 lg:col-span-3 space-y-2">
                              <label className="text-[9px] font-bold uppercase tracking-tighter text-[#887364]">Manual Location</label>
                              <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    checked={act.inherit_location} 
                                    onChange={(e) => updateActivity(dIdx, aIdx, "inherit_location", e.target.checked)}
                                    className="w-3 h-3 rounded border-stone-300 accent-primary"
                                  />
                                  <span className="text-[10px] font-medium text-stone-500">Inherit Day Location</span>
                                </label>
                                {!act.inherit_location ? (
                                  <div className="p-3 bg-white border border-stone-100 rounded-lg shadow-sm space-y-3">
                                    <AddressForm 
                                      address={act.address}
                                      onChange={(addr) => updateActivity(dIdx, aIdx, "address", addr)}
                                      showIcon={false}
                                    />
                                  </div>
                                ) : (
                                  <div className="p-3 bg-[#fcfbf9] rounded-lg border border-stone-200 text-[10px] text-stone-500 italic flex items-start gap-2">
                                    <MapPin size={10} className="mt-0.5 flex-shrink-0 text-[#8f4e00]" />
                                    <span>Inheriting Day {dIdx + 1} Venue: {formatAddress(day.address) || "No address set"}</span>
                                  </div>
                                )}
                              </div>
                           </div>

                          {/* Activity Guests */}
                          <div className="md:col-span-12 pt-4 border-t border-[#faf9f6] flex items-center justify-between">
                            <div className="flex -space-x-2 overflow-hidden">
                              {act.guest_ids.length === 0 ? (
                                <span className="text-[8px] font-bold uppercase text-[#DBC2B0]">No specific guests assigned</span>
                              ) : (
                                act.guest_ids.map(gid => {
                                  const guest = eventData.guests.find(g => g.id === gid);
                                  return (
                                    <div key={gid} className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#f28c28] flex items-center justify-center text-[8px] font-bold text-white shadow-sm" title={guest?.name}>
                                      {guest?.name.charAt(0)}
                                    </div>
                                  );
                                })
                              )}
                            </div>
                             <button 
                              className="text-[8px] font-bold uppercase tracking-widest text-[#f28c28] hover:text-[#d4af37] transition-colors flex items-center space-x-1"
                              onClick={() => setShowGuestPicker({ dayIdx: dIdx, actIdx: aIdx })}
                            >
                              <Plus className="w-2 h-2" />
                              <span>Assign Guests</span>
                            </button>
                          </div>
                        </div>
                      ))}
                      <button 
                        onClick={() => addActivity(dIdx)}
                        className="w-full py-4 border-2 border-dashed border-[#DBC2B0]/30 rounded-xl text-sm font-bold uppercase tracking-widest text-[#887364] hover:bg-[#f28c28]/5 hover:border-[#f28c28]/30 transition-all flex items-center justify-center space-x-2"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Activity</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

               <div className="flex flex-col sm:flex-row justify-between pt-8 border-t border-[#faf9f6] gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="w-full sm:w-auto px-8 py-4 text-[#887364] font-bold uppercase text-sm md:text-base tracking-wide hover:text-[#1A1C1A] transition-all flex items-center justify-center space-x-3 order-2 sm:order-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Basic Details</span>
                </button>
                 <button 
                  onClick={() => {
                    // Validation: Each day must have a date and at least one activity with a location
                    const invalidDayIndices = eventData.days
                      .map((day, idx) => {
                        const hasDate = day.date && day.date.trim() !== "";
                        const hasActivity = day.activities.length > 0;
                        
                        // Refactored validation: Check if title exists AND any part of location exists
                        const allActivitiesValid = day.activities.every(act => {
                          const hasTitle = act.title && act.title.trim() !== '';
                          const resolvedAddress = act.inherit_location ? day.address : act.address;
                          // Robust check: any address field will suffice for transition
                          const hasLocation = formatAddress(resolvedAddress).trim() !== '';
                          return hasTitle && hasLocation;
                        });
                        
                        return (!hasDate || !hasActivity || !allActivitiesValid) ? idx + 1 : null;
                      })
                      .filter(val => val !== null);
                    
                    if (invalidDayIndices.length > 0) {
                      toast.error(`Invalid Data on Day ${invalidDayIndices.join(", ")}`, {
                        description: "Every day must have a selected date, at least one activity, and every activity must have a name and location."
                      });
                      return;
                    }
                    if (!eventData.location || eventData.location.trim() === '') {
                      toast.error("Missing Primary Location", {
                        description: "Please provide a primary event location in Step 1."
                      });
                      setStep(1); // Go back to fix it
                      return;
                    }
                    setStep(3);
                  }}
                  disabled={eventData.days.length === 0}
                  className="w-full sm:w-auto px-10 py-4 bg-[#f28c28] text-white rounded-xl font-bold uppercase text-sm md:text-base tracking-wide shadow-lg shadow-[#f28c28]/20 hover:bg-[#d4af37] transition-all flex items-center justify-center space-x-3 disabled:opacity-50 order-1 sm:order-2"
                >
                  <span>Review Guests</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#1A1C1A] mb-2">Guest List</h2>
                <p className="text-[#887364] text-sm">Manage the guest list for this event.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-[#fcfbf9] p-8 rounded-2xl border border-[#faf9f6]">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8f4e00] mb-6 flex items-center space-x-2">
                      <UserPlus className="w-4 h-4" />
                      <span>Add New Guest</span>
                    </h3>
                    <form 
                      onSubmit={(e: any) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const isFullEvent = formData.get("isFullEvent") === "on";
                        
                        // Collect selected activity IDs from a group of checkboxes or hidden field
                        // For simplicity in this form, I'll use a local state or just check for selected ones
                        const selectedActivities = eventData.days.flatMap(d => d.activities)
                          .filter(a => (e.target.querySelector(`input[name="act_${a.id}"]`) as HTMLInputElement)?.checked)
                          .map(a => a.id);

                        addGuest(
                          formData.get("name") as string,
                          formData.get("whatsapp") as string,
                          parseInt(formData.get("count") as string),
                          selectedActivities,
                          isFullEvent
                        );
                        e.target.reset();
                      }}
                      className="space-y-4"
                    >
                      <input name="name" placeholder="Guest Name" required className="w-full px-6 py-3 bg-white border border-[#faf9f6] rounded-xl outline-none text-sm" />
                      <input name="whatsapp" placeholder="WhatsApp Number (e.g., +91...)" required className="w-full px-6 py-3 bg-white border border-[#faf9f6] rounded-xl outline-none text-sm" />
                      
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-100">
                        <input type="checkbox" name="isFullEvent" id="isFullEvent" defaultChecked className="w-4 h-4 accent-primary" />
                        <label htmlFor="isFullEvent" className="text-xs font-bold text-stone-500 uppercase cursor-pointer">Assigned to Full Event</label>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1">Or Select Specific Activities</label>
                        <div className="max-h-[150px] overflow-y-auto p-3 bg-white rounded-xl border border-stone-100 space-y-2">
                           {eventData.days.map((day, dIdx) => (
                             <div key={day.date + dIdx} className="space-y-1">
                               <p className="text-[9px] font-bold text-primary uppercase">Day {dIdx + 1} - {day.date}</p>
                               {day.activities.map(act => (
                                 <label key={act.id} className="flex items-center gap-2 cursor-pointer hover:bg-stone-50 p-1 rounded transition-colors">
                                   <input type="checkbox" name={`act_${act.id}`} className="w-3 h-3 accent-primary" />
                                   <span className="text-[11px] text-stone-600 font-medium">{act.title || "Untitled Activity"}</span>
                                 </label>
                               ))}
                             </div>
                           ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <input name="count" type="number" defaultValue="1" min="1" className="w-1/3 px-6 py-3 bg-white border border-[#faf9f6] rounded-xl outline-none text-sm" />
                        <button type="submit" className="flex-grow py-3 bg-[#d4af37] text-white rounded-xl font-bold uppercase text-base tracking-wide shadow-lg shadow-[#d4af37]/10 hover:bg-[#8f4e00] transition-colors">Add Guest</button>
                      </div>
                    </form>
                 </div>

                 <div className="bg-[#fcfbf9] p-8 rounded-2xl border border-[#faf9f6] overflow-y-auto max-h-[300px]">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8f4e00] mb-6 flex items-center space-x-2">
                       <Users className="w-4 h-4" />
                       <span>Invitee List ({eventData.guests.length})</span>
                    </h3>
                    <div className="space-y-3">
                      {eventData.guests.length === 0 && (
                        <p className="text-sm text-[#DBC2B0] uppercase text-center py-8 italic">No guests added yet</p>
                      )}
                      {eventData.guests.map(guest => (
                        <div key={guest.id} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-[#faf9f6]">
                           <div>
                             <p className="text-sm font-bold text-[#1A1C1A]">{guest.name}</p>
                             <p className="text-[9px] text-[#887364]">
                               {guest.whatsapp} • {guest.num_guests} Guests
                               <span className="block mt-1 text-primary font-bold">
                                 {guest.is_full_event ? "Full Event" : `${guest.activity_ids.length} Activities`}
                               </span>
                             </p>
                           </div>
                          <button onClick={() => removeGuest(guest.id)} className="text-red-300 hover:text-red-500 transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>

              <div className="flex justify-between pt-8 border-t border-[#faf9f6]">
                <button 
                  onClick={() => setStep(2)}
                  className="px-8 py-4 text-[#887364] font-bold uppercase text-base tracking-wide hover:text-[#1A1C1A] transition-all flex items-center space-x-3"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Timeline</span>
                </button>
                <button 
                  onClick={() => setStep(4)}
                  className="px-10 py-4 bg-[#8f4e00] text-white rounded-xl font-bold uppercase text-base tracking-wide shadow-lg shadow-[#8f4e00]/20 hover:bg-[#735c00] transition-all flex items-center space-x-3"
                >
                  <span>Final Review</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-[#f28c28]/10 rounded-full flex items-center justify-center text-[#f28c28] mx-auto mb-6">
                  <Sparkles className="w-10 h-10" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#1A1C1A] mb-2">Event Confirmation</h2>
                <p className="text-[#887364] text-sm">Review final details and trigger event orchestration.</p>
              </div>

              <div className="bg-[#fcfbf9] rounded-2xl p-8 border border-[#faf9f6] space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-serif text-2xl font-bold">{eventData.title}</h4>
                    <span className="inline-block mt-2 px-3 py-1 bg-[#f28c28]/10 text-[#f28c28] text-sm font-bold uppercase tracking-widest rounded-full">{eventData.event_type}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#887364]">Event Registry</p>
                    <p className="font-bold text-[#8f4e00]">{eventData.guests.length} Guests • {eventData.days.length} Days</p>
                  </div>
                </div>
                
                <p className="text-sm text-[#887364] leading-relaxed italic border-t border-[#faf9f6] pt-6">"{eventData.description}"</p>
                
                <div className="flex items-center space-x-3 text-sm font-bold uppercase tracking-widest text-[#887364] bg-[#d4af37]/5 p-4 rounded-xl border border-[#d4af37]/10">
                   <MessageSquare className="w-4 h-4 text-[#d4af37]" />
                   <span>RSVP Invitations will be sent via your WhatsApp number</span>
                </div>
              </div>

              <div className="flex justify-between pt-8 border-t border-[#faf9f6]">
                <button 
                  onClick={() => setStep(3)}
                  className="px-8 py-4 text-[#887364] font-bold uppercase text-base tracking-wide hover:text-[#1A1C1A] transition-all flex items-center space-x-3"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Guests</span>
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-12 py-4 bg-gradient-to-br from-[#8f4e00] to-[#ff9933] text-white rounded-xl font-bold uppercase text-base tracking-wide shadow-xl shadow-[#f28c28]/20 hover:scale-[1.02] transition-all flex items-center space-x-3 disabled:opacity-50"
                >
                  {loading ? (
                    <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                       <Sparkles className="w-4 h-4" />
                    </motion.div>
                  ) : <CheckCircle2 className="w-4 h-4" />}
                  <span>{loading ? "Orchestrating..." : "Launch Event"}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modals */}
        {pickerState.type === "date" && (
          <DateModal 
            isOpen={true}
            onClose={() => setPickerState({ type: null })}
            onSelect={(date) => {
              if (pickerState.dayIdx !== undefined) updateDay(pickerState.dayIdx, "date", date);
              setPickerState({ type: null });
            }}
            initialDate={pickerState.dayIdx !== undefined ? eventData.days[pickerState.dayIdx].date : ""}
          />
        )}

        {pickerState.type === "time" && (
          <TimeModal 
            isOpen={true}
            onClose={() => setPickerState({ type: null })}
            onSelect={handleTimeSelect}
            initialTime={pickerState.dayIdx !== undefined && pickerState.actIdx !== undefined ? eventData.days[pickerState.dayIdx].activities[pickerState.actIdx].start_time : "09:00 AM"}
          />
        )}
      </div>

      <AnimatePresence>
        {showGuestPicker && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGuestPicker(null)}
              className="absolute inset-0 bg-[#1A1C1A]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-[#faf9f6]"
            >
              <h3 className="font-serif text-2xl font-bold mb-2">Assign Guests</h3>
              <p className="text-[#887364] text-sm mb-6">Select guests for this specific activity.</p>
              
              <div className="space-y-3 max-h-[300px] overflow-y-auto mb-6 pr-2 custom-scrollbar">
                {eventData.guests.length === 0 && (
                  <p className="text-center py-8 text-sm text-[#DBC2B0] uppercase font-bold">No guests added yet. Add them in Step 3.</p>
                )}
                {eventData.guests.map(guest => {
                  const currentDay = eventData.days[showGuestPicker.dayIdx];
                  const currentAct = currentDay?.activities[showGuestPicker.actIdx];
                  if (!currentAct) return null;
                  
                  const isAssigned = currentAct.guest_ids.includes(guest.id);
                  return (
                    <button
                      key={guest.id}
                      onClick={() => {
                        const newDays = [...eventData.days];
                        const act = newDays[showGuestPicker.dayIdx].activities[showGuestPicker.actIdx];
                        if (isAssigned) {
                          act.guest_ids = act.guest_ids.filter(id => id !== guest.id);
                        } else {
                          act.guest_ids.push(guest.id);
                        }
                        setEventData({ ...eventData, days: newDays });
                      }}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                        isAssigned 
                        ? 'bg-[#f28c28]/10 border-[#f28c28] shadow-sm' 
                        : 'bg-[#faf9f6] border-[#faf9f6] hover:border-[#f28c28]/30'
                      }`}
                    >
                      <div className="text-left">
                        <p className={`text-sm font-bold ${isAssigned ? 'text-[#f28c28]' : 'text-[#1A1C1A]'}`}>{guest.name}</p>
                        <p className="text-xs text-[#887364]">{guest.whatsapp}</p>
                      </div>
                      {isAssigned && <CheckCircle2 className="w-5 h-5 text-[#f28c28]" />}
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => setShowGuestPicker(null)}
                className="w-full py-4 bg-[#f28c28] text-white rounded-xl font-bold uppercase text-base tracking-wide shadow-lg shadow-[#f28c28]/20 hover:bg-[#d4af37] transition-all"
              >
                Confirm Selections
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #faf9f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #DBC2B0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #887364;
        }
      `}</style>
    </div>
  );
}

