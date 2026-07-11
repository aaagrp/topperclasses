import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { SiteSettings } from '../types';

interface FloatingActionsProps {
  settings: SiteSettings;
}

export default function FloatingActions({ settings }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = `91${settings.contact.mainWhatsApp}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Topper's%20Classes%2C%20I%20would%20like%20to%20receive%20admission%20details%20for%20the%20current%20session.`;
  const primaryCall = `tel:${settings.contact.callNumbers[0]}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-11 h-11 bg-white/15 backdrop-blur-md text-[#D4AF37] border border-white/20 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white/25 hover:scale-105 active:scale-95 transition-all"
            title="Scroll To Top"
          >
            <LucideIcon name="ArrowUp" size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Direct Call hotline */}
      <motion.a
        href={primaryCall}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all cursor-pointer border border-blue-500/20"
        title="Direct helpline call"
      >
        <LucideIcon name="Phone" size={20} className="animate-wiggle" />
      </motion.a>

      {/* Direct WhatsApp hotline */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all cursor-pointer border border-emerald-400/20"
        title="Direct WhatsApp chat"
      >
        <LucideIcon name="MessageCircle" size={22} />
      </motion.a>
    </div>
  );
}
