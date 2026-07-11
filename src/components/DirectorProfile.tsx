import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Sparkles, Trophy, Star, BookOpen, GraduationCap } from 'lucide-react';
import Logo from './Logo';
import { directorPortraitBase64 } from '../assets/director_portrait_base64';
import { awardDharmendraBase64 } from '../assets/award_dharmendra_base64';
import { awardYogiBase64 } from '../assets/award_yogi_base64';

export default function DirectorProfile() {
  // Let's define the three award and portrait images.
  // We reference local paths so that if the user puts their files there, they load.
  // We also use reliable high-quality academic illustration fallbacks or direct URLs if available.
  const directorImage = 'https://toppersclasses.in/wp-content/uploads/2026/06/expert-fac2.jpeg'; // fallback
  const awardDharmendraImage = 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80'; // fallback
  const awardYogiImage = 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80'; // fallback

  return (
    <section id="director-profile" className="py-20 md:py-28 bg-[#041024] relative overflow-hidden border-t border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 glow-orb -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] rounded-full bg-blue-500/5 glow-orb -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="pill">
            Leadership & Excellence
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Meet Our Director & <span className="text-[#D4AF37]">Gold Medalist</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Led by an elite, state-honored visionary dedicated to transforming the educational landscape of Gorakhpur with conceptual brilliance and premium mentorship.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Main Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Key Details */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            {/* Main Director Portrait Frame */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] to-amber-500 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square md:aspect-[4/5] lg:aspect-square bg-[#071B3A] shadow-2xl">
                {/* Visual Image */}
                <img 
                  src={directorPortraitBase64}
                  onError={(e) => {
                    // Fallback to a styled illustration box or Unsplash portrait if the specific upload is missing
                    e.currentTarget.src = directorImage;
                  }}
                  alt="Director Uday Pratap Singh" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Gold Medalist Pill */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-[#D4AF37] text-[#071B3A] font-display font-black text-xs px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                  <Trophy size={14} className="animate-pulse" />
                  <span>Gold Medalist</span>
                </div>

                {/* Info Overlay Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Director & Founder</span>
                  <h3 className="font-display font-black text-xl md:text-2xl text-white mt-1">Uday Pratap Singh</h3>
                  <p className="text-xs text-gray-300 mt-1 font-sans leading-relaxed">
                    Distinguished academic scholar and dynamic educational leader.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick credentials grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl border-white/10 text-left space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-[#D4AF37] uppercase tracking-wider">Academic Merit</h4>
                  <p className="text-sm font-black text-white mt-0.5">Gold Medalist</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border-white/10 text-left space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-emerald-400 uppercase tracking-wider">Honors Awarded</h4>
                  <p className="text-sm font-black text-white mt-0.5">State Recognition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Biography & Award Showcase */}
          <div className="lg:col-span-7 space-y-12 text-left">
            
            {/* The Article Body */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Star size={18} fill="currentColor" />
                <span className="font-display font-bold text-sm uppercase tracking-widest">A Legacy of Academic Triumph</span>
              </div>
              
              <h3 className="font-display font-extrabold text-2xl md:text-3.5xl text-white leading-snug">
                Nurturing Leaders with the Vision of a Gold Medalist Mentor
              </h3>

              <div className="space-y-4 font-sans text-sm md:text-base text-gray-300 leading-relaxed">
                <p>
                  At <strong className="text-white">Topper's Classes</strong>, education is driven by a legacy of absolute academic excellence. Our Founder and Director, <strong className="text-[#D4AF37]">Mr. Uday Pratap Singh</strong>, is a premier scholar and <strong className="text-white">Gold Medalist</strong> whose pedagogical brilliance has earned high-profile recognitions at both state and national leadership levels.
                </p>
                <p>
                  Mr. Singh has been officially recognized and honored by <strong className="text-white">Shri Dharmendra Pradhan</strong> (Hon'ble Union Minister of Education, Government of India), <strong className="text-white">Shri Yogi Adityanath</strong> (Hon'ble Chief Minister of Uttar Pradesh), and <strong className="text-white">Shri Ram Nath Kovind</strong> (Former President of India). These prestigious awards serve as a testament to his unmatched dedication, rigorous intellectual standards, and innovative approach to student growth.
                </p>
                <p className="border-l-2 border-[#D4AF37] pl-4 italic text-[#F4E8C1] py-1 bg-white/[0.02] rounded-r-xl">
                  "Our goal is not just to prepare students to pass examinations, but to cultivate a robust foundation of logical thinking and confidence that launches them as future national leaders." 
                  <span className="block text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">— Director Uday Pratap Singh</span>
                </p>
                <p>
                  By establishing Topper's Classes in Rustampur, Gorakhpur, Mr. Singh has brought these elite, national-grade teaching standards straight to the young minds of this city. Every batch is direct under his visual framework, ensuring world-class concepts, personalized care, and constant motivational mentoring.
                </p>
              </div>
            </div>

            {/* Awards Gallery Showcase */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2">
                <Trophy className="text-[#D4AF37]" size={18} />
                <h4 className="font-display font-black text-sm uppercase tracking-wider text-white">
                  Prestigious Honors & Felicitation Moments
                </h4>
              </div>

              {/* Award Cards Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Award 1: Dharmendra Pradhan */}
                <div className="glass-panel rounded-2xl overflow-hidden border-white/10 hover:border-[#D4AF37]/30 transition-all group flex flex-col bg-[#071B3A]/60">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-white/10">
                    <img 
                      src={awardDharmendraBase64}
                      onError={(e) => {
                        e.currentTarget.src = awardDharmendraImage;
                      }}
                      alt="Award from Education Minister Dharmendra Pradhan" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#071B3A]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 font-display font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Union Ministry Honor
                    </div>
                  </div>
                  <div className="p-4 space-y-1.5 flex-grow">
                    <h5 className="font-display font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors">
                      Honored by Education Minister
                    </h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Receiving a prestigious merit certificate from <strong className="text-white">Shri Dharmendra Pradhan</strong>, Union Education Minister of India, in the presence of Chief Minister Yogi Adityanath.
                    </p>
                  </div>
                </div>

                {/* Award 2: Yogi Adityanath */}
                <div className="glass-panel rounded-2xl overflow-hidden border-white/10 hover:border-[#D4AF37]/30 transition-all group flex flex-col bg-[#071B3A]/60">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                    <img 
                      src={awardYogiBase64}
                      onError={(e) => {
                        e.currentTarget.src = awardYogiImage;
                      }}
                      alt="Award from Chief Minister Yogi Adityanath" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#071B3A]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 font-display font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      State Felicitation
                    </div>
                  </div>
                  <div className="p-4 space-y-1.5 flex-grow">
                    <h5 className="font-display font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors">
                      Felicitation by CM Yogi Adityanath
                    </h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Honored with a framed accolade of educational excellence by Hon'ble Chief Minister <strong className="text-white">Shri Yogi Adityanath</strong> and Former President of India <strong className="text-white">Shri Ram Nath Kovind</strong>.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Core Values / Impact List */}
            <div className="pt-4 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={12} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Concept-First Pedagogy</p>
                  <p className="text-[11px] text-gray-400">Moving away from standard rote memorization to active, deep mental clarity.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles size={12} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Personalized Mentorship</p>
                  <p className="text-[11px] text-gray-400">Direct intellectual monitoring and encouragement for students in small batches.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
