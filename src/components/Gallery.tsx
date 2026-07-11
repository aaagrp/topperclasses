import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { GalleryItem } from '../types';

interface GalleryProps {
  items: GalleryItem[];
}

type GalleryCategory = 'Overall Photos' | 'Videos' | 'Director' | 'Achievements';

export default function Gallery({ items }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | null>(null);
  const [activeItemIdx, setActiveItemIdx] = useState<number | null>(null);

  // Cards metadata
  const categoryCards = [
    {
      id: 'overall',
      category: 'Overall Photos' as GalleryCategory,
      title: 'Overall Photos',
      description: 'Explore glimpses of our highly structured classrooms, active laboratories, and institute events.',
      icon: 'Camera',
      badge: 'Photos',
      glow: 'from-amber-500/10 to-transparent'
    },
    {
      id: 'videos',
      category: 'Videos' as GalleryCategory,
      title: 'Coaching Videos',
      description: 'Watch video lectures, conceptual tutorials, and smart-class presentations.',
      icon: 'Play',
      badge: 'Lectures',
      glow: 'from-red-500/10 to-transparent'
    },
    {
      id: 'director',
      category: 'Director' as GalleryCategory,
      title: "Director's Corner",
      description: "Direct messages, academic vision, and milestones from Director Uday Pratap Singh.",
      icon: 'UserCheck',
      badge: 'Message',
      glow: 'from-blue-500/10 to-transparent'
    },
    {
      id: 'achievements',
      category: 'Achievements' as GalleryCategory,
      title: 'Achievements',
      description: 'Shining medals, certificates of honor, and weekly test laurels awarded to our toppers.',
      icon: 'Trophy',
      badge: 'Honor Roll',
      glow: 'from-yellow-500/10 to-transparent'
    }
  ];

  // Filter items based on selected category
  const filteredItems = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : [];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIdx !== null) {
      setActiveItemIdx((activeItemIdx + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIdx !== null) {
      setActiveItemIdx((activeItemIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Helper to extract YouTube video ID or format URL for display
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
      }
    }
    return url;
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#071B3A] relative overflow-hidden border-t border-white/10">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/5 glow-orb -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 glow-orb -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!activeCategory ? (
            /* Main 4 Cards View */
            <motion.div
              key="main-cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12 md:space-y-16"
            >
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="pill">
                  Gallery & Media
                </span>
                <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                  Institute Media & Archives
                </h2>
                <p className="font-sans text-base text-gray-300 max-w-2xl mx-auto">
                  Explore high-fidelity visual summaries of our classroom discipline, academic coaching, award ceremonies, and leadership messages.
                </p>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
              </div>

              {/* 4 Premium Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {categoryCards.map((card, idx) => {
                  const count = items.filter((item) => item.category === card.category).length;
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setActiveCategory(card.category)}
                      className="group relative rounded-3xl overflow-hidden p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 flex flex-col justify-between aspect-[3/4] text-left"
                    >
                      {/* Glow Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-b ${card.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Top Badge & Icon */}
                      <div className="flex items-start justify-between relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#D4AF37]/10 text-white group-hover:text-[#D4AF37] flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                          <LucideIcon name={card.icon} size={22} />
                        </div>
                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#D4AF37] px-3 py-1 rounded-full bg-white/5 border border-white/5">
                          {card.badge}
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="space-y-3 relative z-10 mt-auto">
                        <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                          {card.title}
                        </h3>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed line-clamp-3">
                          {card.description}
                        </p>

                        <div className="pt-2.5 flex items-center justify-between border-t border-white/5 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                          <span>
                            {count > 0 ? `${count} Published` : 'Unreleased'}
                          </span>
                          <span className="flex items-center gap-1 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300">
                            View Gallery <LucideIcon name="ArrowRight" size={12} />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* Sub-Category View */
            <motion.div
              key="sub-gallery"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-8"
            >
              {/* Back breadcrumb bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 text-left">
                <button
                  onClick={() => setActiveCategory(null)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/10 hover:border-[#D4AF37]/30 transition-all cursor-pointer w-fit"
                >
                  <LucideIcon name="ChevronLeft" size={14} className="text-[#D4AF37]" />
                  <span>Back to Galleries</span>
                </button>
                <div className="space-y-1">
                  <h3 className="font-display font-black text-xl md:text-2xl text-white">
                    {activeCategory === 'Overall Photos' ? 'Overall Photo Archive' : activeCategory}
                  </h3>
                  <p className="text-xs text-gray-400">
                    Showing authentic administrative media updates for Session 2026-27
                  </p>
                </div>
              </div>

              {/* Grid content / Empty States */}
              {filteredItems.length === 0 ? (
                /* Premium Placed Vector Wireframe Placeholders */
                <div className="max-w-xl mx-auto text-center py-16 px-6 glass-card rounded-3xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
                  
                  {activeCategory === 'Overall Photos' && (
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/5 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto relative">
                        <div className="absolute inset-0 bg-amber-500/10 rounded-2xl blur animate-pulse"></div>
                        <LucideIcon name="Camera" size={28} className="relative z-10" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display font-extrabold text-base text-white">
                          Memory Lane is Ready
                        </h4>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                          No classroom, activity, or event photos have been uploaded yet. Authenticated administrators can instantly upload photos directly from the Admin Portal.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeCategory === 'Videos' && (
                    <div className="space-y-6">
                      {/* Fake Video Player Wireframe */}
                      <div className="w-full aspect-video rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center relative overflow-hidden max-w-sm mx-auto">
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] text-gray-500 font-mono">
                          <span>00:00 / 05:00</span>
                          <span>1080p HD</span>
                        </div>
                        <div className="absolute bottom-1.5 left-3 right-3 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-gradient-to-r from-[#D4AF37] to-amber-500"></div>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-red-500/10 text-red-500 border border-red-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer relative">
                          <div className="absolute inset-0 bg-red-500/20 rounded-full blur animate-ping opacity-70"></div>
                          <LucideIcon name="Play" size={24} className="ml-1 relative z-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display font-extrabold text-base text-white">
                          Coaching Videos Coming Soon
                        </h4>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                          Live classrooms, mock tests breakdown, and core science experiment tutorials are being compiled. High-definition media lessons will appear here shortly.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeCategory === 'Director' && (
                    <div className="space-y-6">
                      <div className="w-20 h-20 rounded-full border border-white/10 bg-[#071B3A] flex items-center justify-center mx-auto relative overflow-hidden shadow-inner">
                        <LucideIcon name="User" size={32} className="text-gray-500" />
                      </div>
                      <div className="space-y-4 max-w-md mx-auto">
                        <div className="relative p-4 bg-white/5 rounded-2xl border border-white/5 italic text-xs text-gray-200 font-sans leading-relaxed">
                          <span className="absolute -top-3 left-4 text-3xl text-[#D4AF37] font-serif leading-none">“</span>
                          Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
                          <span className="block mt-2 font-display font-bold not-italic text-[10px] text-[#D4AF37] uppercase tracking-widest">— Director Uday Pratap Singh</span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-display font-extrabold text-sm text-white">
                            Director's Portfolio Pending
                          </h4>
                          <p className="font-sans text-xs text-gray-400 leading-relaxed">
                            Official photographs and exclusive messages from Director Uday Pratap Singh will appear once updated.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCategory === 'Achievements' && (
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-yellow-500/5 text-yellow-400 border border-yellow-500/20 flex items-center justify-center mx-auto relative">
                        <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur animate-pulse"></div>
                        <LucideIcon name="Trophy" size={28} className="relative z-10" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display font-extrabold text-base text-white">
                          The Honor Roll is Empty
                        </h4>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                          Medals, scholarship certificates, competitive test ranks, and outstanding student report highlights will be beautifully stored in this board.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Grid of Media Items */
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, idx) => (
                      <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setActiveItemIdx(idx)}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/10 shadow-lg backdrop-blur-sm bg-white/5 hover:border-[#D4AF37]/40 transition-all duration-300"
                      >
                        {/* Image element with lazy loading */}
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                        />

                        {/* Top Indicator badge if video */}
                        {item.videoUrl && (
                          <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg border border-red-500/30">
                            <LucideIcon name="Play" size={14} className="ml-0.5" />
                          </div>
                        )}

                        {/* Dark Hover Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                          <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#D4AF37] mb-1">
                            {item.category} {item.date && `• ${item.date}`}
                          </span>
                          <h4 className="font-display font-bold text-sm text-white leading-snug">
                            {item.title}
                          </h4>
                          <div className="mt-2.5 flex items-center gap-1 text-[11px] text-white/70 font-semibold uppercase tracking-wider">
                            <LucideIcon name={item.videoUrl ? "Play" : "Sparkles"} size={12} className="text-[#D4AF37]" />
                            <span>{item.videoUrl ? 'Click to Play' : 'Click to Zoom'}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Lightbox Modal with Video Support */}
        <AnimatePresence>
          {activeItemIdx !== null && filteredItems[activeItemIdx] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
              onClick={() => setActiveItemIdx(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItemIdx(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#071B3A] text-white cursor-pointer transition-colors z-50"
              >
                <LucideIcon name="X" size={24} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#071B3A] text-white cursor-pointer select-none transition-colors hidden md:block z-50"
              >
                <LucideIcon name="ChevronLeft" size={28} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#071B3A] text-white cursor-pointer select-none transition-colors hidden md:block z-50"
              >
                <LucideIcon name="ChevronRight" size={28} />
              </button>

              {/* Central Box */}
              <div
                className="max-w-4xl w-full max-h-[80vh] flex flex-col justify-center items-center relative"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredItems[activeItemIdx].videoUrl ? (
                  /* Video Rendering */
                  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black max-h-[70vh]">
                    {filteredItems[activeItemIdx].videoUrl?.includes('youtube.com') ||
                    filteredItems[activeItemIdx].videoUrl?.includes('youtu.be') ? (
                      <iframe
                        src={getEmbedUrl(filteredItems[activeItemIdx].videoUrl!)}
                        title={filteredItems[activeItemIdx].title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        src={filteredItems[activeItemIdx].videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                ) : (
                  /* Photo Rendering with Zoom styling */
                  <motion.img
                    key={activeItemIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={filteredItems[activeItemIdx].imageUrl}
                    alt={filteredItems[activeItemIdx].title}
                    referrerPolicy="no-referrer"
                    className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/20"
                  />
                )}

                {/* Subtitle info overlay */}
                <div className="mt-4 text-center max-w-lg">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                    {filteredItems[activeItemIdx].category} {filteredItems[activeItemIdx].date && `• ${filteredItems[activeItemIdx].date}`}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-white mt-1">
                    {filteredItems[activeItemIdx].title}
                  </h3>
                </div>
              </div>

              {/* Mobile Swipe / Click Help */}
              <div className="absolute bottom-6 flex items-center gap-4 md:hidden">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-white/10 rounded-full text-white text-xs font-semibold"
                >
                  Prev
                </button>
                <span className="text-white text-xs">
                  {activeItemIdx + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-white/10 rounded-full text-white text-xs font-semibold"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
