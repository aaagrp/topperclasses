import React from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';
import { SiteSettings } from '../types';
import { directorPortraitBase64 } from '../assets/director_portrait_base64';

interface AboutProps {
  settings: SiteSettings;
}

export default function About({ settings }: AboutProps) {
  const pillars = [
    {
      title: 'Building Confidence',
      desc: 'Nurturing self-belief through interactive class discussions, regular presentations, and encouragement.',
      icon: 'Smile',
      color: 'from-amber-500 to-yellow-500',
      bg: 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400'
    },
    {
      title: 'Discipline & Focus',
      desc: 'Cultivating strict punctuality, homework habits, and moral values to guide student behavior.',
      icon: 'ShieldCheck',
      color: 'from-blue-500 to-indigo-500',
      bg: 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Nurturing Creativity',
      desc: 'Integrating music, drawing, science exhibitions, and art competitions into regular academic life.',
      icon: 'Palette',
      color: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
    },
    {
      title: 'Leadership Qualities',
      desc: 'Instilling leadership and public speech skills via specialized student development programs.',
      icon: 'Award',
      color: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#071B3A] relative overflow-hidden">
      {/* Subtle bottom blur */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#D4AF37]/5 glow-orb -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="pill">
            Who We Are
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Nurturing Young Minds For A Better Tomorrow
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Core Layout: Description & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: About Narrative & Message */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-left">
              <h3 className="font-display font-bold text-2xl text-[#D4AF37]">
                Newly Established Academic Hub in Gorakhpur
              </h3>
              <p className="font-sans text-base text-gray-300 leading-relaxed">
                <strong>Topper's Classes</strong> is a newly established premier educational institute situated in Rustampur, Gorakhpur. Our absolute mission is not simply to teach the academic curriculum, but to unlock the complete potential of every young mind.
              </p>
              <p className="font-sans text-base text-gray-300 leading-relaxed">
                We believe that true education goes beyond textbooks. We integrate quality core learning with essential practical experiments, personality development courses, and regular evaluations to build competitive excellence from class 1 up to class 10.
              </p>
            </div>

            {/* Quote block: Individual Attention */}
            <div className="relative border-l-4 border-[#D4AF37] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-r-2xl text-left">
              <span className="absolute top-2 right-4 font-display text-5xl text-[#D4AF37]/20 select-none">“</span>
              <p className="font-sans italic text-[#F4E8C1] font-semibold text-base">
                Every single child receives our undivided individual attention. We maintain a small batch size strictly for this reason.
              </p>
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mt-2">
                — Topper's Classes Commitment
              </span>
            </div>

            {/* Director Message */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-left">
              {/* Avatar picture / placeholder */}
              <div className="relative w-14 h-14 rounded-full shrink-0 overflow-hidden border-2 border-[#D4AF37] bg-[#071B3A] flex items-center justify-center">
                <img 
                  src={directorPortraitBase64} 
                  onError={(e) => {
                    // Fallback to real photo of Uday Pratap Singh
                    e.currentTarget.src = 'https://toppersclasses.in/wp-content/uploads/2026/06/expert-fac2.jpeg';
                  }}
                  alt={settings.directorName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37]">Director / Founder</span>
                <h4 className="font-display font-bold text-lg text-white leading-tight">
                  {settings.directorName}
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-normal">
                  "Our mission is to shape confidence, strong character, and academic brilliance in Gorakhpur."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Four Growth Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 text-left"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pillar.bg}`}>
                  <LucideIcon name={pillar.icon} size={24} />
                </div>
                <h4 className="font-display font-bold text-lg text-[#D4AF37] mb-2">
                  {pillar.title}
                </h4>
                <p className="font-sans text-sm text-gray-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
