"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";
import { Loader2, Save, MapPin, User as UserIcon, Phone, Globe, Camera, Sparkles, Bell, Download, X, Info, CheckCircle, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SignOutButton } from "@/components/SignOutButton";
import Link from "next/link";
import Image from "next/image";

import { COUNTRIES } from "@/lib/countries";

const ALL_SKILLS = ["Event Consultant", "Decorator", "Caterer", "Photographer", "Event Planner", "Venue Provider", "Event Supplies", "Media and Design", "Venue", "DJ", "Other"];

export default function SettingsPage() {
  const { data: session, isPending } = useSession();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [activeTab, setActiveTab] = useState<'profile' | 'expertise'>('profile');
  const [showGuide, setShowGuide] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    whatsappCode: "+91",
    whatsappNumber: "",
    address: {
      country: "IN",
      street: "",
      suite: "",
      city: "",
      state: "",
      zip: "",
    },
    expertise: {
      skills: [] as string[],
      details: {} as Record<string, string>,
      templeName: "",
      templeAddress: "",
      templeContact: "",
      venueName: "",
      venueAddress: "",
      venueContact: "",
      website: "",
      facebook: "",
      instagram: "",
      twitter: "",
      files: [] as { url: string, name: string }[]
    }
  });

  const generatedLocation = [
    formData.address.street,
    formData.address.city,
    formData.address.state,
    COUNTRIES.find(c => c.code === formData.address.country)?.name || formData.address.country,
    formData.address.zip
  ].filter(Boolean).join('-');

  useEffect(() => {
    if (session?.user) {
      const userAny = session.user as any;
      const profile = typeof userAny.profile_data === "string" 
        ? JSON.parse(userAny.profile_data || "{}") 
        : userAny.profile_data || {};
        
      let wCode = "+91";
      // @ts-expect-error - BetterAuth additionalFields not yet synchronized with client types
      let wNum = session.user.whatsapp || "";
      const knownCodes = COUNTRIES.map(c => c.dialCode);
      const matchedCode = knownCodes.find(code => wNum.startsWith(code));
      if (matchedCode) {
        wCode = matchedCode;
        wNum = wNum.slice(matchedCode.length);
      }

      setFormData({
        name: session.user.name || "",
        image: session.user.image || "",
        whatsappCode: wCode,
        whatsappNumber: wNum,
        address: profile.address || {
          country: "IN",
          street: "",
          suite: "",
          city: "",
          state: "",
          zip: "",
        },
        expertise: profile.expertise || {
          skills: [],
          details: {},
          templeName: "",
          templeAddress: "",
          templeContact: "",
          venueName: "",
          venueAddress: "",
          venueContact: "",
          website: "",
          facebook: "",
          instagram: "",
          twitter: "",
          files: []
        }
      });
    }
  }, [session]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
        alert("Please upload a JPEG image.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSkill = (skill: string) => {
    setFormData(prev => {
      const current = prev.expertise.skills;
      const newSkills = current.includes(skill) 
        ? current.filter(s => s !== skill)
        : [...current, skill];
      return { ...prev, expertise: { ...prev.expertise, skills: newSkills } };
    });
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const { error } = await authClient.updateUser({
        name: formData.name,
        image: formData.image,
        // @ts-expect-error - BetterAuth additionalFields handled via server hooks
        whatsapp: `${formData.whatsappCode}${formData.whatsappNumber}`,
        profile_data: JSON.stringify({
          ...JSON.parse((session?.user as any)?.profile_data || "{}"),
          address: formData.address,
          location: generatedLocation,
          expertise: formData.expertise
        }),
      });

      if (error) throw error;
      setMessage({ type: "success", text: "User settings updated successfully." });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to update settings." });
    } finally {
      setLoading(false);
    }
  };

  if (isPending) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary" /></div>;

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1A1C1A] font-sans pb-20">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-transparent shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://savazar.com/wp-content/uploads/2023/10/cropped-Transparent_Image_2-300x100.png" 
              alt="EventicAI Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="font-serif text-xl font-bold tracking-tight">EventicAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-[0.2em] text-[#887364]">
            <Link href={`/dashboard/${session?.user?.role === "PROVIDER" ? "provider" : "customer"}`} className="hover:text-saffron transition-colors">
              {session?.user?.role === "PROVIDER" ? "Provider Dashboard" : "Customer Dashboard"}
            </Link>
            <span className="text-primary border-b border-primary pb-1">User Settings</span>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-[#887364] hover:text-saffron transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <SignOutButton />
          </div>
        </div>
      </nav>
      
      <main className="max-w-4xl mx-auto px-6 pt-32 space-y-12">
        <header className="space-y-4">
          <h1 className="font-serif text-4xl font-bold tracking-tight">User Settings</h1>
          <p className="text-[#887364] italic">Manage your profile, expertise, and connectivity</p>
        </header>

        {message.text && (
          <div className={`p-4 rounded-xl text-sm font-medium ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"}`}>
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sidebar Nav */}
          <div className="space-y-2">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'profile' ? 'bg-white shadow-sm border border-orange-100 text-primary font-bold' : 'text-stone-500 hover:bg-stone-50'}`}>
              <UserIcon size={18} /> Profile
            </button>
            
            {session?.user?.role === "PROVIDER" && (
              <button 
                onClick={() => setActiveTab('expertise')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'expertise' ? 'bg-white shadow-sm border border-orange-100 text-primary font-bold' : 'text-stone-500 hover:bg-stone-50'}`}>
                <Sparkles size={18} /> Expertise
              </button>
            )}

            <button className="w-full text-left px-4 py-3 rounded-xl text-stone-500 hover:bg-stone-50 transition-colors flex items-center gap-3">
              <Phone size={18} /> Notifications
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl text-stone-500 hover:bg-stone-50 transition-colors flex items-center gap-3">
              <Globe size={18} /> Connectivity
            </button>
          </div>

          {/* Form Content */}
          <div className="md:col-span-2 space-y-12">
            
            {activeTab === 'profile' && (
              <div className="space-y-12">
                {/* Profile Image Section */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                    <Camera size={14} /> Profile Picture
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-stone-200 border-4 border-white shadow-sm flex items-center justify-center relative group">
                      {formData.image ? (
                        <Image src={formData.image} alt="Profile" fill className="object-cover" />
                      ) : (
                        <UserIcon size={40} className="text-stone-400" />
                      )}
                      <div 
                        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" 
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Camera size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 border border-stone-200 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors"
                      >
                        Change JPEG Photo
                      </button>
                      <input 
                        type="file" 
                        accept="image/jpeg, image/jpg" 
                        className="hidden" 
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                      />
                      <p className="text-xs text-stone-400 mt-2">Only JPEG files supported.</p>
                    </div>
                  </div>
                </section>

                {/* Basic Info */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                    <UserIcon size={14} /> Basic Information
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#25D366] uppercase tracking-[0.2em] flex items-center gap-1.5">
                        <WhatsAppIcon size={12} /> WhatsApp Number
                      </label>
                      <div className="flex gap-2">
                        <select
                          className="w-24 px-2 py-3 rounded-xl border border-stone-200 bg-transparent focus:border-primary focus:outline-none transition-all"
                          value={formData.whatsappCode}
                          onChange={(e) => setFormData({...formData, whatsappCode: e.target.value})}
                        >
                          {COUNTRIES.map(c => (
                            <option key={c.code} value={c.dialCode}>{c.flag} {c.dialCode} ({c.code})</option>
                          ))}
                        </select>
                        <input 
                          type="text" 
                          value={formData.whatsappNumber}
                          onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                          className="flex-1 w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Address Section */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                    <MapPin size={14} /> Location (Address)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Country</label>
                      <select 
                        value={formData.address.country}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, country: e.target.value}})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none bg-white transition-colors"
                      >
                        {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Street Address</label>
                      <input 
                        type="text" 
                        placeholder="House No., Building Name"
                        value={formData.address.street}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Suite / Apartment</label>
                      <input 
                        type="text" 
                        value={formData.address.suite}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, suite: e.target.value}})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">City</label>
                      <input 
                        type="text" 
                        value={formData.address.city}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, city: e.target.value}})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">State / Province</label>
                      <input 
                        type="text" 
                        value={formData.address.state}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, state: e.target.value}})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Zip / Pin Code</label>
                      <input 
                        type="text" 
                        value={formData.address.zip}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, zip: e.target.value}})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-stone-50 rounded-xl border border-stone-100 flex flex-col gap-1">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Generated Location String</label>
                    <p className="text-sm font-medium text-stone-600 break-all">
                      {generatedLocation || "Your location string will appear here based on your address."}
                    </p>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'expertise' && (
               <div className="space-y-12">
                 {/* Skills Section */}
                 <section className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                      <Sparkles size={14} /> Core Expertise
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                       {ALL_SKILLS.map(skill => (
                          <label key={skill} className={`p-4 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${formData.expertise.skills.includes(skill) ? 'bg-orange-50 border-primary text-primary shadow-sm' : 'bg-white border-stone-200 hover:border-orange-200'}`}>
                             <input type="checkbox" className="w-4 h-4 rounded border-stone-300 accent-primary focus:ring-primary" checked={formData.expertise.skills.includes(skill)} onChange={() => toggleSkill(skill)} />
                             <span className="font-medium text-sm">{skill}</span>
                          </label>
                       ))}
                    </div>
                 </section>

                 {/* Dynamic Details */}
                 {formData.expertise.skills.length > 0 && (
                   <section className="space-y-6">
                      <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                        <UserIcon size={14} /> Service Details
                      </div>
                      {formData.expertise.skills.map(skill => (
                        <div key={skill} className="space-y-4">
                           <div className="flex items-center justify-between">
                              <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">{skill} Specifics</label>
                           </div>
                           
                           {skill === "Temple" ? (
                              <div className="space-y-4 bg-stone-50/50 p-6 rounded-2xl border border-stone-100">
                                 <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-stone-400 uppercase tracking-[0.1em]">Temple Name</label>
                                    <input 
                                       type="text" 
                                       placeholder="e.g. Sri Venkateswara Swamy Temple"
                                       className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                                       value={formData.expertise.templeName || ""}
                                       onChange={e => setFormData(prev => ({...prev, expertise: {...prev.expertise, templeName: e.target.value}}))}
                                    />
                                 </div>
                                 <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-stone-400 uppercase tracking-[0.1em]">Temple Full Address</label>
                                    <textarea 
                                       placeholder="Complete address including street, city, state and landmark..."
                                       className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors h-20 resize-none text-sm"
                                       value={formData.expertise.templeAddress || ""}
                                       onChange={e => setFormData(prev => ({...prev, expertise: {...prev.expertise, templeAddress: e.target.value}}))}
                                    />
                                 </div>
                                 <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-stone-400 uppercase tracking-[0.1em]">Temple Admin / Contact Phone</label>
                                    <input 
                                       type="text" 
                                       placeholder="Contact person or office number"
                                       className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                                       value={formData.expertise.templeContact || ""}
                                       onChange={e => setFormData(prev => ({...prev, expertise: {...prev.expertise, templeContact: e.target.value}}))}
                                    />
                                 </div>
                                 <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 flex items-start gap-2">
                                    <Info size={14} className="text-primary mt-0.5 shrink-0" />
                                    <p className="text-sm text-stone-500 leading-normal">
                                      Venue details help us recommend your services to customers looking for event coordination at specific locations.
                                    </p>
                                 </div>
                              </div>
                           ) : skill === "Venue Provider" ? (
                              <div className="space-y-4 bg-stone-50/50 p-6 rounded-2xl border border-stone-100">
                                 <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-stone-400 uppercase tracking-[0.1em]">Venue Name</label>
                                    <input 
                                       type="text" 
                                       placeholder="e.g. Grand Heritage Hall"
                                       className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                                       value={formData.expertise.venueName || ""}
                                       onChange={e => setFormData(prev => ({...prev, expertise: {...prev.expertise, venueName: e.target.value}}))}
                                    />
                                 </div>
                                 <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-stone-400 uppercase tracking-[0.1em]">Venue Full Address</label>
                                    <textarea 
                                       placeholder="Complete address for event coordination..."
                                       className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors h-20 resize-none text-sm"
                                       value={formData.expertise.venueAddress || ""}
                                       onChange={e => setFormData(prev => ({...prev, expertise: {...prev.expertise, venueAddress: e.target.value}}))}
                                    />
                                 </div>
                                 <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-stone-400 uppercase tracking-[0.1em]">Venue Contact Person / Phone</label>
                                    <input 
                                       type="text" 
                                       placeholder="Contact person or business number"
                                       className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                                       value={formData.expertise.venueContact || ""}
                                       onChange={e => setFormData(prev => ({...prev, expertise: {...prev.expertise, venueContact: e.target.value}}))}
                                    />
                                 </div>
                                 <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 flex items-start gap-2">
                                    <Info size={14} className="text-primary mt-0.5 shrink-0" />
                                    <p className="text-sm text-stone-500 leading-normal">
                                      Providing venue details helps customers book your hall for pujas, ceremonies, or weddings directly through the platform.
                                    </p>
                                 </div>
                              </div>
                           ) : (
                              <textarea 
                                 placeholder={`Describe your offerings, experience, and pricing rules as a ${skill}...`}
                                 className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors h-24 resize-none"
                                 value={formData.expertise.details[skill] || ""}
                                 onChange={e => setFormData(prev => ({...prev, expertise: {...prev.expertise, details: {...prev.expertise.details, [skill]: e.target.value}}}))}
                              />
                           )}
                        </div>
                      ))}

                      {formData.expertise.skills.length > 0 && (
                        <div className="mt-8 p-6 bg-stone-50 rounded-xl border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h5 className="font-bold text-sm text-stone-700 flex items-center gap-2">
                              <Download size={16} className="text-primary"/> 
                              E-Commerce Catalog Bulk Upload
                            </h5>
                            <p className="text-xs text-stone-500 leading-tight mt-2 max-w-sm">
                              Quickly import all your structured goods and services via CSV. Expected format strictly: 
                              <br/><span className="font-bold text-stone-600">Category, Goods/Service Name, Price Unit, Description, Currency, Price</span>
                            </p>
                            <div className="flex items-center gap-3 mt-3">
                              <a href="/sample_catalog.csv" download className="text-primary hover:text-orange-600 transition-colors uppercase tracking-widest text-sm font-bold inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-stone-100 shadow-sm">
                                <Download size={14} /> Download Template
                              </a>
                              <button 
                                onClick={() => setShowGuide(true)}
                                className="text-stone-500 hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-stone-100 shadow-sm"
                              >
                                <HelpCircle size={14} /> How to Update?
                              </button>
                            </div>
                          </div>
                          
                          <button
                             onClick={() => {
                                const input = document.createElement('input');
                                input.type = 'file';
                                input.accept = '.csv';
                                input.onchange = async (e) => {
                                   const file = (e.target as HTMLInputElement).files?.[0];
                                   if (!file) return;
                                   setLoading(true);
                                   setMessage({ type: "", text: "" });
                                   try {
                                      const fData = new FormData();
                                      fData.append('file', file);
                                      fData.append('userId', session?.user?.id || '');
                                      const req = await fetch('/api/catalog', { method: 'POST', body: fData });
                                      if (req.ok) {
                                          const dt = await req.json();
                                          setMessage({ type: "success", text: `Successfully imported ${dt.count} categorized items!` });
                                      } else {
                                          const et = await req.json();
                                          setMessage({ type: "error", text: et.error || "Failed to process catalog." });
                                      }
                                   } catch(err) {
                                      setMessage({ type: "error", text: "Network error processing catalog." });
                                   } finally {
                                      setLoading(false);
                                   }
                                };
                                input.click();
                             }}
                             className="px-6 py-3 bg-stone-800 text-white rounded-xl text-sm font-bold hover:bg-stone-900 transition-colors shadow-md w-full md:w-auto text-center"
                          >
                             Upload CSV
                          </button>
                        </div>
                      )}
                   </section>
                 )}

                 {/* Social Links */}
                 <section className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                      <Globe size={14} /> Web Presence
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {['website', 'facebook', 'instagram', 'twitter'].map(platform => (
                         <div key={platform} className="space-y-1.5">
                           <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">{platform}</label>
                           <input type="text" placeholder={`https://${platform === 'website' ? 'yourdomain.com' : platform + '.com/yourhandle'}`} 
                             className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors"
                             value={(formData.expertise as any)[platform] as string}
                             onChange={e => setFormData(p => ({...p, expertise: {...p.expertise, [platform]: e.target.value}}))}
                           />
                         </div>
                       ))}
                    </div>
                 </section>

                 {/* General Files */}
                 <section className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                      <Camera size={14} /> Portfolio & Documents
                    </div>
                    <div className="border-2 border-dashed border-stone-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-2 bg-stone-50/50 transition-colors hover:bg-stone-50 group">
                       <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-stone-400 group-hover:text-primary transition-colors">
                          <Camera size={20} />
                       </div>
                       <p className="text-sm font-medium text-stone-600 mt-2">Upload pictures (.jpg, .png) or PDFs</p>
                       <button 
                         onClick={() => {
                           const input = document.createElement('input');
                           input.type = 'file';
                           input.multiple = true;
                           input.accept = '.jpg,.jpeg,.png,.pdf';
                           input.onchange = async (e) => {
                               const files = (e.target as HTMLInputElement).files;
                               if (!files) return;
                               setLoading(true);
                               setMessage({ type: "", text: "" });
                               try {
                                  for (let i = 0; i < files.length; i++) {
                                     const fData = new FormData();
                                     fData.append('file', files[i]);
                                     const res = await fetch('/api/upload', { method: 'POST', body: fData });
                                     const json = await res.json();
                                     if (json.url) {
                                        setFormData(p => ({...p, expertise: {...p.expertise, files: [...p.expertise.files, { url: json.url, name: files[i].name }]}}));
                                     }
                                  }
                               } finally {
                                  setLoading(false);
                               }
                           };
                           input.click();
                         }}
                         className="mt-2 px-6 py-2 bg-white border border-stone-200 font-bold text-stone-600 hover:text-primary hover:border-primary/20 rounded-xl transition-all shadow-sm">
                         Browse Files
                       </button>
                       {formData.expertise.files.length > 0 && (
                          <div className="mt-6 w-full text-left space-y-2">
                            {formData.expertise.files.map((f, i) => (
                              <div key={i} className="text-xs bg-white py-2 px-3 rounded-lg border border-stone-200 flex items-center justify-between shadow-sm">
                                <span className="truncate max-w-[200px] font-medium text-stone-600">{f.name}</span>
                                <a href={f.url} target="_blank" className="text-primary hover:underline font-bold tracking-wider uppercase text-sm">View</a>
                              </div>
                            ))}
                          </div>
                       )}
                    </div>
                 </section>
               </div>
            )}
            
            <div className="pt-6 border-t border-stone-200">
              <button 
                onClick={handleSave}
                disabled={loading}
                className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Instructions Modal */}
      {showGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                 <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
                   <HelpCircle size={18} /> Catalog Update Guide
                 </div>
                 <button onClick={() => setShowGuide(false)} className="p-2 hover:bg-stone-200 rounded-full transition-colors">
                   <X size={20} className="text-stone-500" />
                 </button>
              </div>
              <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                 <div className="space-y-4">
                    <h4 className="font-bold text-stone-800 flex items-center gap-2">
                       <CheckCircle size={18} className="text-green-500" /> 1. Download & Open
                    </h4>
                    <p className="text-sm text-stone-600 pl-7 leading-relaxed">
                       Download our standard template and open it in Excel or Google Sheets. Do not change the column headers.
                    </p>
                 </div>

                 <div className="space-y-4">
                    <h4 className="font-bold text-stone-800 flex items-center gap-2">
                       <Info size={18} className="text-blue-500" /> 2. Fill Your Data
                    </h4>
                    <div className="pl-7 space-y-3">
                       <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                          <p className="text-xs font-bold text-stone-700 uppercase mb-1">Goods (e.g. Puja Supplies)</p>
                          <p className="text-xs text-stone-600">List items like 'Ghee', 'Havan Kit'. Use 'PC' as Price Unit. Provide accurate Currency (INR/USD).</p>
                       </div>
                       <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                          <p className="text-xs font-bold text-stone-700 uppercase mb-1">Services (e.g. Consultant, Photographer)</p>
                          <p className="text-xs text-stone-600">List ceremonies or packages. Use 'Event', 'HR', or 'Day' as Price Unit. Feel free to add your specific local services.</p>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <h4 className="font-bold text-stone-800 flex items-center gap-2">
                       <CheckCircle size={18} className="text-green-500" /> 3. Currency & Pricing
                    </h4>
                    <p className="text-sm text-stone-600 pl-7 leading-relaxed">
                       Ensure the <span className="font-bold">Currency</span> matches your region (e.g., INR for India, USD for USA). The <span className="font-bold">Price</span> should be the numeric value only at the end of the line.
                    </p>
                 </div>

                 <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <p className="text-sm text-primary font-medium italic">
                       Pro Tip: You can delete the example rows and start fresh, or simply update the pricing for the services you provide from our standard list!
                    </p>
                 </div>
              </div>
              <div className="p-6 border-t border-stone-100 bg-stone-50 flex justify-end">
                 <button 
                  onClick={() => setShowGuide(false)}
                  className="px-6 py-2 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-colors"
                 >
                  Got it!
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
