import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { ExtraActivityItem } from '../types';

interface ActivitiesProps {
  activities: ExtraActivityItem[];
}

export default function Activities({ activities }: ActivitiesProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Arts' | 'Academic' | 'Development'>('All');

  const tabs: ('All' | 'Arts' | 'Academic' | 'Development')[] = ['All', 'Arts', 'Academic', 'Development'];

  const filteredActivities = activeTab === 'All'
    ? activities
    : activities.filter(act => act.category === activeTab);

  return (
    <section id="activities" className="py-20 md:py-28 bg-[#071B3A] relative overflow-hidden border-t border-white/10">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-500/5 rounded-full glow-orb -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="pill">
            Beyond Academics
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Extra-Curricular Activities
          </h2>
          <p className="font-sans text-base text-gray-300 max-w-2xl mx-auto mt-2">
            Nurturing confidence, creativity, and leadership. We offer structured workshops, competitions, and certificate courses.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap mb-10 max-w-lg mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-display font-bold text-xs tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}
            >
              {tab === 'All' ? 'View All' : tab}
            </button>
          ))}
        </div>

        {/* Staggered Grid of filtered activities */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((act) => (
              <motion.div
                layout
                key={act.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-6 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                      act.category === 'Arts' ? 'bg-amber-500/10 text-amber-300' :
                      act.category === 'Academic' ? 'bg-blue-500/10 text-blue-300' :
                      'bg-emerald-500/10 text-emerald-300'
                    }`}>
                      {act.category}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#D4AF37]">
                      <LucideIcon name={act.iconName} size={16} />
                    </div>
                  </div>

                  {/* Activity Name */}
                  <h4 className="font-display font-extrabold text-[16px] text-white tracking-tight leading-snug">
                    {act.name}
                  </h4>

                  {/* Activity description */}
                  <p className="font-sans text-xs text-gray-300 mt-2 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                {/* Micro certificate badge or callout */}
                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center gap-2">
                  <LucideIcon name="FileBadge" size={13} className="text-[#D4AF37]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Certificates Awarded
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
