import { Notice, Course, SubjectItem, BatchTiming, ExtraActivityItem, AchievementItem, ChooseUsItem, GalleryItem, SiteSettings } from './types';

export const DEFAULT_NOTICES: Notice[] = [
  {
    id: 'notice-1',
    title: 'Admissions Open for Session 2026-27',
    content: 'Enrollment is now officially open for Class 1 to 10. Secure your seat today for premium academic mentorship!',
    date: '2026-07-10',
    type: 'important',
    isNew: true
  },
  {
    id: 'notice-2',
    title: 'New Batch Registration Started',
    content: 'Special early-bird registrations for evening batches are open. Timings are scheduled class-wise from 3:00 PM to 8:00 PM.',
    date: '2026-07-08',
    type: 'academic',
    isNew: true
  },
  {
    id: 'notice-3',
    title: 'Weekly Sunday Tests Scheduled',
    content: 'Continuing our commitment to regular evaluation, weekly subject-wise tests will take place every Sunday starting 9:00 AM.',
    date: '2026-07-05',
    type: 'academic',
    isNew: false
  },
  {
    id: 'notice-4',
    title: 'Music & Dance Activities Launching',
    content: 'To foster comprehensive development, certificate classes in classical drawing, speech, music, and dance are rolling out next week!',
    date: '2026-07-01',
    type: 'activity',
    isNew: false
  },
  {
    id: 'notice-5',
    title: 'Special Student Development Program',
    content: 'An intensive interactive session focusing on confidence, public speaking, leadership, and personal discipline for Class 6-10.',
    date: '2026-06-28',
    type: 'announcement',
    isNew: false
  }
];

export const DEFAULT_COURSES: Course[] = [
  { classNum: 'Class 1', description: 'Nurturing foundation skills, phonics, number sense, and activity-led learning.', subjects: ['Mathematics', 'English', 'Hindi', 'General Knowledge', 'Activity Based Learning'] },
  { classNum: 'Class 2', description: 'Fostering confidence, sentence formation, logical addition, and reading comprehension.', subjects: ['Mathematics', 'English', 'Hindi', 'General Knowledge', 'Activity Based Learning'] },
  { classNum: 'Class 3', description: 'Developing core grammar, mental math, environmental sciences, and storytelling.', subjects: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Science', 'Computer'] },
  { classNum: 'Class 4', description: 'Building investigative thinking in science, grammar proficiency, and fraction math.', subjects: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Science', 'Computer', 'General Knowledge'] },
  { classNum: 'Class 5', description: 'Advanced basic arithmetic, introduction to environmental history, and computer logic.', subjects: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Science', 'Computer', 'General Knowledge'] },
  { classNum: 'Class 6', description: 'Transitioning to structured sciences (Physics, Chemistry, Biology) and algebra.', subjects: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Science', 'Computer', 'General Knowledge'] },
  { classNum: 'Class 7', description: 'Enhancing analytical problem-solving, geographical insights, and computing basics.', subjects: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Science', 'Computer', 'General Knowledge'] },
  { classNum: 'Class 8', description: 'Strengthening high-school foundation, advanced science, essays, and global history.', subjects: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Science', 'Computer', 'General Knowledge'] },
  { classNum: 'Class 9', description: 'Rigorous academic preparation focusing on deep concepts, boards framework, and mock papers.', subjects: ['Mathematics', 'Science (Phy/Chem/Bio)', 'English', 'Hindi', 'Social Studies (Hist/Civ/Geo/Eco)', 'Computer Application'] },
  { classNum: 'Class 10', description: 'Comprehensive boards coaching, strategic test series, previous years paper solving, and confidence building.', subjects: ['Mathematics', 'Science (Phy/Chem/Bio)', 'English', 'Hindi', 'Social Studies (Hist/Civ/Geo/Eco)', 'Computer Application'] }
];

export const DEFAULT_SUBJECTS: SubjectItem[] = [
  { name: 'Mathematics', description: 'Conceptual arithmetic, algebra, and geometry with interactive problem-solving techniques.', iconName: 'Calculator' },
  { name: 'Science', description: 'Practical and audiovisual demonstrations of Physics, Chemistry, and Biology concepts.', iconName: 'Beaker' },
  { name: 'English', description: 'Comprehensive grammar, creative writing, spoken English, and confidence-building debates.', iconName: 'BookOpen' },
  { name: 'Hindi', description: 'Vyakaran, literature appreciation, clear pronunciation, and handwriting enhancement.', iconName: 'PenTool' },
  { name: 'Social Science', description: 'Visual mapping of history, geographical systems, civic responsibilities, and economics.', iconName: 'Globe' },
  { name: 'Computer', description: 'Interactive digital literacy, logical coding principles, and smart computing habits.', iconName: 'Cpu' },
  { name: 'General Knowledge', description: 'Static GK, current affairs, rapid-fire quizzes, and global news awareness.', iconName: 'Compass' },
  { name: 'Activity Based Learning', description: 'Learning through experiments, educational toys, puzzles, and interactive group plays.', iconName: 'Sparkles' }
];

export const DEFAULT_BATCH_TIMINGS: BatchTiming[] = [
  { className: 'Class 1 - 2', timing: '3:00 PM to 4:00 PM', duration: 'Monday to Saturday' },
  { className: 'Class 3 - 4', timing: '4:00 PM to 5:00 PM', duration: 'Monday to Saturday' },
  { className: 'Class 5 - 6', timing: '5:00 PM to 6:00 PM', duration: 'Monday to Saturday' },
  { className: 'Class 7 - 8', timing: '6:00 PM to 7:00 PM', duration: 'Monday to Saturday' },
  { className: 'Class 9 - 10', timing: '7:00 PM to 8:00 PM', duration: 'Monday to Saturday' }
];

export const DEFAULT_CHOOSE_US: ChooseUsItem[] = [
  { title: 'Experienced Teachers', description: 'Highly qualified educators committed to clear concepts and student growth.', iconName: 'GraduationCap' },
  { title: 'Small Batch Size', description: 'Limited seats per class to guarantee focused support and spacious seating.', iconName: 'Users' },
  { title: 'Personal Attention', description: 'Dedicated one-on-one doubt-solving sessions to bridge understanding gaps.', iconName: 'HeartHandshake' },
  { title: 'Weekly Tests', description: 'Sunday evaluations to gauge understanding and build core test temperament.', iconName: 'ClipboardCheck' },
  { title: 'Monthly Progress Reports', description: 'Regular interactive feedback sessions with parents to review achievements.', iconName: 'TrendingUp' },
  { title: 'Affordable Fee', description: 'Premium top-tier academic facilities priced at highly competitive rates.', iconName: 'Coins' },
  { title: 'Safe Environment', description: 'Well-monitored, sanitized, disciplined, and child-safe classroom setup.', iconName: 'ShieldCheck' },
  { title: 'Smart Classes', description: 'Interactive visual projections and multimedia aids to animate key topics.', iconName: 'Tv' },
  { title: 'Computer Education', description: 'Practical computer lab sessions exposing children to essential IT skills.', iconName: 'Monitor' },
  { title: 'Extra Activities', description: 'Enriching sessions including music, dance, public speech, and drawing.', iconName: 'Palette' },
  { title: 'Competition Prep', description: 'Rigorous conceptual alignment preparing students for competitive examinations.', iconName: 'Award' },
  { title: 'Certificate Programs', description: 'Elegantly customized certification rewards for co-curricular excellence.', iconName: 'FileBadge' },
  { title: 'Prize Distribution', description: 'Periodic high-profile motivational events and medals for top ranks.', iconName: 'Trophy' },
  { title: 'Modern Learning', description: 'Practical learning systems focusing on logic instead of rote memorization.', iconName: 'Lightbulb' },
  { title: 'Interactive Classes', description: 'Quizzes, classroom discussions, presentations, and digital games.', iconName: 'MessageSquare' },
  { title: 'Student Development', description: 'Focus on confidence, personal discipline, creative leadership, and etiquette.', iconName: 'Smile' }
];

export const DEFAULT_ACTIVITIES: ExtraActivityItem[] = [
  { name: 'Speech Competition', description: 'Fostering confidence, stage presence, and articulation in public speaking.', category: 'Development', iconName: 'Mic' },
  { name: 'Olympiad Preparation', description: 'Rigorous problem solving alignment with national competitive formats.', category: 'Academic', iconName: 'BookMarked' },
  { name: 'Quiz Competition', description: 'Rapid-fire general knowledge and science trivia to sharpen quick-thinking.', category: 'Academic', iconName: 'HelpCircle' },
  { name: 'Science Exhibition', description: 'Creating active science projects and working models to demonstrate theories.', category: 'Academic', iconName: 'FlaskConical' },
  { name: 'Drawing & Painting', description: 'Exploring canvas coloring, sketching techniques, and landscape painting.', category: 'Arts', iconName: 'Paintbrush' },
  { name: 'Music Classes', description: 'Learning basic vocals, rhythm beats, and introductory instruments.', category: 'Arts', iconName: 'Music' },
  { name: 'Dance Classes', description: 'Encouraging physical expressions, rhythm movements, and traditional styles.', category: 'Arts', iconName: 'Flame' },
  { name: 'Talent Hunt Events', description: 'Showcasing unique individual talents across crafts, acting, and arts.', category: 'Development', iconName: 'Sparkles' },
  { name: 'Medal & Prize Ceremonies', description: 'Fostering healthy competitiveness with shining medals and certificates.', category: 'Development', iconName: 'Trophy' },
  { name: 'Educational Tours', description: 'Visits to local museums, botanical spots, and science galleries.', category: 'Development', iconName: 'MapPin' },
  { name: 'Guest Lectures', description: 'Sessions led by professional experts on safety, health, and ethics.', category: 'Development', iconName: 'UserCheck' },
  { name: 'Career Guidance', description: 'Pathways counseling for higher-secondary decisions and competitive tracks.', category: 'Development', iconName: 'Target' }
];

export const DEFAULT_ACHIEVEMENTS: AchievementItem[] = [
  { label: 'Students Enrolled', value: 'New Batches', isStatistic: false, textSuffix: 'Growing Every Day', iconName: 'Users' },
  { label: 'Qualified Teachers', value: 'Dedicated Minds', isStatistic: false, textSuffix: 'Topper Guidance', iconName: 'GraduationCap' },
  { label: 'Activities Conducted', value: 'Rich Portfolio', isStatistic: false, textSuffix: 'Holistic Growth', iconName: 'Palette' },
  { label: 'Certificates Awarded', value: 'Official Programs', isStatistic: false, textSuffix: 'Talent Certified', iconName: 'FileBadge' },
  { label: 'Happy Parents', value: 'Thriving Community', isStatistic: false, textSuffix: 'Full Confidence', iconName: 'HeartHandshake' }
];

export const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Classroom Floor Interactive Study Session',
    category: 'Overall Photos',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    date: 'July 2026'
  },
  {
    id: 'g2',
    title: 'Structured Smart Coaching Classroom Setup',
    category: 'Overall Photos',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    date: 'July 2026'
  },
  {
    id: 'g3',
    title: "Topper's Classes Board Examination Academic Toppers",
    category: 'Achievements',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    date: 'June 2026'
  },
  {
    id: 'g4',
    title: 'Grand Medals and Certificate Celebration Ceremony',
    category: 'Achievements',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    date: 'June 2026'
  },
  {
    id: 'g5',
    title: 'Excellence Felicitation Award with Mentor',
    category: 'Achievements',
    imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80',
    date: 'June 2026'
  },
  {
    id: 'g6',
    title: 'Director Honoring Academic Toppers of Gorakhpur',
    category: 'Director',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    date: 'May 2026'
  },
  {
    id: 'g7',
    title: 'Weekly Excellence Badges & Shields Distribution',
    category: 'Achievements',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    date: 'July 2026'
  }
];

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  directorName: 'Uday Pratap Singh',
  location: 'Rustampur, Gorakhpur, Uttar Pradesh',
  address: 'Rustampur Chowk, near Petrol Pump, Gorakhpur, Uttar Pradesh, 273016',
  instagramUrl: 'https://www.instagram.com/toppers_class_gkp?igsh=MTgza2k2cG5vODg0bQ==',
  facebookUrl: 'https://www.facebook.com/shubhamsingh.shubham.564813',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.272605553651!2d83.37688414999999!3d26.742188449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991448b111db9f9%3A0x6b87be2e68449bf2!2sRustampur%2C%20Gorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  contact: {
    mainWhatsApp: '8004655840',
    callNumbers: ['8004655840', '9795871438', '8052965570'],
    feeInformation: '9795871438',
    technicalSupport: ['8004655840', '8052965570']
  }
};

// LocalStorage helpers
const KEY_NOTICES = 'toppers_notices_v1';
const KEY_SETTINGS = 'toppers_settings_v1';
const KEY_GALLERY = 'toppers_gallery_v1';

export function getGalleryItems(): GalleryItem[] {
  try {
    const data = localStorage.getItem(KEY_GALLERY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
    return DEFAULT_GALLERY;
  } catch (e) {
    return DEFAULT_GALLERY;
  }
}

export function saveGalleryItems(items: GalleryItem[]): void {
  try {
    localStorage.setItem(KEY_GALLERY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save gallery items to localStorage', e);
  }
}

export function getNotices(): Notice[] {
  try {
    const data = localStorage.getItem(KEY_NOTICES);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
    return DEFAULT_NOTICES;
  } catch (e) {
    return DEFAULT_NOTICES;
  }
}

export function saveNotices(notices: Notice[]): void {
  try {
    localStorage.setItem(KEY_NOTICES, JSON.stringify(notices));
  } catch (e) {
    console.error('Failed to save notices to localStorage', e);
  }
}

export function getSettings(): SiteSettings {
  try {
    const data = localStorage.getItem(KEY_SETTINGS);
    if (data) {
      const parsed = JSON.parse(data);
      if (
        parsed &&
        typeof parsed === 'object' &&
        typeof parsed.directorName === 'string' &&
        parsed.contact &&
        Array.isArray(parsed.contact.callNumbers) &&
        parsed.contact.callNumbers.length > 0
      ) {
        return parsed;
      }
    }
    return DEFAULT_SITE_SETTINGS;
  } catch (e) {
    return DEFAULT_SITE_SETTINGS;
  }
}

export function saveSettings(settings: SiteSettings): void {
  try {
    localStorage.setItem(KEY_SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings to localStorage', e);
  }
}
