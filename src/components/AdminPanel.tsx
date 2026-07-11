import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import LucideIcon from './LucideIcon';
import { Notice, SiteSettings, GalleryItem } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notices: Notice[];
  settings: SiteSettings;
  galleryItems: GalleryItem[];
  onUpdateNotices: (notices: Notice[]) => void;
  onUpdateSettings: (settings: SiteSettings) => void;
  onUpdateGallery: (items: GalleryItem[]) => void;
  onLoginSuccess: () => void;
  isAdmin: boolean;
}

export default function AdminPanel({
  isOpen,
  onClose,
  notices,
  settings,
  galleryItems = [],
  onUpdateNotices,
  onUpdateSettings,
  onUpdateGallery,
  onLoginSuccess,
  isAdmin
}: AdminPanelProps) {
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'notices' | 'gallery'>('notices');
  
  // Notice form state
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeContent, setNewNoticeContent] = useState('');
  const [newNoticeType, setNewNoticeType] = useState<'announcement' | 'academic' | 'activity' | 'important'>('announcement');
  const [newNoticeIsNew, setNewNoticeIsNew] = useState(true);

  // Contacts form state
  const [contactWhatsApp, setContactWhatsApp] = useState(settings.contact.mainWhatsApp);
  const [contactPhone1, setContactPhone1] = useState(settings.contact.callNumbers[0]);
  const [contactPhone2, setContactPhone2] = useState(settings.contact.callNumbers[1]);
  const [contactPhone3, setContactPhone3] = useState(settings.contact.callNumbers[2] || '');
  const [feePhone, setFeePhone] = useState(settings.contact.feeInformation);
  const [directorName, setDirectorName] = useState(settings.directorName);

  // Gallery form state
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaCategory, setMediaCategory] = useState<GalleryItem['category']>('Overall Photos');
  const [uploadMethod, setUploadMethod] = useState<'url' | 'file'>('file');
  const [mediaUrl, setMediaUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [fileBase64, setFileBase64] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'uday2005') {
      onLoginSuccess();
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect Password. Please try again.');
    }
  };

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle || !newNoticeContent) {
      alert('Please fill out both notice title and content.');
      return;
    }

    const newNotice: Notice = {
      id: `notice-${Date.now()}`,
      title: newNoticeTitle,
      content: newNoticeContent,
      type: newNoticeType,
      date: new Date().toISOString().split('T')[0],
      isNew: newNoticeIsNew
    };

    onUpdateNotices([newNotice, ...notices]);
    
    // Reset form
    setNewNoticeTitle('');
    setNewNoticeContent('');
    setNewNoticeType('announcement');
    setNewNoticeIsNew(true);
  };

  const handleDeleteNotice = (id: string) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      onUpdateNotices(notices.filter(n => n.id !== id));
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSettings: SiteSettings = {
      ...settings,
      directorName,
      contact: {
        mainWhatsApp: contactWhatsApp,
        callNumbers: [contactPhone1, contactPhone2, contactPhone3].filter(Boolean),
        feeInformation: feePhone,
        technicalSupport: [contactPhone1, contactPhone3].filter(Boolean)
      }
    };

    onUpdateSettings(updatedSettings);
    alert('Administrative settings saved successfully!');
  };

  // Process selected file to base64
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) { // limit to 15MB for base64 storage
      alert('Please choose an image under 15MB to ensure fast storage performance.');
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFileBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Submit new media item
  const handleAddMedia = (e: React.FormEvent) => {
    e.preventDefault();

    if (!mediaTitle) {
      alert('Please provide a descriptive title or student name.');
      return;
    }

    let finalImageUrl = '';

    if (mediaCategory === 'Videos') {
      // For videos, we must have a videoUrl.
      if (!videoUrl) {
        alert('Please specify a video URL (direct link or YouTube link) for the Video category.');
        return;
      }
      
      // Setup a smart thumbnail for YouTube/Vimeo or default to play icon placeholder
      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = videoUrl.match(regExp);
        if (match && match[2].length === 11) {
          finalImageUrl = `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
        } else {
          finalImageUrl = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80';
        }
      } else {
        // Direct MP4 link, we can use a beautiful camera placeholder or mock background
        finalImageUrl = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80';
      }
    } else {
      // For photos: Overall Photos, Director, Achievements
      if (uploadMethod === 'file') {
        if (!fileBase64) {
          alert('Please drag & drop or select an image file first.');
          return;
        }
        finalImageUrl = fileBase64;
      } else {
        if (!mediaUrl) {
          alert('Please enter a valid image web URL.');
          return;
        }
        finalImageUrl = mediaUrl;
      }
    }

    const newItem: GalleryItem = {
      id: `media-${Date.now()}`,
      title: mediaTitle,
      category: mediaCategory,
      imageUrl: finalImageUrl,
      ...(mediaCategory === 'Videos' ? { videoUrl } : {}),
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };

    onUpdateGallery([newItem, ...galleryItems]);

    // Reset Form
    setMediaTitle('');
    setMediaUrl('');
    setVideoUrl('');
    setFileBase64('');
    setFileName('');
    if (fileInputRef.current) fileInputRef.current.value = '';

    alert(`Successfully posted to "${mediaCategory}" gallery!`);
  };

  const handleDeleteMedia = (id: string) => {
    if (window.confirm('Are you sure you want to remove this item from the public gallery?')) {
      onUpdateGallery(galleryItems.filter(item => item.id !== id));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#071B3A]/85 backdrop-blur-md animate-fade-in" onClick={onClose} />

      {/* Main Admin Drawer Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl h-[85vh] glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col text-left z-10 bg-[#071B3A]/95 backdrop-blur-xl"
      >
        {/* Header */}
        <div className="bg-transparent px-6 py-4.5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <Logo showText={false} size="sm" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base md:text-lg text-white">
                Topper's Admin Portal
              </h3>
              <span className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold block mt-0.5">
                Site Maintenance and Live Content Updates
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <LucideIcon name="X" size={20} />
          </button>
        </div>

        {/* Tab Navigation (Only visible when authenticated) */}
        {isAdmin && (
          <div className="flex border-b border-white/10 bg-white/5 p-1 gap-1">
            <button
              onClick={() => setActiveTab('notices')}
              className={`flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-r border-white/5 ${
                activeTab === 'notices'
                  ? 'bg-[#D4AF37] text-[#071B3A]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <LucideIcon name="Megaphone" size={14} />
              <span>Notices & Contacts</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#D4AF37] text-[#071B3A]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <LucideIcon name="Camera" size={14} />
              <span>Gallery & Media Manager</span>
            </button>
          </div>
        )}

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-transparent">
          {!isAdmin ? (
            /* Login Form */
            <div className="max-w-md mx-auto my-12 glass-card p-8 rounded-2xl space-y-6">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center mx-auto">
                  <Logo showText={false} size="md" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">Admin Authentication</h4>
                <p className="text-xs text-gray-300">
                  Please enter the administrative password to make real-time updates.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                    required
                  />
                  {errorMsg && (
                    <span className="text-xs font-semibold text-red-400 mt-1 block">
                      {errorMsg}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-2.5 cursor-pointer text-sm"
                >
                  Unlock Portal
                </button>
              </form>
            </div>
          ) : activeTab === 'notices' ? (
            /* Tab 1: Notices & Contacts View */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Panel: Manage Announcements & Notice Form */}
              <div className="space-y-6">
                <div className="glass-card p-5 rounded-2xl space-y-4">
                  <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                    <LucideIcon name="Megaphone" size={16} className="text-[#D4AF37]" />
                    <span>Publish New Notice</span>
                  </h4>

                  <form onSubmit={handleAddNotice} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Notice Title</label>
                      <input
                        type="text"
                        value={newNoticeTitle}
                        onChange={(e) => setNewNoticeTitle(e.target.value)}
                        placeholder="e.g. New Batch Timings Announcement"
                        className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Description Content</label>
                      <textarea
                        value={newNoticeContent}
                        onChange={(e) => setNewNoticeContent(e.target.value)}
                        placeholder="Write detailed announcements for parents..."
                        rows={3}
                        className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Category Tag</label>
                        <select
                          value={newNoticeType}
                          onChange={(e) => setNewNoticeType(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-xs text-white focus:outline-none [&>option]:bg-[#071B3A] [&>option]:text-white"
                        >
                          <option value="announcement">Announcement</option>
                          <option value="academic">Academic</option>
                          <option value="activity">Co-Curricular</option>
                          <option value="important">Important</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-2 pt-5 pl-2">
                        <input
                          type="checkbox"
                          id="notice-is-new"
                          checked={newNoticeIsNew}
                          onChange={(e) => setNewNoticeIsNew(e.target.checked)}
                          className="w-4 h-4 accent-[#D4AF37]"
                        />
                        <label htmlFor="notice-is-new" className="text-xs font-bold text-gray-300">
                          Show "NEW" Badge
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <LucideIcon name="Plus" size={14} />
                      <span>Post Announcement</span>
                    </button>
                  </form>
                </div>

                {/* Active Notices List */}
                <div className="glass-card p-5 rounded-2xl space-y-4">
                  <h4 className="font-display font-bold text-base text-white flex items-center justify-between">
                    <span>Active Announcements</span>
                    <span className="text-xs text-[#D4AF37] font-bold">({notices.length} active)</span>
                  </h4>

                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                    {notices.map((n) => (
                      <div
                        key={n.id}
                        className="flex items-center justify-between gap-3 p-3 bg-white/5 rounded-xl border border-white/5"
                      >
                        <div className="min-w-0 flex-1">
                          <h5 className="font-display font-bold text-xs text-white truncate">
                            {n.title}
                          </h5>
                          <span className="text-[9px] text-gray-400 block mt-0.5">{n.date} • {n.type}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteNotice(n.id)}
                          className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors cursor-pointer"
                          title="Delete Notice"
                        >
                          <LucideIcon name="Trash2" size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel: Manage Contact Details */}
              <div className="space-y-6">
                <div className="glass-card p-5 rounded-2xl space-y-4">
                  <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                    <LucideIcon name="Phone" size={16} className="text-[#D4AF37]" />
                    <span>Update Contact Details</span>
                  </h4>

                  <form onSubmit={handleSaveSettings} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Director's Name</label>
                      <input
                        type="text"
                        value={directorName}
                        onChange={(e) => setDirectorName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Primary WhatsApp</label>
                        <input
                          type="tel"
                          value={contactWhatsApp}
                          onChange={(e) => setContactWhatsApp(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">General Hotline 1</label>
                        <input
                          type="tel"
                          value={contactPhone1}
                          onChange={(e) => setContactPhone1(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Fee Help Desk 2</label>
                        <input
                          type="tel"
                          value={contactPhone2}
                          onChange={(e) => setContactPhone2(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Support Line 3</label>
                        <input
                          type="tel"
                          value={contactPhone3}
                          onChange={(e) => setContactPhone3(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Dedicated Fee Query Link</label>
                      <input
                        type="tel"
                        value={feePhone}
                        onChange={(e) => setFeePhone(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] font-extrabold rounded-xl text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <LucideIcon name="Check" size={14} />
                      <span>Save Settings</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            /* Tab 2: Gallery & Media Manager */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Upload / Add Media */}
              <div className="glass-card p-5 rounded-2xl space-y-5">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <LucideIcon name="Camera" size={16} className="text-[#D4AF37]" />
                  <span>Publish Gallery Media</span>
                </h4>

                <form onSubmit={handleAddMedia} className="space-y-4">
                  {/* Title */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Media Title / Student Name</label>
                    <input
                      type="text"
                      value={mediaTitle}
                      onChange={(e) => setMediaTitle(e.target.value)}
                      placeholder="e.g., Board Topper Rank 1 Achievement"
                      className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Gallery Target Category</label>
                    <select
                      value={mediaCategory}
                      onChange={(e) => setMediaCategory(e.target.value as GalleryItem['category'])}
                      className="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-xs text-white focus:outline-none [&>option]:bg-[#071B3A] [&>option]:text-white"
                    >
                      <option value="Overall Photos">Overall Photos (Classroom, Events, Institute)</option>
                      <option value="Videos">Videos (Coaching sessions, lectures)</option>
                      <option value="Director">Director (Director's portfolio)</option>
                      <option value="Achievements">Achievements (Medals, Awards, Toppers)</option>
                    </select>
                  </div>

                  {/* Upload Method or Video URL */}
                  {mediaCategory === 'Videos' ? (
                    /* Video inputs only */
                    <div className="space-y-2 animate-fade-in">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Video Link (YouTube, Vimeo, or direct URL)</label>
                        <input
                          type="url"
                          value={videoUrl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                          placeholder="https://www.youtube.com/watch?v=..."
                          className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                          required
                        />
                      </div>
                      <span className="text-[9px] text-gray-400 font-mono block">
                        💡 YouTube urls will automatically query and extract their high-definition thumbnails!
                      </span>
                    </div>
                  ) : (
                    /* Photo Inputs: supports file or url */
                    <div className="space-y-3 animate-fade-in">
                      {/* Method Toggle */}
                      <div className="flex gap-2 p-1 rounded-xl bg-white/5 border border-white/5 w-fit">
                        <button
                          type="button"
                          onClick={() => setUploadMethod('file')}
                          className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                            uploadMethod === 'file' ? 'bg-[#D4AF37] text-[#071B3A]' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Upload File
                        </button>
                        <button
                          type="button"
                          onClick={() => setUploadMethod('url')}
                          className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                            uploadMethod === 'url' ? 'bg-[#D4AF37] text-[#071B3A]' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Web URL
                        </button>
                      </div>

                      {uploadMethod === 'file' ? (
                        /* Native Drag/Drop Local upload */
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 text-center cursor-pointer hover:bg-white/5 transition-all duration-200 group relative"
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          {fileBase64 ? (
                            <div className="space-y-2">
                              <div className="w-16 h-12 rounded-lg overflow-hidden mx-auto border border-white/20">
                                <img src={fileBase64} alt="preview" className="w-full h-full object-cover" />
                              </div>
                              <span className="text-xs font-bold text-[#D4AF37] truncate block max-w-[200px] mx-auto">
                                {fileName} (Selected)
                              </span>
                              <span className="text-[9px] text-gray-400 block">Click to change file</span>
                            </div>
                          ) : (
                            <div className="space-y-1.5">
                              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 flex items-center justify-center mx-auto text-gray-400 group-hover:text-[#D4AF37] transition-all">
                                <LucideIcon name="Upload" size={16} />
                              </div>
                              <h5 className="text-xs font-bold text-white">Select Photo File</h5>
                              <p className="text-[10px] text-gray-400 leading-snug">
                                Supports PNG, JPG, or WEBP up to 15MB
                              </p>
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Web Image URL Input */
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Web Image URL</label>
                          <input
                            type="url"
                            value={mediaUrl}
                            onChange={(e) => setMediaUrl(e.target.value)}
                            placeholder="https://example.com/photo.jpg"
                            className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                            required
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#071B3A] font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <LucideIcon name="UploadCloud" size={14} />
                    <span>Post to Live Website</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Manage / Delete existing items */}
              <div className="glass-card p-5 rounded-2xl space-y-4 flex flex-col h-full max-h-[500px]">
                <h4 className="font-display font-bold text-base text-white flex items-center justify-between">
                  <span>Published Media Items</span>
                  <span className="text-xs text-[#D4AF37] font-bold">({galleryItems.length} items)</span>
                </h4>

                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {galleryItems.length === 0 ? (
                    <div className="text-center py-12 text-xs text-gray-400">
                      No media uploaded yet. Use the upload panel to post your first photo or video!
                    </div>
                  ) : (
                    galleryItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-3 p-2 bg-white/5 rounded-xl border border-white/5"
                      >
                        {/* Thumbnail */}
                        <div className="w-12 h-10 rounded-lg overflow-hidden border border-white/10 bg-black flex-shrink-0">
                          <img src={item.imageUrl} alt="thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>

                        {/* Title details */}
                        <div className="min-w-0 flex-1">
                          <h5 className="font-display font-bold text-xs text-white truncate">
                            {item.title}
                          </h5>
                          <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider block mt-0.5">
                            {item.category} {item.date && `• ${item.date}`}
                          </span>
                        </div>

                        {/* Delete button */}
                        <button
                          onClick={() => handleDeleteMedia(item.id)}
                          className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors cursor-pointer"
                          title="Remove from Gallery"
                        >
                          <LucideIcon name="Trash2" size={14} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-transparent px-6 py-4.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-300">
          <span>Active Session: 2026-27</span>
          <span>Designed with high-fidelity React for administrative persistence</span>
        </div>
      </motion.div>
    </div>
  );
}
