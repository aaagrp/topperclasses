import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DirectorProfile from './components/DirectorProfile';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Academics from './components/Academics';
import Activities from './components/Activities';
import NoticeBoard from './components/NoticeBoard';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';
import AdminPanel from './components/AdminPanel';
import FloatingActions from './components/FloatingActions';
import LucideIcon from './components/LucideIcon';
import { ArticlesPage, ArticleDetailPage } from './components/Articles';
import {
  AboutPage,
  WhyUsPage,
  CoursesPage,
  TimingsPage,
  ActivitiesPage,
  NoticesPage,
  GalleryPage
} from './components/FullPages';

import {
  DEFAULT_COURSES,
  DEFAULT_SUBJECTS,
  DEFAULT_BATCH_TIMINGS,
  DEFAULT_CHOOSE_US,
  DEFAULT_ACTIVITIES,
  DEFAULT_GALLERY,
  DEFAULT_ACHIEVEMENTS,
  getNotices,
  saveNotices,
  getSettings,
  saveSettings,
  getGalleryItems,
  saveGalleryItems
} from './data';
import { Notice, SiteSettings, GalleryItem } from './types';

export default function App() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [activePage, setActivePage] = useState<string>('home');
  
  // Modals & Panel States
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Scroll to top when activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Load notices and settings from LocalStorage or Defaults on mount
  useEffect(() => {
    setNotices(getNotices());
    setSettings(getSettings());
    setGalleryItems(getGalleryItems());

    // Restore admin session if available
    const adminSession = localStorage.getItem('toppers_admin_active_v1');
    if (adminSession === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleUpdateNotices = (updatedNotices: Notice[]) => {
    setNotices(updatedNotices);
    saveNotices(updatedNotices);
  };

  const handleUpdateSettings = (updatedSettings: SiteSettings) => {
    setSettings(updatedSettings);
    saveSettings(updatedSettings);
  };

  const handleUpdateGallery = (updatedGallery: GalleryItem[]) => {
    setGalleryItems(updatedGallery);
    saveGalleryItems(updatedGallery);
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    localStorage.setItem('toppers_admin_active_v1', 'true');
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('toppers_admin_active_v1');
  };

  // Wait for settings to load
  if (!settings) {
    return (
      <div className="min-h-screen bg-[#041024] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
        <p className="text-xs text-[#F4E8C1] mt-4 font-mono font-bold uppercase tracking-widest">
          Initializing Topper's Classes...
        </p>
      </div>
    );
  }

  // Generate dynamic stats to reflect active data
  const dynamicAchievements = DEFAULT_ACHIEVEMENTS.map((item) => {
    if (item.label === 'Activities Conducted') {
      return { ...item, value: `${DEFAULT_ACTIVITIES.length} Conducted` };
    }
    if (item.label === 'Happy Parents') {
      return { ...item, value: 'Growing Community' };
    }
    return item;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#041024] text-slate-800 dark:text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-[#071B3A] antialiased">
      {/* Premium Glassmorphic Header */}
      <Header
        settings={settings}
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        isAdmin={isAdmin}
        onLogout={handleAdminLogout}
        activePage={activePage}
        onChangePage={setActivePage}
      />

      <main className="relative pt-24 md:pt-32">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
            >
              {/* Hero Section */}
              <Hero
                settings={settings}
                onOpenAdmission={() => setAdmissionOpen(true)}
              />

              {/* Milestone & Achievements counter section */}
              <Stats achievements={dynamicAchievements} />

              {/* Quick Explorer Teaser Block */}
              <div className="py-12 bg-slate-50 dark:bg-white/[0.01] border-y border-black/5 dark:border-white/5 text-left">
                <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="p-6 bg-white dark:bg-[#071B3A] rounded-2xl border border-black/5 dark:border-white/10 shadow-sm space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Academic Streams</span>
                    <h3 className="font-display font-bold text-lg text-[#071B3A] dark:text-white leading-tight">Classes 1 to 10 Syllabus</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 font-sans">Explore full grade breakdowns, daily homework tracking, and board-exam mock test structures.</p>
                    <button onClick={() => setActivePage('courses')} className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer">
                      <span>View Courses & Syllabuses</span>
                      <LucideIcon name="ArrowRight" size={12} />
                    </button>
                  </div>

                  {/* Card 2 */}
                  <div className="p-6 bg-white dark:bg-[#071B3A] rounded-2xl border border-black/5 dark:border-white/10 shadow-sm space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Active Timetable</span>
                    <h3 className="font-display font-bold text-lg text-[#071B3A] dark:text-white leading-tight">Batch Timings & Shifts</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 font-sans">Check out the morning and evening schedules, doubt solving desks, and Sunday exam timings.</p>
                    <button onClick={() => setActivePage('timings')} className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer">
                      <span>Explore Timing Schedule</span>
                      <LucideIcon name="ArrowRight" size={12} />
                    </button>
                  </div>

                  {/* Card 3 */}
                  <div className="p-6 bg-white dark:bg-[#071B3A] rounded-2xl border border-black/5 dark:border-white/10 shadow-sm space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Co-Curricular</span>
                    <h3 className="font-display font-bold text-lg text-[#071B3A] dark:text-white leading-tight">Extra Activities Grid</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 font-sans">See our drawing classes, music & dance sessions, debate tournaments, and science model expos.</p>
                    <button onClick={() => setActivePage('activities')} className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer">
                      <span>See Extra Activities</span>
                      <LucideIcon name="ArrowRight" size={12} />
                    </button>
                  </div>
                </div>
              </div>

              {/* About summary block */}
              <About settings={settings} />

              {/* Director Profile & Honors */}
              <DirectorProfile />

              {/* Why Choose Us - 16 Bento cards */}
              <WhyChooseUs items={DEFAULT_CHOOSE_US} />

              {/* Classes, Subjects, and timings Dashboard Hub */}
              <Academics
                courses={DEFAULT_COURSES}
                subjects={DEFAULT_SUBJECTS}
                timings={DEFAULT_BATCH_TIMINGS}
                timingNote="Batch timings may change according to requirements."
              />

              {/* Extra Activities Category Grid */}
              <Activities activities={DEFAULT_ACTIVITIES} />

              {/* Notice Board Feed */}
              <NoticeBoard notices={notices} />

              {/* Media / Gallery Carousel Grid */}
              <Gallery items={galleryItems} />

              {/* News-style articles preview */}
              <section className="border-t border-black/5 bg-slate-50 px-4 py-12 dark:border-white/5 dark:bg-white/[0.01] md:px-6 md:py-16">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 md:flex-row md:items-end">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">The learning journal</span>
                    <h2 className="mt-2 font-display text-3xl font-black text-[#071B3A] dark:text-white">Articles & Updates</h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">Study tips, exam preparation ideas, and useful updates for students and parents.</p>
                  </div>
                  <button onClick={() => setActivePage('articles')} className="btn-gold inline-flex items-center gap-2 px-5 py-3 text-sm">Explore all articles <LucideIcon name="ArrowRight" size={15} /></button>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'about' && (
            <AboutPage settings={settings} onOpenAdmission={() => setAdmissionOpen(true)} />
          )}

          {activePage === 'why-us' && (
            <WhyUsPage items={DEFAULT_CHOOSE_US} onOpenAdmission={() => setAdmissionOpen(true)} />
          )}

          {activePage === 'courses' && (
            <CoursesPage courses={DEFAULT_COURSES} subjects={DEFAULT_SUBJECTS} onOpenAdmission={() => setAdmissionOpen(true)} />
          )}

          {activePage === 'timings' && (
            <TimingsPage timings={DEFAULT_BATCH_TIMINGS} timingNote="Batch timings may change according to requirements." onOpenAdmission={() => setAdmissionOpen(true)} />
          )}

          {activePage === 'activities' && (
            <ActivitiesPage activities={DEFAULT_ACTIVITIES} />
          )}

          {activePage === 'notices' && (
            <NoticesPage notices={notices} />
          )}

          {activePage === 'gallery' && (
            <GalleryPage galleryItems={galleryItems} />
          )}

          {activePage === 'articles' && (
            <ArticlesPage onOpenArticle={(slug) => setActivePage(`article:${slug}`)} />
          )}

          {activePage.startsWith('article:') && (
            <ArticleDetailPage
              slug={activePage.slice('article:'.length)}
              onBack={() => setActivePage('articles')}
              onOpenArticle={(slug) => setActivePage(`article:${slug}`)}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Parent & Student Testimonials Carousel */}
      <Testimonials />

      {/* Footer and Map Embed */}
      <Footer
        settings={settings}
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        isAdmin={isAdmin}
        onLogout={handleAdminLogout}
      />

      {/* Secure Admission iframe form popups */}
      <AdmissionModal
        isOpen={admissionOpen}
        onClose={() => setAdmissionOpen(false)}
      />

      {/* Dynamic real-time Admin announcement manager */}
      <AdminPanel
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        notices={notices}
        settings={settings}
        galleryItems={galleryItems}
        onUpdateNotices={handleUpdateNotices}
        onUpdateSettings={handleUpdateSettings}
        onUpdateGallery={handleUpdateGallery}
        onLoginSuccess={handleAdminLogin}
        isAdmin={isAdmin}
      />

      {/* Floating call / WhatsApp Hotlines */}
      <FloatingActions settings={settings} />
    </div>
  );
}

