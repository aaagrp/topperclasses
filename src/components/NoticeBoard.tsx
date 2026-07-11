import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import LucideIcon from './LucideIcon';
import { Notice } from '../types';

interface NoticeBoardProps {
  notices: Notice[];
}

export default function NoticeBoard({ notices }: NoticeBoardProps) {
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>(null);

  const getTypeBadgeStyles = (type: string) => {
    switch (type) {
      case 'important':
        return 'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400 border border-red-200/30';
      case 'academic':
        return 'bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400 border border-blue-200/30';
      case 'activity':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400 border border-amber-200/30';
      default:
        return 'bg-purple-50 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400 border border-purple-200/30';
    }
  };

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case 'important': return 'AlertCircle';
      case 'academic': return 'BookOpen';
      case 'activity': return 'Palette';
      default: return 'Megaphone';
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedNoticeId(expandedNoticeId === id ? null : id);
  };

  return (
    <section id="notices" className="py-20 md:py-28 bg-[#071B3A] relative overflow-hidden border-t border-white/10">
      {/* Background Glow Orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full glow-orb -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Announcement Teaser */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="pill">
              Stay Updated
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white tracking-tight leading-none">
              Notice Board & Announcements
            </h2>
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              Find the latest timetables, exam dates, syllabus programs, and extra-curricular declarations here. 
            </p>
            <p className="font-sans text-xs text-[#D4AF37] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
              <span>Updated in real time by administrative desk</span>
            </p>

            {/* Quick stats panel */}
            <div className="glass-panel p-5 border-white/15 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <Logo showText={false} size="sm" />
                </div>
                <h4 className="font-display font-bold text-sm text-white">Active Feed Info</h4>
              </div>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                Admissions for Session 2026-27 are currently underway. Submit the online application today to schedule an evaluation!
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Accordion Notices */}
          <div className="lg:col-span-8 space-y-4">
            {notices.length === 0 ? (
              <div className="p-12 text-center rounded-2xl border-2 border-dashed border-white/10">
                <LucideIcon name="HelpCircle" size={40} className="text-gray-400 mx-auto mb-3" />
                <h4 className="font-display font-bold text-base text-gray-400">No Active Notices</h4>
                <p className="text-xs text-gray-400 mt-1">Check back later or log in to post new announcements.</p>
              </div>
            ) : (
              notices.map((notice, idx) => {
                const isExpanded = expandedNoticeId === notice.id;
                return (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`rounded-2xl border transition-all ${
                      isExpanded
                        ? 'glass-panel border-[#D4AF37]/40 shadow-md'
                        : 'bg-white/5 border-white/10 hover:border-[#D4AF37]/20 shadow-sm backdrop-blur-md'
                    }`}
                  >
                    <button
                      onClick={() => toggleExpand(notice.id)}
                      className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        {/* Notice Type Icon */}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${getTypeBadgeStyles(notice.type)}`}>
                          <LucideIcon name={getNoticeIcon(notice.type)} size={18} />
                        </div>

                        {/* Title & Metadata */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                              {notice.date}
                            </span>
                            {notice.isNew && (
                              <span className="bg-emerald-500 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full animate-pulse">
                                New
                              </span>
                            )}
                          </div>
                          <h4 className="font-display font-bold text-base md:text-lg text-white leading-tight">
                            {notice.title}
                          </h4>
                        </div>
                      </div>

                      {/* Expand Chevron */}
                      <div className={`w-8 h-8 rounded-lg bg-white/5 text-white/60 flex items-center justify-center shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-[#D4AF37]' : ''}`}>
                        <LucideIcon name="ChevronRight" size={16} />
                      </div>
                    </button>

                    {/* Expandable Content Area */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-left text-sm text-gray-300 leading-relaxed border-t border-white/10 ml-14">
                            <p className="font-sans leading-relaxed">
                              {notice.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
