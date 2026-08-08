'use client'

import React, { useState } from "react";
import Image from "next/image";
import sir1 from "@/public/air2.jpg";
import sir2 from "@/public/sir2.jpg";
import sir3 from "@/public/sirrr3.jpg";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, GraduationCap, Phone, Quote, Award, Sparkles, ArrowRight } from "lucide-react";

export const teachersData = [

  {
    id: 2,
    name: "ড. মো. রফিকুল ইসলাম",
    title: "Senior Botany Expert & Researcher",
    qualification: "Ph.D. in Botany | M.Sc. (DU)",
    experience: "১২+ বছরের শিক্ষকতা ও গবেষণা অভিজ্ঞতা",
    expertise: ["উদ্ভিদবিজ্ঞান (Botany)", "প্ল্যান্ট ফিজিওলজি", "ট্যাক্সোনমি ও অ্যানাটমি"],
    phone: "01811223344",
    image: sir1,
    badge: "Expert Faculty",
    quote: "শিক্ষার শেকড় শক্ত হলে সাফল্য আসবেই",
    message: "উদ্ভিদবিজ্ঞান প্রকৃতির এক অপার রহস্য। প্রতিটি অধ্যায় গভীরভাবে অনুধাবন করলে মেডিকেল বা বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় শতভাগ কমন পাওয়া সম্ভব। জটিল ও কঠিন টপিকগুলোকে সহজ গ্রাফ ও চার্ট দিয়ে বুঝিয়ে দেওয়াটাই আমার কাজ। নিয়মিত প্র্যাকটিস চালিয়ে যাও, সাফল্য তোমার জন্যই অপেক্ষা করছে।"
  },
    {
    id: 1,
    name: "সরফরাজ ইসলাম",
    title: "Founder & Lead Instructor",
    qualification: "B.Sc. (Zoology) | M.Sc. (Fisheries)",
    experience: "১০+ বছরের শিক্ষকতা অভিজ্ঞতা",
    expertise: ["প্রাণীবিজ্ঞান (Zoology)", "মেডিকেল অ্যাডমিশন স্ট্র্যাটেজি", "কনসেপচুয়াল বায়োলজি"],
    phone: "01922555575",
    image: sir2,
    badge: "Chief Mentor",
    quote: "তোমাদের আস্থা আমাদের কাছে আমানত স্বরূপ",
    message: "প্রিয় শিক্ষার্থীরা, জীববিজ্ঞান শুধু একটি বিষয় নয়—এটি জীবনের ভাষা। মুখস্থ নয়, বোঝার চেষ্টা করলেই বায়োলজি সহজ ও আনন্দদায়ক হয়ে উঠবে। মেডিকেল ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় হাজার হাজার শিক্ষার্থীকে সফলতার দিকনির্দেশনা দেওয়া আমাদের মূল লক্ষ্য। নিজের ওপর বিশ্বাস রাখো, তুমি পারবে।"
  },
  {
    id: 3,
    name: "তারেক আহমেদ",
    title: "Genetics & Molecular Physiology Expert",
    qualification: "B.Sc. & M.Sc. in Biochemistry (DU)",
    experience: "৮+ বছরের শিক্ষাদান অভিজ্ঞতা",
    expertise: ["জেনেটিক্স ও বিবর্তন", "হিউম্যান ফিজিওলজি", "বায়োকেমিস্ট্রি"],
    phone: "01755667788",
    image: sir3, // ৩য় স্যারের ছবি এখানে পরিবর্তন করে নিও
    badge: "Specialist",
    quote: "মেডিকেল ভর্তি প্রস্তুতি হোক গোছানো ও নিখুঁত",
    message: "জেনেটিক্স বা ফিজিওলজির জটিল টপিকগুলোকে সহজ করে মনে রাখার শর্টকাট টেকনিক ও লজিক্যাল এপ্রোচ আয়ত্ত করতে হবে। আমাদের গাইডলাইন ও প্রিমিয়াম লেকচারগুলো অনুসরণ করলে বায়োলজি নিয়ে কোনো ভয় থাকবে না, বরং এটি হবে তোমার সবচেয়ে বেশি নম্বর তোলার হাতিয়ার।"
  },
];
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function TeacherProfile() {
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(null);
  const selectedTeacher = teachersData.find((t) => t.id === selectedTeacherId);

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 bg-transparent">
      
      {/* Section Header */}
      <div className="mb-16 text-center px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 text-xs sm:text-sm font-bold tracking-wide mb-4 shadow-sm backdrop-blur-md uppercase"
        >
          <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Elite Mentors</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          শিক্ষার্থীদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">আস্থার প্রতীক</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600 dark:text-emerald-100/70 max-w-xl text-base sm:text-lg"
        >
          দেশের সেরা মেন্টরদের সরাসরি দিকনির্দেশনায় তোমার মেডিকেল ও এইচএসসি প্রস্তুতি হোক শতভাগ নিখুঁত।
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-1.5 w-32 rounded-full bg-gradient-to-r from-emerald-600 to-teal-400 mt-5 shadow-[0_2px_12px_rgba(16,185,129,0.5)] origin-center"
        />
      </div>

      {/* Teachers Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {teachersData.map((teacher) => (
            <motion.div
              key={teacher.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative flex flex-col rounded-[2.5rem] bg-white/95 backdrop-blur-xl dark:bg-[#051610]/90 shadow-[0_15px_40px_rgba(4,120,87,0.06)] dark:shadow-[0_15px_40px_rgba(4,120,87,0.15)] transition-all duration-500 border border-emerald-100/80 dark:border-emerald-900/50 overflow-hidden ring-1 ring-black/5 dark:ring-white/5 hover:ring-emerald-400/60 dark:hover:ring-emerald-600/60"
            >
              {/* Image Frame */}
              <div className="relative h-[360px] w-full overflow-hidden bg-emerald-100 dark:bg-emerald-950">
                <Image
                  src={teacher.image} 
                  alt={teacher.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110 filter saturate-[0.95] group-hover:saturate-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#020604] via-[#020604]/40 to-transparent opacity-95"></div>

                <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-bold tracking-wide text-white border border-white/20 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  {teacher.badge}
                </span>

                <div className="absolute bottom-0 left-0 p-7 text-left w-full transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {teacher.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald-300 flex items-center gap-1.5 drop-shadow">
                    <GraduationCap className="w-4 h-4 shrink-0 text-emerald-400" /> 
                    {teacher.qualification}
                  </p>
                  <div className="mt-2.5 inline-block px-3 py-1 rounded-full bg-emerald-500/30 backdrop-blur-md border border-emerald-400/40">
                    <p className="text-[11px] font-bold tracking-wider text-emerald-100 uppercase">
                      {teacher.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Bottom / Action Area */}
              <div className="p-7 text-center relative flex-1 flex flex-col justify-between bg-white dark:bg-[#051610]">
                <Quote className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 text-emerald-100 dark:text-emerald-900/30 -z-0" />
                <p className="mb-6 text-sm font-medium italic text-slate-600 dark:text-slate-300 px-2 relative z-10 leading-relaxed">
                  "{teacher.quote}"
                </p>
                
                <button
                  onClick={() => setSelectedTeacherId(teacher.id)}
                  className="relative overflow-hidden group/btn inline-flex items-center justify-center gap-2.5 w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-600/40 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                >
                  <span className="text-sm tracking-wide">View Full Profile</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Elite Modal for Details */}
      <AnimatePresence>
        {selectedTeacher && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTeacherId(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-all"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[560px] rounded-[2.5rem] bg-white p-7 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.5)] dark:bg-[#071d15] border border-emerald-100 dark:border-emerald-800/60 overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedTeacherId(null)}
                className="absolute right-5 top-5 rounded-full bg-emerald-50 p-2.5 text-emerald-600 transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:rotate-90 dark:bg-emerald-900/40 dark:text-emerald-400 dark:hover:bg-red-950/40 dark:hover:text-red-400 z-10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center text-center mt-2 relative z-10">
                <div className="relative mb-6 h-36 w-36 sm:h-40 sm:w-40 rounded-full border-[5px] border-white dark:border-[#071d15] shadow-[0_0_30px_rgba(16,185,129,0.3)] overflow-hidden bg-emerald-100 ring-4 ring-emerald-500/20">
                  <Image
                    src={selectedTeacher.image} 
                    alt={selectedTeacher.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-emerald-50 mb-2 tracking-tight">
                  {selectedTeacher.name}
                </h3>
                
                <div className="flex flex-col items-center gap-2.5 mt-1 text-sm font-semibold text-slate-600 dark:text-emerald-200/90 w-full">
                  <span className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/80 px-4.5 py-1.5 rounded-full text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 shadow-sm">
                    <GraduationCap className="h-4 w-4 text-emerald-500 shrink-0" />
                    {selectedTeacher.qualification}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wide">{selectedTeacher.title}</span>
                  <span className="inline-flex items-center gap-2 mt-1 bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2 rounded-full text-white shadow-md shadow-emerald-600/25 text-xs sm:text-sm font-bold">
                    <Phone className="h-4 w-4" />
                    Mobile: {selectedTeacher.phone}
                  </span>
                </div>
              </div>

              <div className="mt-8 relative z-10 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-inner dark:bg-emerald-950/30 dark:border-emerald-800/60 backdrop-blur-sm">
                <Quote className="absolute -top-3 -left-2 w-8 h-8 text-emerald-300 dark:text-emerald-800 bg-white dark:bg-[#071d15] rounded-full p-1 shadow-sm" />
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-emerald-100/90 text-justify font-medium">
                  {selectedTeacher.message}
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}