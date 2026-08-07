'use client';

import React from "react";
import useSound from "use-sound";
import { toast } from "sonner";

// Premium Custom SVG Characters (Peekaboo effect)
const UniqueCharacters = [
  // ১. কিউট নিনজা বিড়াল
  <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-2xl animate-[float_3s_ease-in-out_infinite]" key="cat">
    <defs>
      <linearGradient id="catGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    <path d="M20 90 C 20 40, 80 40, 80 90 Z" fill="url(#catGrad)" />
    <path d="M20 55 L 10 20 L 45 45 Z M80 55 L 90 20 L 55 45 Z" fill="#ea580c" />
    <circle cx="35" cy="65" r="6" fill="#1e293b" />
    <circle cx="65" cy="65" r="6" fill="#1e293b" />
    <circle cx="37" cy="63" r="2" fill="white" />
    <circle cx="67" cy="63" r="2" fill="white" />
    <path d="M45 75 Q 50 80 55 75" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>,
  // ২. কিউট টেডি বিয়ার
  <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-2xl animate-[float_3.5s_ease-in-out_infinite]" key="bear">
    <defs>
      <linearGradient id="bearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    <circle cx="25" cy="40" r="16" fill="#78350f" />
    <circle cx="75" cy="40" r="16" fill="#78350f" />
    <circle cx="50" cy="75" r="38" fill="url(#bearGrad)" />
    <circle cx="50" cy="80" r="20" fill="#fef3c7" />
    <circle cx="38" cy="65" r="5" fill="#1e293b" />
    <circle cx="62" cy="65" r="5" fill="#1e293b" />
    <path d="M45 83 Q 50 88 55 83" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>,
  // ৩. রোবট বাডি
  <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-2xl animate-[float_2.5s_ease-in-out_infinite]" key="robot">
    <defs>
      <linearGradient id="botGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="20" y="40" width="60" height="55" rx="15" fill="url(#botGrad)" />
    <rect x="47" y="10" width="6" height="30" fill="#94a3b8" />
    <circle cx="50" cy="10" r="8" fill="#fbbf24" className="animate-pulse" />
    <rect x="30" y="60" width="40" height="18" rx="6" fill="#0f172a" />
    <circle cx="40" cy="69" r="4" fill="#22d3ee" className="animate-pulse" />
    <circle cx="60" cy="69" r="4" fill="#22d3ee" className="animate-pulse" />
  </svg>,
  // ৪. লিটল মনস্টার
  <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-2xl animate-[float_3s_ease-in-out_infinite]" key="monster">
    <defs>
      <linearGradient id="monGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path d="M15 95 C 15 30, 85 30, 85 95 Z" fill="url(#monGrad)" />
    <circle cx="50" cy="60" r="20" fill="white" />
    <circle cx="50" cy="60" r="9" fill="#1e293b" />
    <circle cx="53" cy="57" r="3" fill="white" />
    <path d="M35 85 Q 50 92 65 85" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>,
  // ৫. ম্যাজিক খরগোশ
  <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-2xl animate-[float_3.2s_ease-in-out_infinite]" key="bunny">
    <defs>
      <linearGradient id="bunnyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#fb7185" />
      </linearGradient>
    </defs>
    <ellipse cx="35" cy="35" rx="12" ry="35" fill="url(#bunnyGrad)" transform="rotate(-15 35 35)" />
    <ellipse cx="65" cy="35" rx="12" ry="35" fill="url(#bunnyGrad)" transform="rotate(15 65 35)" />
    <circle cx="50" cy="75" r="32" fill="url(#bunnyGrad)" />
    <circle cx="40" cy="70" r="5" fill="#1e293b" />
    <circle cx="60" cy="70" r="5" fill="#1e293b" />
    <circle cx="50" cy="78" r="4" fill="#fda4af" />
  </svg>,
  // ৬. কসমিক এলিয়েন
  <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-2xl animate-[float_2.8s_ease-in-out_infinite]" key="alien">
    <defs>
      <linearGradient id="alienGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#84cc16" />
      </linearGradient>
    </defs>
    <path d="M50 95 C 5 95, 15 35, 50 35 C 85 35, 95 95, 50 95 Z" fill="url(#alienGrad)" />
    <circle cx="36" cy="60" r="4" fill="white" />
    <circle cx="64" cy="60" r="4" fill="white" />
    <path d="M30 35 Q 20 15 10 25" stroke="#22c55e" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>
];

const categories = [
  { id: 0, type: "HSC", year: "27", icon: "🏆", badge: "২০২৬ ভর্তি চলছে", colorClass: "bg-gradient-to-b from-[#0B1D3A] to-[#043D5C]", glow: "shadow-[0_15px_30px_rgba(10,135,158,0.25)]" },
  { id: 1, type: "HSC", year: "28", icon: "🎯", badge: "২০২৬ ভর্তি চলছে", colorClass: "bg-gradient-to-b from-[#1E0B3A] to-[#431B6D]", glow: "shadow-[0_15px_30px_rgba(157,54,179,0.25)]" },
  { id: 2, type: "SSC", year: "27", icon: "🎒", badge: "২০২৬ ভর্তি চলছে", colorClass: "bg-gradient-to-b from-[#3A180B] to-[#6b2c05]", glow: "shadow-[0_15px_30px_rgba(217,108,24,0.25)]" },
  { id: 3, type: "SSC", year: "28", icon: "📜", badge: "২০২৬ ভর্তি চলছে", colorClass: "bg-gradient-to-b from-[#3A0B1A] to-[#6b102e]", glow: "shadow-[0_15px_30px_rgba(229,50,101,0.25)]" },
  { id: 4, type: "SSC", year: "FRB", icon: "⚡", badge: "২০২৬ ভর্তি চলছে", colorClass: "bg-gradient-to-b from-[#290B3A] to-[#500f59]", glow: "shadow-[0_15px_30px_rgba(207,38,121,0.25)]" },
  { id: 5, type: "CLASS", year: "9", icon: "📚", badge: "২০২৬ ভর্তি চলছে", colorClass: "bg-gradient-to-b from-[#0B3A23] to-[#095431]", glow: "shadow-[0_15px_30px_rgba(21,176,99,0.25)]" },
];

export default function CategoryCards() {
  const soundUrl = "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"; 
  const [playHoverSound] = useSound(soundUrl, { volume: 0.3 });

  const handleCardClick = (type: string, year: string) => {
    playHoverSound();
    toast.success(`অভিনন্দন! আপনি ${type} ${year} ব্যাচে যুক্ত হতে যাচ্ছেন।`, {
      description: "আপনার ভবিষ্যতের জন্য শুভকামনা!",
      duration: 3000,
    });
  };

  return (
    <section className="relative w-full py-28 bg-transparent font-sans selection:bg-teal-500 selection:text-white overflow-hidden">
      
      {/* Background Decorative Premium Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Premium Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 mb-8 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md shadow-[0_0_25px_rgba(20,184,166,0.25)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest uppercase">Premium Education</span>
          </div>
          <h1 className="text-[44px] md:text-[80px] font-black tracking-tighter mb-6 uppercase leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 drop-shadow-lg">
              Roots of Biology
            </span>
          </h1>
          <div className="space-y-3 relative">
            <h2 className="text-2xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              খুলনায় সবচেয়ে সমৃদ্ধ বায়োলজি,
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-slate-500 dark:text-slate-400">
              লজিক ও বেসিক কনসেপ্ট-এর জগতে স্বাগতম!
            </p>
          </div>
        </div>
        
        {/* Grid Layout - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-28 mt-12 px-2 md:px-0">
          {categories.map((item, index) => (
            <div key={item.id} className="relative group w-full flex flex-col items-center mt-6">
              
              {/* === PEEKABOO CARTOON (Top Animation) === */}
              <div className="absolute bottom-[95%] left-1/2 -translate-x-1/2 w-32 h-[120px] overflow-hidden pointer-events-none z-0">
                <div className="absolute bottom-0 left-0 w-full h-[120px] flex items-end justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                   {UniqueCharacters[index]}
                </div>
              </div>

              {/* === MAIN PREMIUM 3D CARD === */}
              <div 
                onClick={() => handleCardClick(item.type, item.year)}
                className={`relative w-full h-[200px] cursor-pointer rounded-[28px] z-10 transition-all duration-500 group-hover:-translate-y-2.5 group-hover:scale-[1.04] ${item.glow}`}
              >
                {/* Premium Glossy Inner Block */}
                <div className={`relative w-full h-full rounded-[28px] overflow-hidden flex flex-col items-center justify-start pt-5 ${item.colorClass} border border-white/20 border-b-black/50 shadow-inner`}>
                  
                  {/* Subtle Diagonal Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 mix-blend-overlay group-hover:opacity-100 opacity-50 transition-opacity duration-700 pointer-events-none" />

                  {/* === TEXT AT THE TOP (বড় করা হয়েছে) === */}
                  <div className="relative z-20 text-center flex flex-col items-center">
                    <span className="text-[15px] sm:text-[16px] font-black tracking-[0.3em] uppercase text-white/90 mb-0.5 drop-shadow-md">
                      {item.type}
                    </span>
                    <h3 className="text-7xl sm:text-8xl font-black drop-shadow-[0_4px_14px_rgba(0,0,0,0.7)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70">
                      {item.year}
                    </h3>
                  </div>

                  {/* === GIANT ICON AT THE BOTTOM === */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="block text-[75px] drop-shadow-2xl animate-[float-icon-bottom_3.5s_ease-in-out_infinite]">
                      {item.icon}
                    </span>
                  </div>

                </div>
              </div>

              {/* === DETACHED, BLINKING RED LAMP (Below the card) === */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30">
                <button
                  onClick={(e) => { e.stopPropagation(); handleCardClick(item.type, item.year); }}
                  className="relative flex items-center justify-center cursor-pointer group/badge transition-transform duration-300 hover:scale-105"
                >
                  {/* Subtle Blinking Red Light Background */}
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-[12px] animate-[subtle-red-blink_2s_ease-in-out_infinite]"></div>
                  
                  {/* Dark Premium Pill with Red Border */}
                  <div className="relative bg-[#1a0505] border border-red-500/80 text-red-100 rounded-full font-bold text-xs sm:text-[13px] tracking-widest uppercase shadow-[inset_0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2.5 px-6 py-2.5 whitespace-nowrap">
                    {/* Small Pulsing Red Dot */}
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
                    </span>
                    {item.badge}
                  </div>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
      
      {/* Custom Keyframes for Bottom Icon Float and Blinking Light */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-icon-bottom {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(-8px) scale(1.05) rotate(5deg); }
        }
        @keyframes subtle-red-blink {
          0%, 100% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 0.95; transform: scale(1.12); }
        }
      `}} />
    </section>
  );
}