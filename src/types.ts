export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'announcement' | 'academic' | 'activity' | 'important';
  isNew?: boolean;
}

export interface Course {
  classNum: string;
  description: string;
  subjects: string[];
}

export interface SubjectItem {
  name: string;
  description: string;
  iconName: string;
}

export interface BatchTiming {
  className: string;
  timing: string;
  duration: string;
}

export interface ExtraActivityItem {
  name: string;
  description: string;
  category: 'Arts' | 'Sports' | 'Academic' | 'Development';
  iconName: string;
}

export interface AchievementItem {
  label: string;
  value: string;
  isStatistic: boolean;
  textSuffix?: string;
  iconName: string;
}

export interface ChooseUsItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactInfo {
  mainWhatsApp: string;
  callNumbers: string[];
  feeInformation: string;
  technicalSupport: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Overall Photos' | 'Videos' | 'Director' | 'Achievements';
  imageUrl: string;
  videoUrl?: string;
  date?: string;
}

export interface SiteSettings {
  directorName: string;
  location: string;
  address: string;
  contact: ContactInfo;
  instagramUrl: string;
  facebookUrl: string;
  mapEmbedUrl: string;
}
