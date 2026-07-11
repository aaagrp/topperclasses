import React from 'react';
import Logo from './Logo';
import LucideIcon from './LucideIcon';
import { SiteSettings } from '../types';

interface FooterProps {
  settings: SiteSettings;
  onOpenAdmission: () => void;
  onOpenAdmin: () => void;
  isAdmin?: boolean;
  onLogout?: () => void;
}

export default function Footer({ settings, onOpenAdmission, onOpenAdmin, isAdmin, onLogout }: FooterProps) {
  return (
    <footer className="bg-[#071B3A] text-white pt-16 pb-8 border-t border-[#D4AF37]/20 relative overflow-hidden">
      {/* Subtle gold line on top of footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-left relative z-10 pb-12 border-b border-white/10">
        {/* Column 1: Brand details & Social (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <Logo size="lg" className="brightness-110" />
          <p className="font-sans text-xs text-gray-300 leading-relaxed max-w-sm">
            Newly established premier coaching institute in Gorakhpur. Committed to providing premium modular guidance, regular assessments, co-curricular expertise, and interactive personality development programs for Classes 1 to 10.
          </p>

          {/* Social Icons */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">Follow Our Community</span>
            <div className="flex items-center gap-3">
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] hover:scale-105 active:scale-95 transition-all"
                title="Topper's Classes Instagram"
              >
                <LucideIcon name="Volume2" size={16} /> {/* Generic social icon helper fallback */}
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] hover:scale-105 active:scale-95 transition-all"
                title="Topper's Classes Facebook"
              >
                <LucideIcon name="Users" size={16} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Fee Structure Card (3 cols) */}
        <div id="fees" className="lg:col-span-3 space-y-4">
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#D4AF37] border-b border-white/10 pb-2">
            Admission & Fee Inquiries
          </h4>

          {/* Premium Fee Card with strict text */}
          <div className="glass-panel p-4.5 space-y-4 border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
                <LucideIcon name="Coins" size={16} />
              </div>
              <span className="font-display font-extrabold text-sm text-[#D4AF37] uppercase tracking-wide">
                Fee Structure
              </span>
            </div>

            <div className="space-y-1">
              {/* Display Requirements */}
              <span className="block text-xs text-gray-400 font-semibold uppercase tracking-wider">Tuition Fees:</span>
              <p className="font-display font-bold text-lg text-white">
                Contact for Fee Details
              </p>
            </div>

            {/* Fees WhatsApp button */}
            <a
              href={`https://wa.me/91${settings.contact.feeInformation}?text=Hello%20Topper's%20Classes%2C%20I%20would%20like%20to%20know%20the%20fee%20details%20for%20admission.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] hover:opacity-90 text-[#071B3A] font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              <LucideIcon name="MessageCircle" size={14} />
              <span>WhatsApp Fee Desk</span>
            </a>
          </div>
        </div>

        {/* Column 3: Contact & Helplines (5 cols with maps) */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#D4AF37] border-b border-white/10 pb-2">
            Address & Location
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {/* Address Details */}
            <div className="space-y-3.5">
              <p className="flex items-start gap-2.5 text-xs text-gray-300 leading-normal">
                <LucideIcon name="MapPin" size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong>Topper's Classes Campus:</strong><br />
                  Rustampur Chowk, Near Petrol Pump, Rustampur, Gorakhpur, Uttar Pradesh - 273016
                </span>
              </p>

              <div className="space-y-1 text-xs text-gray-300">
                <span className="block text-[#D4AF37] font-semibold uppercase tracking-wider text-[10px]">Administrative Helplines:</span>
                {settings.contact.callNumbers.map((num, i) => (
                  <a
                    key={i}
                    href={`tel:${num}`}
                    className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors py-0.5"
                  >
                    <LucideIcon name="Phone" size={12} className="text-[#D4AF37]" />
                    <span>+91 {num} {i === 0 ? '(Support & Admissions)' : i === 1 ? '(Fee Desk)' : '(Tech Help)'}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Interactive embedded Google Maps Widget */}
            <div className="w-full h-32 rounded-xl overflow-hidden border border-white/10 shadow-inner relative mt-2 bg-slate-900">
              <iframe
                src={settings.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Topper's Classes Gorakhpur Location Map"
                className="opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright, Admin Trigger, and Legal Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
        <div className="space-y-1 sm:text-left">
          <p>© {new Date().getFullYear()} Topper's Classes. All Rights Reserved.</p>
          <p className="text-[10px] text-gray-500 font-sans">
            Director: <strong>{settings.directorName}</strong> • Situated at Rustampur Gorakhpur, UP
          </p>
        </div>

        {/* Admin Link */}
        <div className="flex items-center gap-3">
          {isAdmin ? (
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <button
                onClick={onOpenAdmin}
                className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <LucideIcon name="Settings" size={11} />
                <span>Manage Portal</span>
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={onLogout}
                className="text-[11px] font-bold uppercase tracking-wider text-red-400 hover:text-red-300 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <LucideIcon name="LogOut" size={11} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAdmin}
              className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1.5 cursor-pointer bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 px-3.5 py-1.5 rounded-lg transition-all"
            >
              <LucideIcon name="Lock" size={11} />
              <span>Management Desk (Admin Login)</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
