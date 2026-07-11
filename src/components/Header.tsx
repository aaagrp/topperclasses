import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import LucideIcon from './LucideIcon';
import { SiteSettings } from '../types';

interface HeaderProps {
  settings: SiteSettings;
  onOpenAdmission: () => void;
  onOpenAdmin: () => void;
  isAdmin: boolean;
  onLogout: () => void;
  activePage: string;
  onChangePage: (page: string) => void;
}

export default function Header({
  settings,
  onOpenAdmission,
  onOpenAdmin,
  isAdmin,
  onLogout,
  activePage,
  onChangePage
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Courses', id: 'courses' },
    { name: 'Timings', id: 'timings' },
    { name: 'Activities', id: 'activities' },
    { name: 'Notices', id: 'notices' },
    { name: 'Gallery', id: 'gallery' },
  ];

  return (
    <>
      {/* Top Banner (Contact & Notice Ticker) */}
      <div className="bg-[#071B3A] text-[#F4E8C1] py-1.5 px-4 text-xs font-sans tracking-wide border-b border-[#D4AF37]/20 relative z-50 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${settings.contact.callNumbers[0]}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <LucideIcon name="Phone" size={13} className="text-[#D4AF37]" />
              <span>Call: +91 {settings.contact.callNumbers[0]}</span>
            </a>
            <span className="text-[#D4AF37]/40">|</span>
            <span className="flex items-center gap-1.5">
              <LucideIcon name="MapPin" size={13} className="text-[#D4AF37]" />
              <span>{settings.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="font-semibold text-[11px] uppercase tracking-widest text-[#D4AF37]">Session 2026-27 Open</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        id="app-header"
        className={`fixed top-0 md:top-8 left-0 right-0 z-40 transition-all duration-300 md:rounded-2xl md:max-w-7xl md:mx-auto md:px-2 ${
          isScrolled
            ? 'bg-white/95 dark:bg-white/[0.08] dark:backdrop-blur-md shadow-lg border-b border-[#071B3A]/10 dark:border-white/15 py-3'
            : 'bg-white/85 dark:bg-white/[0.05] dark:backdrop-blur-md border-b border-black/5 dark:border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => onChangePage('home')} className="flex items-center focus:outline-none cursor-pointer">
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isPageActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onChangePage(link.id)}
                  className={`px-4 py-2 rounded-lg font-sans text-[15px] font-medium transition-all relative group cursor-pointer ${
                    isPageActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#071B3A] dark:text-white/90 hover:text-[#D4AF37] dark:hover:text-[#D4AF37]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1.5 left-4 right-4 h-[2px] bg-[#D4AF37] transition-transform origin-left duration-300 ${
                    isPageActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              );
            })}
          </nav>

          {/* Call-to-Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Call Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setPhoneMenuOpen(!phoneMenuOpen)}
                className="flex items-center gap-2 px-3.5 py-2 border border-[#071B3A]/15 dark:border-white/15 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] text-[#071B3A] dark:text-white font-medium rounded-lg text-sm transition-all bg-transparent backdrop-blur-sm"
              >
                <LucideIcon name="Phone" size={16} className="text-[#D4AF37]" />
                <span>Call Center</span>
                <LucideIcon name="ChevronRight" size={14} className={`transform transition-transform ${phoneMenuOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {phoneMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setPhoneMenuOpen(false)}></div>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-64 rounded-xl bg-white dark:bg-[#071B3A]/95 shadow-xl border border-black/10 dark:border-white/15 p-3 backdrop-blur-md z-20"
                    >
                      <h4 className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold px-2 mb-2">Topper's Helpline</h4>
                      {settings.contact.callNumbers.map((num, idx) => (
                        <a
                          key={idx}
                          href={`tel:${num}`}
                          className="flex items-center justify-between px-2.5 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors text-sm font-sans font-medium text-[#071B3A] dark:text-white"
                        >
                          <span className="flex items-center gap-2">
                            <LucideIcon name="Phone" size={14} className="text-[#D4AF37]" />
                            <span>{num}</span>
                          </span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500">
                            {idx === 0 ? 'Director / Support' : idx === 1 ? 'Fee Help' : 'Technical Support'}
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Main Action Button */}
            <button
              onClick={onOpenAdmission}
              className="btn-gold flex items-center gap-1.5 px-5 py-2.5 text-sm cursor-pointer shadow-md"
            >
              <LucideIcon name="FileText" size={15} />
              <span>Admission Now</span>
            </button>
          </div>

          {/* Mobile Actions and Hamburger */}
          <div className="flex lg:hidden items-center gap-2.5">
            {/* Quick Mobile Support Buttons */}
            <a
              href={`https://wa.me/91${settings.contact.mainWhatsApp}?text=Hello%20Topper's%20Classes%2C%20I%20am%20interested%20in%20admission%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 rounded-lg hover:scale-105 active:scale-95 transition-all md:hidden"
            >
              <LucideIcon name="MessageCircle" size={18} />
            </a>

            <a
              href={`tel:${settings.contact.callNumbers[0]}`}
              className="p-2 bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-[#D4AF37] rounded-lg hover:scale-105 active:scale-95 transition-all md:hidden"
            >
              <LucideIcon name="Phone" size={18} />
            </a>

            <button
              onClick={onOpenAdmission}
              className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#B8962E] text-[#071B3A] text-xs font-bold rounded-lg shadow-sm block md:hidden"
            >
              Join Us
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#071B3A] dark:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all"
            >
              <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-white dark:bg-[#071B3A] border-t border-black/10 dark:border-white/10"
            >
              <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => {
                  const isPageActive = activePage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        onChangePage(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all text-left cursor-pointer ${
                        isPageActive
                          ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold'
                          : 'text-[#071B3A] dark:text-white/90 hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#D4AF37]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <LucideIcon name="ChevronRight" size={16} className={isPageActive ? 'text-[#D4AF37]' : 'text-gray-400'} />
                    </button>
                  );
                })}


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
