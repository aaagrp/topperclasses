import React from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';
import { AchievementItem } from '../types';

interface StatsProps {
  achievements: AchievementItem[];
}

export default function Stats({ achievements }: StatsProps) {
  return (
    <section className="py-16 bg-[#071B3A] text-white relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full glow-orb -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full glow-orb -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="pill mb-3">
            Milestones & Goals
          </span>
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mt-1.5">
            A Brand New Academic Journey Begins
          </h3>
          <p className="font-sans text-xs text-gray-300 mt-2 max-w-md mx-auto">
            Establishing a strong foundation in Gorakhpur with transparent metrics and absolute dedication.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#122B54] to-[#071B3A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4 shadow-inner">
                <LucideIcon name={item.iconName} size={22} />
              </div>

              {/* Label */}
              <span className="text-xs text-gray-400 font-sans tracking-wide uppercase font-semibold">
                {item.label}
              </span>

              {/* Growing daily indicator */}
              <div className="mt-2.5 space-y-1">
                <h4 className="font-display font-black text-lg text-white">
                  {item.value}
                </h4>
                <p className="text-[11px] text-[#D4AF37] font-semibold tracking-wide">
                  {item.textSuffix}
                </p>
              </div>

              {/* Decorative mini status dot */}
              <div className="mt-4 flex items-center justify-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-emerald-400">Live</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
