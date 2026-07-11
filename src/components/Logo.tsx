import React, { useState } from 'react';
import topperLogo from '../assets/topper_class_logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  // Responsive dimension mapping
  const sizes = {
    sm: { box: 'w-10 h-10', text: 'text-lg', sub: 'text-[9px]' },
    md: { box: 'w-12 h-12', text: 'text-xl', sub: 'text-[10px]' },
    lg: { box: 'w-16 h-16', text: 'text-2xl', sub: 'text-[12px]' },
    xl: { box: 'w-24 h-24', text: 'text-3xl', sub: 'text-[14px]' }
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High Fidelity Vector SVG Logo of Topper's Classes */}
      <div className={`shrink-0 ${currentSize.box} filter drop-shadow-lg flex items-center justify-center`}>
        {!imgError ? (
          <img 
            src={topperLogo} 
            onError={() => setImgError(true)} 
            alt="Topper's Classes Logo" 
            className="w-full h-full object-contain rounded-full bg-[#071B3A]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* DEFINITIONS FOR GRADIENTS AND PATHS */}
          <defs>
            {/* Deep Navy/Black Circular Backdrop Gradient */}
            <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
              <stop offset="0%" stopColor="#0B1D37" />
              <stop offset="75%" stopColor="#030A14" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            {/* Shield Background Radial Gradient */}
            <radialGradient id="shieldBg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#0E336C" />
              <stop offset="100%" stopColor="#030C1C" />
            </radialGradient>

            {/* 3D Ribbon Radial Gradient (Metallic Blue) */}
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#041228" />
              <stop offset="15%" stopColor="#0D3678" />
              <stop offset="50%" stopColor="#1C5ABF" />
              <stop offset="85%" stopColor="#0D3678" />
              <stop offset="100%" stopColor="#041228" />
            </linearGradient>

            {/* Ultra-Premium Multi-Stop Metallic Gold Gradient */}
            <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="20%" stopColor="#D4A729" />
              <stop offset="40%" stopColor="#FFF9D2" />
              <stop offset="60%" stopColor="#AA7E15" />
              <stop offset="80%" stopColor="#F7E28E" />
              <stop offset="100%" stopColor="#825C02" />
            </linearGradient>

            {/* Light Facet Gold for 3D Star */}
            <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9D2" />
              <stop offset="100%" stopColor="#D4A729" />
            </linearGradient>

            {/* Shaded/Dark Facet Gold for 3D Star */}
            <linearGradient id="goldDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B38415" />
              <stop offset="100%" stopColor="#634500" />
            </linearGradient>

            {/* Curved Path for TOPPER'S Text Alignment */}
            <path id="textPathToppers" d="M 108,318 C 170,285 330,285 392,318" />
          </defs>

          {/* MAIN CIRCULAR BASE */}
          <circle cx="250" cy="250" r="235" fill="url(#bgGrad)" stroke="url(#goldMetallic)" strokeWidth="6" />
          {/* Inner Thin Ring */}
          <circle cx="250" cy="250" r="226" stroke="url(#goldMetallic)" strokeWidth="2" strokeOpacity="0.5" />

          {/* GLOWING RAYS (Sunburst) behind the Star */}
          <g opacity="0.18">
            <line x1="250" y1="160" x2="250" y2="80" stroke="url(#goldMetallic)" strokeWidth="2" />
            <line x1="250" y1="160" x2="330" y2="160" stroke="url(#goldMetallic)" strokeWidth="2" />
            <line x1="250" y1="160" x2="170" y2="160" stroke="url(#goldMetallic)" strokeWidth="2" />
            <line x1="250" y1="160" x2="306" y2="104" stroke="url(#goldMetallic)" strokeWidth="2" />
            <line x1="250" y1="160" x2="194" y2="104" stroke="url(#goldMetallic)" strokeWidth="2" />
            <line x1="250" y1="160" x2="306" y2="216" stroke="url(#goldMetallic)" strokeWidth="2" />
            <line x1="250" y1="160" x2="194" y2="216" stroke="url(#goldMetallic)" strokeWidth="2" />
            <line x1="250" y1="160" x2="210" y2="120" stroke="url(#goldMetallic)" strokeWidth="1.5" />
            <line x1="250" y1="160" x2="290" y2="120" stroke="url(#goldMetallic)" strokeWidth="1.5" />
            <line x1="250" y1="160" x2="210" y2="200" stroke="url(#goldMetallic)" strokeWidth="1.5" />
            <line x1="250" y1="160" x2="290" y2="200" stroke="url(#goldMetallic)" strokeWidth="1.5" />
          </g>

          {/* HERALDIC SHIELD */}
          {/* Outer Shield with Gold Border */}
          <path d="M 250,90 C 320,90 380,110 395,130 C 395,240 375,340 250,420 C 125,340 105,240 105,130 C 120,110 180,90 250,90 Z" fill="url(#shieldBg)" stroke="url(#goldMetallic)" strokeWidth="6" strokeLinejoin="round" />
          {/* Inner Dashed Border inside Shield */}
          <path d="M 250,102 C 308,102 363,120 377,137 C 377,227 358,322 250,398 C 142,322 123,227 123,137 C 137,120 192,102 250,102 Z" stroke="url(#goldMetallic)" strokeWidth="1.5" strokeDasharray="6,4" fill="none" strokeOpacity="0.7" />

          {/* GOLD CROWN resting on Top Peak of Shield */}
          <g id="shieldCrown">
            {/* Crown Base Band */}
            <path d="M 215,84 C 225,80 275,80 285,84 L 285,88 C 275,84 225,84 215,88 Z" fill="url(#goldMetallic)" />
            {/* Crown Peaks */}
            <path d="M 215,84 L 220,60 L 235,71 L 250,46 L 265,71 L 280,60 L 285,84 Z" fill="url(#goldMetallic)" stroke="#825C02" strokeWidth="0.5" />
            {/* Jewels/Spheres on Crown Tips */}
            <circle cx="250" cy="45" r="4" fill="url(#goldLight)" stroke="#825C02" strokeWidth="0.5" />
            <circle cx="220" cy="59" r="3" fill="url(#goldLight)" stroke="#825C02" strokeWidth="0.5" />
            <circle cx="280" cy="59" r="3" fill="url(#goldLight)" stroke="#825C02" strokeWidth="0.5" />
            <circle cx="235" cy="70" r="2.5" fill="url(#goldLight)" stroke="#825C02" strokeWidth="0.5" />
            <circle cx="265" cy="70" r="2.5" fill="url(#goldLight)" stroke="#825C02" strokeWidth="0.5" />
          </g>

          {/* LAUREL WREATH (Detailed Golden Leaves on both sides) */}
          <g id="laurelWreath">
            {/* Left branch stem */}
            <path d="M 148,270 C 130,225 135,170 160,132" stroke="url(#goldMetallic)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
            {/* Right branch stem */}
            <path d="M 352,270 C 370,225 365,170 340,132" stroke="url(#goldMetallic)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
            
            {/* Left Leaves pairs */}
            <path d="M 148,260 C 138,258 133,248 141,244 C 149,240 152,250 148,260 Z" fill="url(#goldMetallic)" />
            <path d="M 142,238 C 132,236 128,225 136,220 C 144,215 147,226 142,238 Z" fill="url(#goldMetallic)" />
            <path d="M 139,212 C 129,209 125,198 134,194 C 143,190 145,201 139,212 Z" fill="url(#goldMetallic)" />
            <path d="M 140,186 C 130,182 127,171 136,168 C 145,165 147,176 140,186 Z" fill="url(#goldMetallic)" />
            <path d="M 146,161 C 137,156 135,145 143,142 C 151,139 153,150 146,161 Z" fill="url(#goldMetallic)" />
            <path d="M 156,139 C 149,132 148,121 156,120 C 164,119 164,130 156,139 Z" fill="url(#goldMetallic)" />

            {/* Right Leaves pairs */}
            <path d="M 352,260 C 362,258 367,248 359,244 C 351,240 348,250 352,260 Z" fill="url(#goldMetallic)" />
            <path d="M 358,238 C 368,236 372,225 364,220 C 356,215 353,226 358,238 Z" fill="url(#goldMetallic)" />
            <path d="M 361,212 C 371,209 375,198 366,194 C 357,190 355,201 361,212 Z" fill="url(#goldMetallic)" />
            <path d="M 360,186 C 370,182 373,171 364,168 C 355,165 353,176 360,186 Z" fill="url(#goldMetallic)" />
            <path d="M 354,161 C 363,156 365,145 357,142 C 349,139 347,150 354,161 Z" fill="url(#goldMetallic)" />
            <path d="M 344,139 C 351,132 352,121 344,120 C 336,119 336,130 344,139 Z" fill="url(#goldMetallic)" />
          </g>

          {/* 3D FACETED GOLD STAR (Center Upper) */}
          <g id="goldStar3D">
            {/* Facets from Center Point (250, 160) */}
            {/* Top Point (Light/Dark) */}
            <polygon points="250,112 250,160 238,143" fill="url(#goldLight)" />
            <polygon points="250,112 250,160 262,143" fill="url(#goldDark)" />
            {/* Right-Top Point (Light/Dark) */}
            <polygon points="296,145 250,160 262,143" fill="url(#goldLight)" />
            <polygon points="296,145 250,160 269,174" fill="url(#goldDark)" />
            {/* Right-Bottom Point (Light/Dark) */}
            <polygon points="278,199 250,160 269,174" fill="url(#goldLight)" />
            <polygon points="278,199 250,160 250,178" fill="url(#goldDark)" />
            {/* Left-Bottom Point (Light/Dark) */}
            <polygon points="222,199 250,160 250,178" fill="url(#goldLight)" />
            <polygon points="222,199 250,160 231,174" fill="url(#goldDark)" />
            {/* Left-Top Point (Light/Dark) */}
            <polygon points="204,145 250,160 231,174" fill="url(#goldLight)" />
            <polygon points="204,145 250,160 238,143" fill="url(#goldDark)" />
          </g>

          {/* OPEN BOOK with Pen Nib (Center Lower) */}
          <g id="openBook">
            {/* Book Gold Shadow / Back Plate */}
            <path d="M 131,212 L 131,268 C 158,253 208,253 248,293 L 252,293 C 292,253 342,253 369,268 L 369,212 Z" fill="#030C1C" stroke="url(#goldMetallic)" strokeWidth="3" strokeLinejoin="round" />
            
            {/* Left Page (White Curves) */}
            <path d="M 250,290 C 210,250 160,250 135,265 L 135,210 C 160,195 210,195 250,235 Z" fill="#FFFFFF" stroke="#051226" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Right Page (White Curves) */}
            <path d="M 250,290 C 290,250 340,250 365,265 L 365,210 C 340,195 290,195 250,235 Z" fill="#FFFFFF" stroke="#051226" strokeWidth="2.5" strokeLinejoin="round" />
            
            {/* Book Inner Page Line Textures */}
            <path d="M160,222 C180,217 210,222 230,233 M160,237 C180,232 210,237 230,248 M160,252 C180,247 210,252 230,263" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M340,222 C320,217 290,222 270,233 M340,237 C320,232 290,237 270,248 M340,252 C320,247 290,252 270,263" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />

            {/* Gold Fountain Pen Nib pointing up in the crease */}
            <path d="M 250,216 L 241,248 L 244,285 L 256,285 L 259,248 Z" fill="url(#goldMetallic)" stroke="#825C02" strokeWidth="0.5" />
            {/* Nib Middle Slit Line */}
            <line x1="250" y1="216" x2="250" y2="260" stroke="#825C02" strokeWidth="1" />
            {/* Nib Ink Vent Hole */}
            <circle cx="250" cy="260" r="2" fill="#030C1C" />
          </g>

          {/* 3D RIBBONS SYSTEM */}
          <g id="ribbons">
            {/* Behind Ribbons Folds / Tails (Left & Right) */}
            {/* Left Fish Tail */}
            <path d="M 75,345 L 115,325 L 115,355 L 75,375 L 55,360 Z" fill="url(#ribbonGrad)" stroke="url(#goldMetallic)" strokeWidth="1.5" strokeLinejoin="round" />
            {/* Left fold transition (under-shadow) */}
            <path d="M 115,325 L 130,312 L 130,348 L 115,355 Z" fill="#040D1E" stroke="url(#goldMetallic)" strokeWidth="1.5" />

            {/* Right Fish Tail */}
            <path d="M 425,345 L 385,325 L 385,355 L 425,375 L 445,360 Z" fill="url(#ribbonGrad)" stroke="url(#goldMetallic)" strokeWidth="1.5" strokeLinejoin="round" />
            {/* Right fold transition (under-shadow) */}
            <path d="M 385,325 L 370,312 L 370,348 L 385,355 Z" fill="#040D1E" stroke="url(#goldMetallic)" strokeWidth="1.5" />

            {/* Main Front Curved Ribbon */}
            <path d="M 115,310 C 180,285 320,285 385,310 L 375,355 C 310,330 190,330 125,355 Z" fill="url(#ribbonGrad)" stroke="url(#goldMetallic)" strokeWidth="3" strokeLinejoin="round" />
          </g>

          {/* CURVED "TOPPER'S" TEXT ON RIBBON */}
          <text fontFamily="'Georgia', serif" fontWeight="900" fontSize="32" letterSpacing="4">
            <textPath href="#textPathToppers" startOffset="50%" textAnchor="middle" fill="url(#goldMetallic)">
              TOPPER'S
            </textPath>
          </text>

          {/* "CLASSES" SUB-BANNER & DECORATIVE STARS */}
          <g id="classesBanner">
            {/* Two Golden Side Bars flanking CLASSES */}
            <line x1="140" y1="388" x2="185" y2="388" stroke="url(#goldMetallic)" strokeWidth="2.5" />
            <line x1="315" y1="388" x2="360" y2="388" stroke="url(#goldMetallic)" strokeWidth="2.5" />

            {/* CLASSES Text */}
            <text x="250" y="395" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="19" letterSpacing="4" textAnchor="middle">CLASSES</text>

            {/* Three 5-Pointed Golden Stars underneath */}
            {/* Center Star */}
            <polygon points="250,412 253,418 260,418 255,422 257,428 250,424 243,428 245,422 240,418 247,418" fill="url(#goldMetallic)" />
            {/* Left Star */}
            <polygon points="230,414 233,420 240,420 235,424 237,430 230,426 223,430 225,424 220,420 227,420" fill="url(#goldMetallic)" />
            {/* Right Star */}
            <polygon points="270,414 273,420 280,420 275,424 277,430 270,426 263,430 265,424 260,420 267,420" fill="url(#goldMetallic)" />
          </g>
        </svg>
        )}
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col select-none">
          <h1 className={`font-display font-bold ${currentSize.text} text-[#071B3A] dark:text-white tracking-tight leading-none`}>
            Topper's <span className="text-[#D4AF37]">Classes</span>
          </h1>
          <span className={`font-sans font-semibold uppercase tracking-widest ${currentSize.sub} text-[#D4AF37] mt-1 leading-none`}>
            Gorakhpur
          </span>
        </div>
      )}
    </div>
  );
}
