import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import LucideIcon from './LucideIcon';
import { SiteSettings } from '../types';

interface HeroProps {
  settings: SiteSettings;
  onOpenAdmission: () => void;
}

export default function Hero({ settings, onOpenAdmission }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#071B3A]"
    >
      {/* Frosted Glass Mesh Background */}
      <div className="mesh-bg"></div>

      {/* Decorative Orbs & Light Rays */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-[#071B3A]/20 dark:bg-white/5 glow-orb -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10 glow-orb -z-10 animate-float"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8"
        >
          {/* Badge using the theme's .pill */}
          <motion.div
            variants={itemVariants}
            className="pill shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse mr-2"></span>
            <span>Admissions Open</span>
            <span className="mx-2 text-[#D4AF37]">•</span>
            <span>Session 2026-27</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Build Your Future <br />
              With <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 dark:from-[#D4AF37] dark:to-[#F4E8C1] underline decoration-[#D4AF37] decoration-wavy decoration-3 select-all">Topper's Classes</span>
            </h1>
            <p className="font-sans font-medium text-lg text-[#D4AF37] dark:text-[#D4AF37]/90 tracking-wide">
              Best Coaching Institute for Class 1 to 10
            </p>
          </motion.div>

          {/* Supporting Pitch */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base text-gray-300 max-w-xl leading-relaxed"
          >
            Empowering students in <strong className="text-white">Rustampur, Gorakhpur</strong> with premium modular learning, individual attention, and structured academic growth. We don't just teach—we shape tomorrow's leaders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenAdmission}
              className="btn-gold flex items-center justify-center gap-2 px-8 py-3.5 text-base w-full sm:w-auto cursor-pointer shadow-lg"
            >
              <LucideIcon name="FileText" size={18} />
              <span>Admission Now</span>
            </button>

            <a
              href={`tel:${settings.contact.callNumbers[0]}`}
              className="btn-outline flex items-center justify-center gap-2 px-6 py-3.5 text-base w-full sm:w-auto"
            >
              <LucideIcon name="Phone" size={18} className="text-[#D4AF37]" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/91${settings.contact.mainWhatsApp}?text=Hello%20Topper's%20Classes%2C%20I%20am%20interested%20in%20taking%20admission%20for%20my%20child.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/35 backdrop-blur-md font-semibold text-base rounded-full hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              <LucideIcon name="MessageCircle" size={18} />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 pt-4 border-t border-white/10 w-full"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-white">Class 1 to 10</span>
              <span className="text-xs text-gray-400">All Core Subjects & GK</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-white">Gorakhpur</span>
              <span className="text-xs text-gray-400">Rustampur Location</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-[#D4AF37]">Premium</span>
              <span className="text-xs text-gray-400">Small Batch Learning</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Decorative Graphic Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Main Visual Board styled with Frosted Glass Panel */}
          <div className="w-full max-w-[420px] rounded-3xl relative glass-panel p-1 border border-white/15 shadow-2xl overflow-hidden aspect-[4/5] flex flex-col justify-between">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]"></div>
            
            {/* Visual Header */}
            <div className="p-6 relative z-10 flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Topper's Classes</span>
                <h3 className="font-display font-extrabold text-xl text-white mt-1">Nurturing Leaders</h3>
              </div>
              <div className="flex items-center justify-center">
                <Logo showText={false} size="sm" />
              </div>
            </div>

            {/* Main Interactive Visual Mockup (Representing Classes, Timings, Progress) */}
            <div className="px-6 flex-1 flex flex-col justify-center space-y-4 relative z-10">
              {/* Feature Box 1 */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                  <LucideIcon name="Users" size={18} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm font-semibold text-white">Small Interactive Batches</h4>
                  <p className="text-[11px] text-gray-400">Personalized mentoring for all kids</p>
                </div>
              </motion.div>

              {/* Feature Box 2 */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <LucideIcon name="ClipboardCheck" size={18} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm font-semibold text-white">Sunday Test Series</h4>
                  <p className="text-[11px] text-gray-400">Regular progress tracker meetings</p>
                </div>
              </motion.div>

              {/* Feature Box 3 */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <LucideIcon name="Palette" size={18} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm font-semibold text-white">Activity-Based Development</h4>
                  <p className="text-[11px] text-gray-400">Music, Dance, Speech, Olympiad Prep</p>
                </div>
              </motion.div>
            </div>

            {/* Visual Footer Badge */}
            <div className="p-6 relative z-10 bg-gradient-to-t from-black/60 to-transparent pt-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs text-white/90 font-medium tracking-wide">Growing community in Rustampur Gorakhpur</span>
              </div>
            </div>
          </div>

          {/* Floating badges on top */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-white dark:bg-[#071B3A] shadow-xl rounded-2xl p-3.5 border border-[#D4AF37]/30 flex items-center gap-2.5 z-20"
          >
            <div className="p-2 bg-amber-50 dark:bg-amber-950/20 rounded-xl text-amber-500">
              <LucideIcon name="Trophy" size={18} />
            </div>
            <div className="text-left">
              <span className="text-[9px] uppercase font-bold text-gray-400">Mission</span>
              <h5 className="text-xs font-extrabold text-[#071B3A] dark:text-white leading-tight">Build Confidence</h5>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-[#071B3A] dark:bg-white text-white dark:text-[#071B3A] shadow-xl rounded-2xl p-3.5 border border-white/10 dark:border-black/5 flex items-center gap-2.5 z-20"
          >
            <div className="p-2 bg-blue-500/10 dark:bg-blue-50 text-blue-400 dark:text-blue-600 rounded-xl">
              <LucideIcon name="GraduationCap" size={18} />
            </div>
            <div className="text-left">
              <span className="text-[9px] uppercase font-bold text-blue-300 dark:text-blue-500 tracking-wider">Education</span>
              <h5 className="text-xs font-extrabold leading-tight">Practical Learning</h5>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
