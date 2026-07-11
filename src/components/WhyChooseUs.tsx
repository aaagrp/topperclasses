import React from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';
import { ChooseUsItem } from '../types';

interface WhyChooseUsProps {
  items: ChooseUsItem[];
}

export default function WhyChooseUs({ items }: WhyChooseUsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#071B3A] relative overflow-hidden border-t border-white/10">
      {/* Decorative Blur Orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full glow-orb -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="pill">
            Our Key Pillars
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Why Choose Topper's Classes?
          </h2>
          <p className="font-sans text-base text-gray-300 max-w-2xl mx-auto mt-2">
            We provide comprehensive facilities and custom academic programs specifically curated to help children succeed inside and outside the classroom.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4"></div>
        </div>

        {/* 16 Bento-style Grid of Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card p-6 flex flex-col items-start text-left group"
            >
              {/* Animated Icon Box */}
              <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#071B3A] transition-all duration-300 mb-4 shadow-sm border border-white/10">
                <LucideIcon name={item.iconName} size={20} className="transform group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Card Titles */}
              <h4 className="font-display font-bold text-[17px] text-white mb-2 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-200">
                {item.title}
              </h4>

              {/* Card Descriptions */}
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
