import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { Course, SubjectItem, BatchTiming } from '../types';

interface AcademicsProps {
  courses: Course[];
  subjects: SubjectItem[];
  timings: BatchTiming[];
  timingNote: string;
}

export default function Academics({ courses, subjects, timings, timingNote }: AcademicsProps) {
  const [selectedClassIdx, setSelectedClassIdx] = useState(0);

  const activeCourse = courses[selectedClassIdx];

  // Helper to match subject name to its detailed structure (description & icon)
  const getSubjectDetail = (subName: string): SubjectItem => {
    // Basic match
    const found = subjects.find(
      s => s.name.toLowerCase().includes(subName.toLowerCase()) || subName.toLowerCase().includes(s.name.toLowerCase())
    );
    return found || { name: subName, description: 'Structured academic curriculum aligned with standard boards guidelines.', iconName: 'BookOpen' };
  };

  // Helper to get timing for the currently active class index
  const getActiveTiming = (classNum: string): BatchTiming => {
    // Class names: 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'
    // Timings are grouped as: 'Class 1 - 2', 'Class 3 - 4', 'Class 5 - 6', 'Class 7 - 8', 'Class 9 - 10'
    const cleanNum = classNum.replace(/\D/g, ''); // Extract '1', '2' etc.
    const num = parseInt(cleanNum, 10);

    let timingGroup = 'Class 1 - 2';
    if (num >= 3 && num <= 4) timingGroup = 'Class 3 - 4';
    else if (num >= 5 && num <= 6) timingGroup = 'Class 5 - 6';
    else if (num >= 7 && num <= 8) timingGroup = 'Class 7 - 8';
    else if (num >= 9 && num <= 10) timingGroup = 'Class 9 - 10';

    const found = timings.find(t => t.className.includes(timingGroup.substring(0, 7)));
    return found || { className: classNum, timing: 'Consult for timings', duration: 'Monday to Saturday' };
  };

  const currentTiming = getActiveTiming(activeCourse.classNum);

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#071B3A] relative overflow-hidden border-t border-white/10">
      {/* Decorative background rays */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full glow-orb -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="pill">
            Academics & Curriculums
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Our Classes, Subjects & Timings
          </h2>
          <p className="font-sans text-base text-gray-300 max-w-2xl mx-auto mt-2">
            Click on any class grade below to explore its tailored batch timings, syllabus focus, and curriculum subjects.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Dynamic Class Selector (Desktop layout with Side Panel / Mobile layout with Horizontal Toggles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Grade Switcher Buttons */}
          <div className="lg:col-span-3 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none snap-x">
            {courses.map((course, idx) => {
              const isActive = selectedClassIdx === idx;
              return (
                <button
                  key={course.classNum}
                  onClick={() => setSelectedClassIdx(idx)}
                  className={`snap-center shrink-0 lg:w-full text-left px-5 py-4 rounded-xl font-display font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-between gap-3 border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] border-[#D4AF37] shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#071B3A]' : 'bg-[#D4AF37]'}`}></span>
                    <span>{course.classNum}</span>
                  </span>
                  <LucideIcon name="ChevronRight" size={14} className={`hidden lg:block transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Academic Board details */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClassIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-6 md:p-8 text-left space-y-8"
              >
                {/* Board Header: Timing Slot & Class Title */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Academic Focus</span>
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mt-1">
                      {activeCourse.classNum} Curriculum
                    </h3>
                    <p className="font-sans text-sm text-gray-300 mt-2 max-w-xl">
                      {activeCourse.description}
                    </p>
                  </div>

                  {/* Timing Badge */}
                  <div id="timings" className="glass-panel p-4 flex items-center gap-3.5 shadow-md shrink-0 border border-white/15">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                      <LucideIcon name="Clock" size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">Class Timings</span>
                      <span className="block font-display font-extrabold text-sm text-[#D4AF37]">{currentTiming.timing}</span>
                      <span className="block text-[10px] text-gray-400">{currentTiming.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Grid of Core Subjects */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <LucideIcon name="BookMarked" size={18} className="text-[#D4AF37]" />
                    <span>Included Core Subjects</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCourse.subjects.map((subName) => {
                      const details = getSubjectDetail(subName);
                      return (
                        <div
                          key={subName}
                          className="glass-card p-4 flex items-start gap-3.5"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-white/5">
                            <LucideIcon name={details.iconName} size={18} />
                          </div>
                          <div>
                            <h5 className="font-display font-bold text-sm text-white">
                              {subName}
                            </h5>
                            <p className="font-sans text-[11px] text-gray-300 mt-0.5 leading-relaxed">
                              {details.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* General Timing Disclaimer Callout */}
                <div className="flex items-center gap-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-3.5 rounded-xl text-xs text-[#F4E8C1] leading-relaxed">
                  <LucideIcon name="AlertCircle" size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="font-medium">
                    <strong>Please Note:</strong> {timingNote} For special request adjustments, contact the admission desk.
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
