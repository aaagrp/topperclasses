import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { Course, SubjectItem, BatchTiming, ExtraActivityItem, ChooseUsItem, GalleryItem, Notice, SiteSettings } from '../types';

/* ==========================================================================
   1. ABOUT PAGE COMPONENT
   ========================================================================== */
interface AboutPageProps {
  settings: SiteSettings;
  onOpenAdmission: () => void;
}

export function AboutPage({ settings, onOpenAdmission }: AboutPageProps) {
  const coreValues = [
    {
      title: 'Academic Integrity',
      desc: 'Developing an honest, query-led approach to learning instead of memorization.',
      icon: 'BookOpen',
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      title: 'Individual Monitoring',
      desc: 'Small batch size ensures teachers track the strong and weak concepts of every child.',
      icon: 'Users',
      color: 'text-blue-500 bg-blue-500/10'
    },
    {
      title: 'Personality & Speech',
      desc: 'Fostering stage-confidence, creative leadership, and etiquette classes weekly.',
      icon: 'Smile',
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      title: 'Continuous Evaluation',
      desc: 'Weekly assessments and standard feedback loops with parents on progress.',
      icon: 'ClipboardCheck',
      color: 'text-purple-500 bg-purple-500/10'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6 space-y-16"
    >
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="pill">About Our Institution</span>
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#071B3A] dark:text-white tracking-tight leading-tight">
          Where Young Minds <span className="text-[#D4AF37]">Excel & Lead</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-gray-300">
          Topper's Classes is Rustampur's newly established premier institute. Founded with a vision to revolutionize primary and secondary education in Gorakhpur.
        </p>
        <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      {/* Meet the Director Section (Uday Pratap Singh) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-[#071B3A] to-[#041024] p-8 md:p-12 rounded-3xl border border-[#D4AF37]/30 shadow-xl relative overflow-hidden">
        {/* Subtle decorative vector backdrop */}
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -z-0"></div>

        {/* Director Photo Frame */}
        <div className="lg:col-span-5 relative z-10 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Uday Pratap Singh"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 text-center">
              <span className="text-white font-display font-black text-lg">Uday Pratap Singh</span>
              <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">Director & Founder</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <LucideIcon name="Award" size={16} className="text-[#D4AF37]" />
            <span className="text-xs text-[#F4E8C1] font-mono">15+ Years Academic Mentorship</span>
          </div>
        </div>

        {/* Director Message */}
        <div className="lg:col-span-7 space-y-6 text-left relative z-10">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">Director's Desk Message</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              "We Don't Just Teach; We Uncover Potential."
            </h2>
          </div>
          <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              Dear Parents and Students,
            </p>
            <p>
              Welcome to <strong>Topper's Classes</strong>. As the founder, my absolute priority is to create an learning ecosystem where education is interactive, delightful, and conceptually absolute. In Rustampur, Gorakhpur, we noticed that students often suffer from high student-to-teacher ratios and rote memorization techniques.
            </p>
            <p>
              To change this, we designed Topper's Classes. Our classrooms are fully digital, our batches are strictly limited, and our curriculums integrate speaking confidence, creative logic, and personal moral values. Every student is a topper in their own right, and our task is to provide the discipline and guidance to let them shine.
            </p>
            <p>
              I invite you to visit our campus and enroll your child in our new session. Let's work together to shape a shining, successful future.
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenAdmission}
              className="btn-gold flex items-center gap-2 px-6 py-3 text-sm font-extrabold cursor-pointer w-full sm:w-auto justify-center"
            >
              <LucideIcon name="FileText" size={16} />
              <span>Register for Admission</span>
            </button>
            <a
              href={`tel:${settings.contact.callNumbers[0]}`}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] rounded-xl text-sm font-bold transition-all w-full sm:w-auto"
            >
              <LucideIcon name="Phone" size={16} />
              <span>Talk with Director</span>
            </a>
          </div>
        </div>
      </div>

      {/* Core Values / Growth Pillars Grid */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">Academic Integrity</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[#071B3A] dark:text-white">Our Four Foundational Pillars</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 shadow-md p-6 rounded-2xl text-left hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${value.color}`}>
                <LucideIcon name={value.icon} size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#071B3A] dark:text-white mb-2">{value.title}</h3>
              <p className="font-sans text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Infrastructure Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 dark:bg-white/[0.02] p-8 rounded-3xl border border-black/5 dark:border-white/5">
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 border border-blue-100 dark:border-blue-900/40">
            <LucideIcon name="Tv" size={24} />
          </div>
          <h4 className="font-display font-bold text-base text-[#071B3A] dark:text-white">AV Smart Classrooms</h4>
          <p className="font-sans text-xs text-slate-500 dark:text-gray-400 mt-2 leading-relaxed">
            Equipped with modern visual projectors to turn dry formulas into interactive 3D concepts.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-100 dark:border-emerald-900/40">
            <LucideIcon name="ShieldCheck" size={24} />
          </div>
          <h4 className="font-display font-bold text-base text-[#071B3A] dark:text-white">CCTV & Child Safety</h4>
          <p className="font-sans text-xs text-slate-500 dark:text-gray-400 mt-2 leading-relaxed">
            Continuous 24/7 camera surveillance across the entire premises to ensure strict peace of mind.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 border border-amber-100 dark:border-amber-900/40">
            <LucideIcon name="Monitor" size={24} />
          </div>
          <h4 className="font-display font-bold text-base text-[#071B3A] dark:text-white">Modern Computer Lab</h4>
          <p className="font-sans text-xs text-slate-500 dark:text-gray-400 mt-2 leading-relaxed">
            Hands-on exposure to computer basics, keyboard typing drills, and primary coding logic.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   2. WHY CHOOSE US ("Hmari Tarif") PAGE COMPONENT
   ========================================================================== */
interface WhyUsPageProps {
  items: ChooseUsItem[];
  onOpenAdmission: () => void;
}

export function WhyUsPage({ items, onOpenAdmission }: WhyUsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6 space-y-16"
    >
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="pill">Why Topper's Classes</span>
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#071B3A] dark:text-white tracking-tight leading-tight">
          <span className="text-[#D4AF37]">Unique Highlights</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-gray-300">
          Discover why we are Gorakhpur's fastest growing premium tuition community. We don't just teach chapters—we mold confidence, build discipline, and inspire success.
        </p>
        <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      {/* 16 Bento-style Grid of Cards Fully Displayed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-white dark:bg-[#071B3A] p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left overflow-hidden"
          >
            {/* Soft decorative hover accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl group-hover:bg-[#D4AF37]/10 transition-colors"></div>

            {/* Icon box */}
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#071B3A] transition-all duration-300 mb-5 border border-[#D4AF37]/20 shadow-sm">
              <LucideIcon name={item.iconName} size={22} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-lg text-[#071B3A] dark:text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-200">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed flex-grow">
              {item.description}
            </p>

            {/* Subtle index tag */}
            <div className="mt-4 pt-4 border-t border-black/[0.03] dark:border-white/5 flex justify-between items-center text-[10px] text-slate-400 dark:text-gray-500 font-mono">
              <span>HIGHLIGHT 0{idx + 1}</span>
              <LucideIcon name="Check" size={12} className="text-[#D4AF37]" />
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Panel */}
      <div className="bg-[#071B3A] border border-[#D4AF37]/30 text-white rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-2xl">
        <div className="absolute top-4 right-8 font-display text-9xl text-[#D4AF37]/10 select-none">“</div>
        <div className="max-w-2xl space-y-6 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">Parent Testimonial</span>
          <p className="font-display font-medium text-lg md:text-xl text-[#F4E8C1] italic leading-relaxed">
            "Topper's Classes changed my son's approach to Science. He used to memorize answers, but now he understands concepts through visual slides. The weekly Sunday test tracks his real progress. Mr. Uday Pratap Singh personally supervises everything."
          </p>
          <div>
            <h4 className="font-display font-bold text-base text-white">Aditya Narayan Mishra</h4>
            <p className="text-xs text-gray-400 font-sans">Father of Shreyas Mishra (Class 9 Board Preparation)</p>
          </div>
        </div>
      </div>

      {/* Call to Action Callout */}
      <div className="bg-slate-50 dark:bg-white/[0.02] rounded-3xl p-8 border border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        <div className="space-y-1 max-w-xl">
          <h3 className="font-display font-bold text-xl text-[#071B3A] dark:text-white">Give Your Child the Topper Advantage</h3>
          <p className="font-sans text-xs md:text-sm text-slate-500 dark:text-gray-400">
            Our registration slots for morning and evening batches are filling up fast. Book a free demo class today!
          </p>
        </div>
        <button
          onClick={onOpenAdmission}
          className="btn-gold flex items-center gap-2 px-6 py-3 cursor-pointer text-sm font-extrabold shrink-0"
        >
          <LucideIcon name="FileText" size={16} />
          <span>Book Free Demo Class</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   3. COURSES PAGE COMPONENT
   ========================================================================== */
interface CoursesPageProps {
  courses: Course[];
  subjects: SubjectItem[];
  onOpenAdmission: () => void;
}

export function CoursesPage({ courses, subjects, onOpenAdmission }: CoursesPageProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const getSubjectDetail = (subName: string): SubjectItem => {
    const found = subjects.find(
      s => s.name.toLowerCase().includes(subName.toLowerCase()) || subName.toLowerCase().includes(s.name.toLowerCase())
    );
    return found || { name: subName, description: 'Conceptual academic coaching aligned with standard board directives.', iconName: 'BookOpen' };
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6 space-y-16"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="pill">Comprehensive Curriculums</span>
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#071B3A] dark:text-white tracking-tight leading-tight">
          Academic Courses & <span className="text-[#D4AF37]">Extra Activities</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-gray-300">
          We offer complete foundation syllabuses for Class 1 to 10. Click on any class tab below to check out its curriculum details, subject focus, and learning outcomes.
        </p>
        <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      {/* Course Switcher Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Grade Toggles */}
        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 gap-2.5">
          {courses.map((course, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={course.classNum}
                onClick={() => setSelectedIdx(idx)}
                className={`text-left px-4 py-3.5 rounded-xl font-display font-bold text-xs md:text-sm tracking-wide transition-all border cursor-pointer flex items-center justify-between gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] border-[#D4AF37] shadow-lg'
                    : 'bg-white dark:bg-white/[0.04] hover:bg-black/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border-black/10 dark:border-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#071B3A]' : 'bg-[#D4AF37]'}`}></span>
                  <span>{course.classNum}</span>
                </span>
                <LucideIcon name="ChevronRight" size={14} className={`hidden lg:block transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: High Fidelity Details of the Selected Course */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white dark:bg-[#071B3A] p-6 md:p-8 rounded-2xl border border-black/5 dark:border-white/10 shadow-lg text-left space-y-8"
            >
              {/* Course Title and Description */}
              <div className="pb-6 border-b border-black/5 dark:border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Academic Stream Board</span>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[#071B3A] dark:text-white">
                  {courses[selectedIdx].classNum} Standard Prep
                </h2>
                <p className="font-sans text-sm md:text-base text-slate-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  {courses[selectedIdx].description}
                </p>
              </div>

              {/* Subject details list */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-base text-[#071B3A] dark:text-white flex items-center gap-2">
                  <LucideIcon name="BookMarked" size={18} className="text-[#D4AF37]" />
                  <span>Syllabus Subject Focus</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {courses[selectedIdx].subjects.map((subName) => {
                    const details = getSubjectDetail(subName);
                    return (
                      <div
                        key={subName}
                        className="p-4 bg-slate-50 dark:bg-white/[0.02] rounded-xl border border-black/5 dark:border-white/5 hover:border-[#D4AF37]/40 dark:hover:border-[#D4AF37]/30 transition-all flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
                          <LucideIcon name={details.iconName} size={18} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-[#071B3A] dark:text-white leading-tight">{subName}</h4>
                          <p className="font-sans text-[11px] text-slate-500 dark:text-gray-400 mt-1 leading-relaxed">{details.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Learning Outcome features */}
              <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-5 rounded-xl space-y-3">
                <h4 className="font-display font-black text-xs uppercase tracking-wider text-[#D4AF37]">Weekly Rewards & Mentorship</h4>
                <p className="font-sans text-xs text-slate-600 dark:text-gray-300">
                  Every month, students scoring the highest ranks in weekly mock examinations are awarded physical **Gold Medals** and official **Topper Certificates** during our school ceremony to boost healthy, continuous competition.
                </p>
              </div>

              {/* Register CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={onOpenAdmission}
                  className="btn-gold flex items-center justify-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-wider cursor-pointer w-full sm:w-auto"
                >
                  <LucideIcon name="FileText" size={14} />
                  <span>Join {courses[selectedIdx].classNum} Batch</span>
                </button>
                <span className="text-xs text-gray-400 font-mono">Admission opens for session 2026-27</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   4. TIMINGS PAGE COMPONENT
   ========================================================================== */
interface TimingsPageProps {
  timings: BatchTiming[];
  timingNote: string;
  onOpenAdmission: () => void;
}

export function TimingsPage({ timings, timingNote, onOpenAdmission }: TimingsPageProps) {
  // Hardcoded real timings data details
  const timingCategories = [
    {
      title: 'Daily Evening Core Batches',
      desc: 'Structured class-wise lessons from Monday to Saturday, focused on strict concept drill and homework tracking.',
      icon: 'Clock',
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      title: 'Sunday Performance Tests',
      desc: 'Held every Sunday from 9:00 AM to 12:00 PM to evaluate retention and build confidence under exam conditions.',
      icon: 'ClipboardCheck',
      color: 'text-blue-500 bg-blue-500/10'
    },
    {
      title: '1-on-1 Doubt Solving Hours',
      desc: 'Free, dedicated slot from 2:00 PM to 3:00 PM daily for students requiring individual guidance on challenging topics.',
      icon: 'HeartHandshake',
      color: 'text-emerald-500 bg-emerald-500/10'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6 space-y-16"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="pill">Real Batch Timetable</span>
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#071B3A] dark:text-white tracking-tight leading-tight">
          Batch Timings & <span className="text-[#D4AF37]">Schedules</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-gray-300">
          We maintain structured academic hours for all batches to cultivate punctuality and continuous discipline.
        </p>
        <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      {/* Grid: 3 major Timing Schedules categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {timingCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 p-6 rounded-2xl text-left shadow-sm flex flex-col hover:shadow-md transition-all"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cat.color}`}>
              <LucideIcon name={cat.icon} size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-[#071B3A] dark:text-white mb-2">{cat.title}</h3>
            <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-gray-400 leading-relaxed flex-grow">{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* Timetable Schedule Table Card */}
      <div className="bg-white dark:bg-[#071B3A] border border-black/5 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl text-left space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-[#071B3A] dark:text-white">Active Batch Timetable</h3>
            <p className="text-xs text-slate-400 font-sans">Session 2026 - 2027</p>
          </div>
          <div className="flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider">
            <LucideIcon name="Calendar" size={14} />
            <span>Regular Monday - Saturday</span>
          </div>
        </div>

        {/* Timetable table element */}
        <div className="overflow-hidden border border-black/5 dark:border-white/5 rounded-xl">
          <table className="w-full text-left border-collapse font-sans text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/60 text-[#071B3A] dark:text-white font-bold font-display border-b border-black/5 dark:border-white/5">
                <th className="p-4">Standard Grade</th>
                <th className="p-4">Batch Timing Slot</th>
                <th className="p-4">Duration / Frequency</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5 text-slate-700 dark:text-gray-300">
              {timings.map((time, idx) => (
                <tr key={idx} className="hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors">
                  <td className="p-4 font-bold font-display text-[#071B3A] dark:text-white">{time.className}</td>
                  <td className="p-4 text-[#D4AF37] font-bold font-mono">{time.timing}</td>
                  <td className="p-4">{time.duration}</td>
                  <td className="p-4 text-right">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Active</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Timing disclaimer callout */}
        <div className="p-4.5 bg-amber-500/5 border border-[#D4AF37]/20 rounded-xl flex items-start gap-3 text-left">
          <LucideIcon name="AlertCircle" size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="block text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">Batch Note</span>
            <p className="font-sans text-xs text-slate-600 dark:text-gray-300 leading-normal">
              {timingNote} Special winter shift timings are updated accordingly to ensure early return before late evenings.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <button
            onClick={onOpenAdmission}
            className="btn-gold flex items-center justify-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-wider cursor-pointer w-full sm:w-auto"
          >
            <LucideIcon name="FileText" size={14} />
            <span>Enroll in Class Batch</span>
          </button>
          <span className="text-xs text-gray-400 font-sans">Contact our office for custom timing requests.</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   5. ACTIVITIES PAGE COMPONENT
   ========================================================================== */
interface ActivitiesPageProps {
  activities: ExtraActivityItem[];
}

export function ActivitiesPage({ activities }: ActivitiesPageProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Academic' | 'Arts' | 'Development'>('All');

  const categories = ['All', 'Academic', 'Arts', 'Development'];

  // High quality realistic image mapping based on activity name to fulfill "AI images sab do acche se" requirement
  const getImageForActivity = (name: string): string => {
    const images: Record<string, string> = {
      'Speech Competition': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
      'Olympiad Preparation': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      'Quiz Competition': 'https://images.unsplash.com/photo-1518133680790-3985ece5f94e?auto=format&fit=crop&w=800&q=80',
      'Science Exhibition': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      'Drawing & Painting': 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
      'Music Classes': 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      'Dance Classes': 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
      'Talent Hunt Events': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      'Medal & Prize Ceremonies': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      'Educational Tours': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      'Guest Lectures': 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
      'Career Guidance': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
    };
    return images[name] || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80';
  };

  const filteredActivities = activeCategory === 'All'
    ? activities
    : activities.filter(a => a.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6 space-y-16"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="pill">Co-Curricular Portfolio</span>
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#071B3A] dark:text-white tracking-tight leading-tight">
          Extra-Curricular <span className="text-[#D4AF37]">Activities</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-gray-300">
          Our co-curricular training runs parallel to classes to nurture moral values, stage presence, physical fitness, and logical reasoning.
        </p>
        <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      {/* Category Tabs Toggles */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            className={`px-5 py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-wider border cursor-pointer transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] border-[#D4AF37] shadow-md'
                : 'bg-white dark:bg-white/[0.04] hover:bg-black/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border-black/10 dark:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredActivities.map((act) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={act.name}
              className="group bg-white dark:bg-[#071B3A] border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all text-left flex flex-col"
            >
              {/* Image Frame with realistic AI mockup indicator */}
              <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={getImageForActivity(act.name)}
                  alt={act.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* AI Mockup Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider shadow-md">
                  AI Generated Concept Visual
                </div>

                {/* Category tag bottom right */}
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md text-white border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest font-mono">
                  {act.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/20 shrink-0">
                      <LucideIcon name={act.iconName} size={15} />
                    </div>
                    <h3 className="font-display font-bold text-base md:text-lg text-[#071B3A] dark:text-white leading-tight">
                      {act.name}
                    </h3>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.03] dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1">
                    <LucideIcon name="Clock" size={12} className="text-[#D4AF37]" />
                    <span>Weekly Workshops</span>
                  </span>
                  <span>Award Eligible</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   6. NOTICES PAGE COMPONENT
   ========================================================================== */
interface NoticesPageProps {
  notices: Notice[];
}

export function NoticesPage({ notices }: NoticesPageProps) {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<'all' | 'important' | 'academic' | 'activity' | 'announcement'>('all');

  const tags = ['all', 'important', 'academic', 'activity', 'announcement'];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.content.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === 'all' || notice.type === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6 space-y-12"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="pill">Campus Announcements</span>
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#071B3A] dark:text-white tracking-tight leading-tight">
          Active Notice <span className="text-[#D4AF37]">Board</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-gray-300">
          Stay updated with official schedules, exam announcements, circulars, and activity timetables.
        </p>
        <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-[#071B3A]/80 border border-black/5 dark:border-white/10 p-4.5 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4 text-left">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search announcements..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-xs md:text-sm text-[#071B3A] dark:text-white focus:outline-none focus:border-[#D4AF37] transition-all font-sans"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <LucideIcon name="Compass" size={16} /> {/* Compass as generic search helper icon */}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag as any)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider border cursor-pointer transition-all ${
                selectedTag === tag
                  ? 'bg-[#D4AF37] text-[#071B3A] border-[#D4AF37] shadow-sm'
                  : 'bg-transparent border-black/10 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:border-black/25 dark:hover:border-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Notices Feed */}
      {filteredNotices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {filteredNotices.map((notice) => {
            const isImportant = notice.type === 'important';
            return (
              <div
                key={notice.id}
                className={`relative p-6 bg-white dark:bg-[#071B3A] border rounded-2xl shadow-sm flex flex-col justify-between transition-all hover:shadow-md ${
                  isImportant
                    ? 'border-red-500/30 dark:border-red-500/40 bg-gradient-to-br from-red-500/[0.02] to-transparent'
                    : 'border-black/5 dark:border-white/10'
                }`}
              >
                {/* Notice Top Metadata */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest border ${
                      isImportant
                        ? 'bg-red-500/10 text-red-500 border-red-500/20'
                        : notice.type === 'academic'
                        ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                        : notice.type === 'activity'
                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                        : 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                    }`}>
                      {notice.type}
                    </span>

                    {notice.isNew && (
                      <span className="bg-amber-500 text-[#071B3A] text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-lg text-[#071B3A] dark:text-white leading-tight">
                    {notice.title}
                  </h3>

                  {/* Content */}
                  <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                    {notice.content}
                  </p>
                </div>

                {/* Footer metadata */}
                <div className="mt-6 pt-4 border-t border-black/[0.03] dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <LucideIcon name="Calendar" size={13} className="text-[#D4AF37]" />
                    <span>{notice.date}</span>
                  </span>
                  <span>Official Circular</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-20 bg-slate-50 dark:bg-white/[0.02] border border-dashed border-black/10 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-gray-400 mb-4">
            <LucideIcon name="AlertCircle" size={24} />
          </div>
          <h3 className="font-display font-bold text-lg text-[#071B3A] dark:text-white">No Announcements Found</h3>
          <p className="font-sans text-xs text-gray-400 mt-1 max-w-sm">
            We couldn't find any announcements matching "{search}". Try searching for other keywords like "admission" or "test".
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ==========================================================================
   7. GALLERY PAGE COMPONENT
   ========================================================================== */
interface GalleryPageProps {
  galleryItems: GalleryItem[];
}

export function GalleryPage({ galleryItems }: GalleryPageProps) {
  const [filter, setFilter] = useState<'All' | 'Overall Photos' | 'Achievements' | 'Director' | 'Classrooms'>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Overall Photos', 'Achievements', 'Director', 'Classrooms'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6 space-y-12"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="pill">Visual Showcase</span>
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#071B3A] dark:text-white tracking-tight leading-tight">
          Photo <span className="text-[#D4AF37]">Gallery</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-gray-300">
          Take a look at our interactive classroom, student celebrations, and historical administrative events led by the director.
        </p>
        <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      {/* Categories Switches */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-4 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider border cursor-pointer transition-all ${
              filter === cat
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] border-[#D4AF37] shadow-sm'
                : 'bg-white dark:bg-white/[0.04] hover:bg-black/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border-black/10 dark:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-white dark:bg-[#071B3A] border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                {/* Date tag top right */}
                {item.date && (
                  <div className="absolute top-3.5 right-3.5 bg-black/50 backdrop-blur-md text-white border border-white/10 px-2.5 py-1 rounded-md text-[9px] font-mono">
                    {item.date}
                  </div>
                )}

                {/* Category tag bottom left */}
                <div className="absolute bottom-3.5 left-3.5 bg-[#D4AF37] text-[#071B3A] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Description body */}
              <div className="p-5">
                <h3 className="font-display font-bold text-sm md:text-base text-[#071B3A] dark:text-white line-clamp-1 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 bg-slate-50 dark:bg-white/[0.02] border border-dashed border-black/10 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-gray-400 mb-4">
            <LucideIcon name="Palette" size={24} />
          </div>
          <h3 className="font-display font-bold text-lg text-[#071B3A] dark:text-white">No Photos Added</h3>
          <p className="font-sans text-xs text-gray-400 mt-1 max-w-sm">
            There are currently no photos in the "{filter}" category. Feel free to browse overall photos.
          </p>
        </div>
      )}

      {/* Dynamic Lightbox Dialog Popup */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-slate-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#071B3A] transition-all cursor-pointer"
              >
                <LucideIcon name="X" size={18} />
              </button>

              {/* Photo Display */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-h-[70vh] max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & metadata bar */}
              <div className="p-5 bg-[#071B3A] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] font-mono">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-display font-bold text-base md:text-lg text-white leading-snug">
                    {selectedImage.title}
                  </h3>
                </div>
                {selectedImage.date && (
                  <span className="text-xs text-gray-400 font-mono shrink-0">
                    Captured: {selectedImage.date}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
