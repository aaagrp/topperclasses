import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MapPin, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  badge: 'Parent' | 'Student';
  relation?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "My daughter Ananya (Class 10) was struggling with Mathematics. Thanks to Topper's Classes' smart-visual boards and the small batch focus, she secured 95% in her mock exams! Uday sir's continuous feedback loop with parents is incredible.",
    author: "Manoj Singh",
    role: "Civil Lines, Gorakhpur",
    rating: 5,
    badge: "Parent",
    relation: "Father of Ananya Singh"
  },
  {
    quote: "The weekly Sunday tests and physical gold medals create a highly motivating atmosphere. I was awarded the 'Student of the Month' certificate twice, which boosted my academic drive and public speaking confidence!",
    author: "Shreya Mishra",
    role: "Class 9, Rustampur",
    rating: 5,
    badge: "Student",
    relation: "Science & English Stream"
  },
  {
    quote: "Topper's Classes does not believe in rote memorization. They teach through visual projectors, converting dry formulas into interactive concepts. My confidence in physical sciences has improved tremendously.",
    author: "Aditya Narayan Mishra",
    role: "Class 10, Rustampur",
    rating: 5,
    badge: "Student",
    relation: "Board Prep Batch"
  },
  {
    quote: "The campus is clean, completely secure with CCTV surveillance, and has a superb digital library. It provides the safest, most advanced academic ecosystem in Gorakhpur. Mr. Uday Pratap Singh supervises every child.",
    author: "Mrs. Ranjana Tripathy",
    role: "Betiahata, Gorakhpur",
    rating: 5,
    badge: "Parent",
    relation: "Mother of Ayush Tripathy (Class 7)"
  },
  {
    quote: "The personalized attention is absolute. In other coaching centres with 60+ students, my child felt lost. Here, with restricted batch sizes, teachers track his weak concepts on a daily basis.",
    author: "Rajeshwar Rao",
    role: "Rustampur, Gorakhpur",
    rating: 5,
    badge: "Parent",
    relation: "Father of Vikramaditya (Class 8)"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000); // cycle every 7 seconds
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause autoplay on manual navigation
  };

  const current = TESTIMONIALS[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 28 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { duration: 0.3 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section 
      id="parent-student-testimonials" 
      className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#071B3A] dark:to-[#041024] border-t border-black/[0.04] dark:border-white/5 overflow-hidden text-left"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative">
        
        {/* Artistic Background accents */}
        <div className="absolute top-0 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-20">
          <span className="pill">Parent & Student Testimonials</span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-[#071B3A] dark:text-white tracking-tight leading-tight">
            Direct Feedback <span className="text-[#D4AF37]">From Our Community</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 dark:text-gray-300">
            Read real feedback and success stories shared by the families of Gorakhpur who have experienced the Topper's Classes advantage.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Frame */}
        <div className="relative max-w-4xl mx-auto min-h-[360px] md:min-h-[280px]">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white dark:bg-[#071B3A] border border-black/[0.04] dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-between relative"
            >
              {/* Giant quote mark icon */}
              <div className="absolute top-4 right-8 font-display text-8xl md:text-9xl text-[#D4AF37]/10 dark:text-[#D4AF37]/5 select-none pointer-events-none">
                “
              </div>

              {/* Left Side: Avatar with Badge & Rating */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left shrink-0 space-y-4">
                {/* Visual Avatar Placeholder */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-display font-black text-2xl shadow-md">
                    {current.author.charAt(0)}
                  </div>
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase shadow-sm ${
                    current.badge === 'Parent' 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {current.badge}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={15} className="text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
              </div>

              {/* Right Side: Quote Content */}
              <div className="flex-grow space-y-5">
                <p className="font-display font-medium text-base md:text-xl text-[#071B3A] dark:text-[#F4E8C1] italic leading-relaxed">
                  "{current.quote}"
                </p>

                <div className="pt-2 border-t border-black/[0.04] dark:border-white/5">
                  <h4 className="font-display font-bold text-lg text-[#071B3A] dark:text-white leading-tight">
                    {current.author}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-500 dark:text-gray-400">
                    <span className="font-semibold">{current.relation || current.role}</span>
                    <span className="text-slate-300 dark:text-gray-600">•</span>
                    <span className="font-mono flex items-center gap-1 bg-slate-50 dark:bg-white/5 px-2 py-0.5 rounded border border-black/5 dark:border-white/5">
                      <MapPin size={12} className="text-[#D4AF37]" />
                      <span>{current.role}</span>
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Nav Arrows */}
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#071B3A] border border-black/10 dark:border-white/10 text-slate-700 dark:text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#071B3A] hover:border-[#D4AF37] transition-all duration-300 shadow-md cursor-pointer z-10"
            aria-label="Previous quote"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#071B3A] border border-black/10 dark:border-white/10 text-slate-700 dark:text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#071B3A] hover:border-[#D4AF37] transition-all duration-300 shadow-md cursor-pointer z-10"
            aria-label="Next quote"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Carousel Indicators Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              id={`testimonial-dot-${idx}`}
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? 'w-8 bg-[#D4AF37]' 
                  : 'w-2 bg-slate-300 dark:bg-gray-600 hover:bg-[#D4AF37]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Autoplay status flag / pause-resume indicator */}
        <div className="flex justify-center items-center gap-1.5 mt-4 text-[10px] font-mono text-slate-400 dark:text-gray-500">
          <button
            id="testimonial-play-toggle"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
          >
            {isAutoPlaying ? <Pause size={10} /> : <Play size={10} />}
            <span>{isAutoPlaying ? "Auto-playing feedback" : "Autoplay paused"}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
