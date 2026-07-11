import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Phone, 
  GraduationCap, 
  School, 
  BookOpen, 
  MapPin, 
  Send, 
  X, 
  CheckCircle2, 
  Sparkles, 
  UserCheck, 
  Award,
  HelpCircle
} from 'lucide-react';
import Logo from './Logo';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    targetClass: 'Class 10',
    fatherName: '',
    motherName: '',
    primaryPhone: '',
    alternatePhone: '',
    schoolName: '',
    previousScore: '',
    subjects: [] as string[],
    weakSubjects: '',
    customSubjects: '',
    residentialArea: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const classOptions = [
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11 (Science)',
    'Class 11 (Commerce)',
    'Class 12 (Science)',
    'Class 12 (Commerce)',
    'IIT-JEE / NEET Foundation',
    'Other / Specific Target'
  ];

  const subjectOptions = [
    'Mathematics',
    'Science (Physics / Chemistry / Biology)',
    'English Language & Literature',
    'Social Science',
    'Pure Physics (Class 11-12)',
    'Pure Chemistry (Class 11-12)',
    'Pure Mathematics (Class 11-12)',
    'Full Board Prep Crash Course'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectCheckbox = (subject: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.subjects.includes(subject);
      const updatedSubjects = alreadySelected
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject];
      return { ...prev, subjects: updatedSubjects };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!formData.studentName.trim()) {
      setErrorMsg('Please enter the student\'s full name.');
      return;
    }
    if (!formData.fatherName.trim()) {
      setErrorMsg('Please enter the father\'s name.');
      return;
    }
    if (!formData.primaryPhone.trim() || formData.primaryPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit primary mobile number.');
      return;
    }
    if (!formData.schoolName.trim()) {
      setErrorMsg('Please enter the school name and board.');
      return;
    }
    if (!formData.residentialArea.trim()) {
      setErrorMsg('Please enter your residential area in Gorakhpur.');
      return;
    }

    // Build the beautiful text message for WhatsApp
    const selectedSubjectsText = formData.subjects.length > 0 
      ? formData.subjects.join(', ') 
      : 'Not Specified';
    
    const formattedText = `*🔥 NEW ADMISSION INQUIRY - TOPPER'S CLASSES 🔥*
----------------------------------------
📝 *STUDENT PROFILE*
• *Name:* ${formData.studentName.trim()}
• *Class/Grade:* ${formData.targetClass}
• *Current School:* ${formData.schoolName.trim() || 'Not Disclosed'}
• *Prev Score/Percentage:* ${formData.previousScore.trim() || 'Not Mentioned'}

👨‍👩‍👦 *PARENT DETAILS*
• *Father's Name:* ${formData.fatherName.trim()}
• *Mother's Name:* ${formData.motherName.trim() || 'Not Disclosed'}

📞 *CONTACT INFORMATION*
• *Primary Mobile:* ${formData.primaryPhone.trim()}
• *Alternate Mobile:* ${formData.alternatePhone.trim() || 'None'}
• *Residential Area:* ${formData.residentialArea.trim()}

📚 *COURSE PREFERENCE*
• *Interested Subjects:* ${selectedSubjectsText}
• *Weak Subjects (कमजोर विषय):* ${formData.weakSubjects.trim() || 'None Mentioned'}
${formData.customSubjects.trim() ? `• *Other Subjects:* ${formData.customSubjects.trim()}` : ''}

💬 *MESSAGE / SPECIAL QUERIES*
"${formData.message.trim() || 'Seeking quality guidance & academic improvement!'}"
----------------------------------------
_Inquiry submitted via Topper's Classes Digital Portal._`;

    // Direct WhatsApp send URL
    const encodedText = encodeURIComponent(formattedText);
    const whatsappURL = `https://api.whatsapp.com/send?phone=918004655840&text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Set Submitted State
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      targetClass: 'Class 10',
      fatherName: '',
      motherName: '',
      primaryPhone: '',
      alternatePhone: '',
      schoolName: '',
      previousScore: '',
      subjects: [],
      weakSubjects: '',
      customSubjects: '',
      residentialArea: '',
      message: '',
    });
    setFormSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#071B3A]/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col bg-[#071B3A]/95 backdrop-blur-xl max-h-[92vh] md:max-h-[88vh] z-10"
          >
            {/* Modal Header */}
            <div className="bg-transparent px-6 py-4.5 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3 text-left">
                <div className="flex items-center justify-center">
                  <Logo showText={false} size="sm" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg md:text-xl text-white tracking-tight">
                    Admission Inquiry Form
                  </h3>
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold block mt-0.5">
                    Session 2026-27 • Direct to Director
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body with Custom Form / Success screen */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8 bg-slate-950/40 custom-scrollbar text-left">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Explanatory Callout */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-3.5 items-start">
                    <Sparkles className="text-[#D4AF37] shrink-0 mt-0.5" size={18} />
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-white">Direct WhatsApp Submission Mode</p>
                      <p className="text-[11px] text-gray-300 leading-relaxed">
                        Filling this detailed form compiles a structured academic application for your child. Upon clicking "Submit Detail via WhatsApp", the full layout will load into your WhatsApp messenger to be sent instantly to our official admissions line <span className="text-[#D4AF37] font-mono">+91 8004655840</span>.
                      </p>
                    </div>
                  </div>

                  {errorMsg && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl font-medium"
                    >
                      ⚠️ {errorMsg}
                    </motion.div>
                  )}

                  {/* Section 1: Candidate Profile */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <User className="text-[#D4AF37]" size={16} />
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                        1. Candidate Profile (छात्र की जानकारी)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Student Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-300">
                          Student's Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="studentName"
                            required
                            value={formData.studentName}
                            onChange={handleInputChange}
                            placeholder="Enter student's name"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                          />
                        </div>
                      </div>

                      {/* Class */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-300">
                          Applying For Class <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="targetClass"
                          value={formData.targetClass}
                          onChange={handleInputChange}
                          className="w-full bg-[#071B3A] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        >
                          {classOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Parent Profile */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <UserCheck className="text-[#D4AF37]" size={16} />
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                        2. Parent Profile (अभिभावक की जानकारी)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Father Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-300">
                          Father's Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fatherName"
                          required
                          value={formData.fatherName}
                          onChange={handleInputChange}
                          placeholder="Father's full name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                        />
                      </div>

                      {/* Mother Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-300">
                          Mother's Name
                        </label>
                        <input
                          type="text"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleInputChange}
                          placeholder="Mother's name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Contact & Location */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <Phone className="text-[#D4AF37]" size={16} />
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                        3. Contact Details & Location (संपर्क सूत्र एवं पता)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Primary Phone */}
                      <div className="space-y-2 md:col-span-1">
                        <label className="block text-xs font-semibold text-gray-300">
                          Primary Mobile (WhatsApp) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="primaryPhone"
                          required
                          maxLength={10}
                          value={formData.primaryPhone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9876543210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all font-mono"
                        />
                      </div>

                      {/* Alternate Phone */}
                      <div className="space-y-2 md:col-span-1">
                        <label className="block text-xs font-semibold text-gray-300">
                          Alternate Mobile (Optional)
                        </label>
                        <input
                          type="tel"
                          name="alternatePhone"
                          maxLength={10}
                          value={formData.alternatePhone}
                          onChange={handleInputChange}
                          placeholder="e.g. 8004655840"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all font-mono"
                        />
                      </div>

                      {/* Residential Area */}
                      <div className="space-y-2 md:col-span-1">
                        <label className="block text-xs font-semibold text-gray-300">
                          Residential Area in GKP <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="residentialArea"
                            required
                            value={formData.residentialArea}
                            onChange={handleInputChange}
                            placeholder="e.g. Rustampur / Betiahata / Civil Lines"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Academic Background */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <School className="text-[#D4AF37]" size={16} />
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                        4. Academic History (शैक्षणिक इतिहास)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* School Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-300">
                          Previous / Current School Name & Board (स्कूल का नाम और बोर्ड) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="schoolName"
                          required
                          value={formData.schoolName}
                          onChange={handleInputChange}
                          placeholder="e.g. Central Academy, GKP (CBSE)"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                        />
                      </div>

                      {/* Previous Score */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-300">
                          Previous Class Score / Percentage / Grade (पिछली कक्षा के अंक / प्रतिशत)
                        </label>
                        <input
                          type="text"
                          name="previousScore"
                          value={formData.previousScore}
                          onChange={handleInputChange}
                          placeholder="e.g. 88% or 9.2 CGPA"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Stream Preferences */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <BookOpen className="text-[#D4AF37]" size={16} />
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                        5. Select Interested Subjects (पसंदीदा विषय)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {subjectOptions.map((subj) => {
                        const isChecked = formData.subjects.includes(subj);
                        return (
                          <div 
                            key={subj}
                            onClick={() => handleSubjectCheckbox(subj)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                              isChecked 
                                ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37]' 
                                : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}} // Handled by div onClick
                              className="accent-[#D4AF37] pointer-events-none"
                            />
                            <span className="text-xs font-medium">{subj}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Weak Subjects Input Field */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-semibold text-gray-300">
                        Weak Subjects / Areas needing Improvement (कमजोर विषय / कठिन लगने वाले टॉपिक्स)
                      </label>
                      <input
                        type="text"
                        name="weakSubjects"
                        value={formData.weakSubjects}
                        onChange={handleInputChange}
                        placeholder="e.g. Maths, Physics Numericals, English Grammar, Chemistry"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-semibold text-gray-300">
                        Any other specific subjects or requirements?
                      </label>
                      <input
                        type="text"
                        name="customSubjects"
                        value={formData.customSubjects}
                        onChange={handleInputChange}
                        placeholder="e.g. NTSE foundation, Physics only, Commerce accounts"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  {/* Section 6: Specific Message */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gray-300">
                      Additional Comments / Career Goal / Message for Director
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write any questions, weakness areas of student, or schedule choices..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                    />
                  </div>

                  {/* Form Submission Action Area */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-gray-400 font-sans">
                      * Required fields must be completed. Standard data/SMS rates may apply for WhatsApp.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-[#D4AF37] hover:to-[#D4AF37] text-[#071B3A] hover:scale-[1.02] transition-all font-display font-black text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/10 cursor-pointer"
                    >
                      <span>Submit Detail via WhatsApp</span>
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              ) : (
                /* Beautiful Success State Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 md:py-16 text-center max-w-lg mx-auto space-y-6"
                >
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto border border-[#D4AF37]/35 shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      Inquiry Compiled Successfully!
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      We have prepared and loaded your structured details into WhatsApp. If WhatsApp did not open automatically, you can send the inquiry text to <span className="text-[#D4AF37] font-mono font-bold">+91 8004655840</span>.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-left space-y-3.5">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <Award className="text-[#D4AF37]" size={15} />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Next Immediate Steps:</span>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-2.5 list-disc pl-4 leading-relaxed">
                      <li>
                        <strong className="text-white">Verify WhatsApp:</strong> Tap send in your WhatsApp chat so Director Uday Pratap Singh receives the detailed application list.
                      </li>
                      <li>
                        <strong className="text-white">Primary Call Scheduling:</strong> Our counselor will call you back on <strong className="text-[#D4AF37] font-mono">{formData.primaryPhone}</strong> within 12 hours.
                      </li>
                      <li>
                        <strong className="text-white">Campus Walkthrough:</strong> You will be scheduled for a 1-on-1 counseling walkthrough at our Rustampur branch (near Gorakhpur).
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-all cursor-pointer"
                    >
                      Fill Another Form
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#071B3A] font-bold text-xs transition-all cursor-pointer"
                    >
                      Back to Home
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-[#071B3A] px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left shrink-0">
              <span className="text-[11px] text-gray-400 font-sans flex items-center gap-1.5">
                <HelpCircle size={13} className="text-[#D4AF37]" />
                <span>Admission Desk operates 8:00 AM to 8:00 PM IST daily.</span>
              </span>

              <div className="flex items-center gap-2 text-xs text-white font-semibold">
                <span>Call Admissions Support:</span>
                <a href="tel:8004655840" className="text-[#D4AF37] hover:underline font-mono font-bold">
                  +91 8004655840
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
