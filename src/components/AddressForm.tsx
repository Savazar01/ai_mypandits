"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface Address {
  country: string;
  street: string;
  room: string;
  city: string;
  state: string;
  zip: string;
}

interface AddressFormProps {
  address: Address;
  onChange: (address: Address) => void;
  labelPrefix?: string;
  showIcon?: boolean;
}

export default function AddressForm({ address, onChange, labelPrefix = "", showIcon = true }: AddressFormProps) {
  const handleChange = (field: keyof Address, value: string) => {
    onChange({ ...address, [field]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
      {/* Street */}
      <div className="md:col-span-2 space-y-1.5">
        <label className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
          {showIcon && <MapPin size={12} className="text-primary" />}
          {labelPrefix} Street Address
        </label>
        <input 
          type="text" 
          value={address.street}
          onChange={(e) => handleChange('street', e.target.value)}
          placeholder="Building number, street name"
          className="w-full px-4 py-3.5 md:py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors bg-white/50 backdrop-blur-sm placeholder:text-stone-300 text-base md:text-sm"
        />
      </div>

      {/* Room/Suite */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Room / Suite / Apartment</label>
        <input 
          type="text" 
          value={address.room}
          onChange={(e) => handleChange('room', e.target.value)}
          placeholder="e.g. Apt 101, Floor 2"
          className="w-full px-4 py-3.5 md:py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors bg-white/50 backdrop-blur-sm placeholder:text-stone-300 text-base md:text-sm"
        />
      </div>

      {/* City */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">City</label>
        <input 
          type="text" 
          value={address.city}
          onChange={(e) => handleChange('city', e.target.value)}
          placeholder="Enter city"
          className="w-full px-4 py-3.5 md:py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors bg-white/50 backdrop-blur-sm placeholder:text-stone-300 text-base md:text-sm"
        />
      </div>

      {/* State */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">State / Province</label>
        <input 
          type="text" 
          value={address.state}
          onChange={(e) => handleChange('state', e.target.value)}
          placeholder="Enter state"
          className="w-full px-4 py-3.5 md:py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors bg-white/50 backdrop-blur-sm placeholder:text-stone-300 text-base md:text-sm"
        />
      </div>

      {/* Zip */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Zip / Pin Code</label>
        <input 
          type="text" 
          value={address.zip}
          onChange={(e) => handleChange('zip', e.target.value)}
          placeholder="6-digit PIN or Zip"
          className="w-full px-4 py-3.5 md:py-3 rounded-xl border border-stone-200 focus:border-primary outline-none transition-colors bg-white/50 backdrop-blur-sm placeholder:text-stone-300 text-base md:text-sm"
        />
      </div>
    </div>
  );
}
