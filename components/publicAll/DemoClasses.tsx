'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, PlaySquare } from "lucide-react";

const demoVideos = [
   { id: 4, title: "পাকস্থলীর গঠন ও কাজ", youtubeId: "Pf-DBOu2s3k", thumbnail: "/class4.png", channelName: "Roots Of Biology" },
  { id: 1, title: "রুই মাছের ডিসেকশন", youtubeId: "spVcXwGeyLc", thumbnail: "/youtobevideo1.jpeg", channelName: "Roots Of Biology" },
  { id: 2, title: "রুই মাছের ধমনী তন্ত্র", youtubeId: "Pf-DBOu2s3k", thumbnail: "/youtobepic2.jpeg", channelName: "Roots Of Biology" },
  { id: 3, title: "রক্ত ও সংবহনতন্ত্র", youtubeId: "spVcXwGeyLc", thumbnail: "/class3.png", channelName: "Roots Of Biology" },
 
];

export default function DemoClasses() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Updated Heading Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            <PlaySquare className="w-4 h-4" />
            ভিডিও লেকচার
          </div>

          {/* Title (Light Green Color Applied) */}
          <h2 className="text-4xl md:text-6xl font-black text-emerald-600 dark:text-emerald-400 mb-4">
            আমাদের ডেমো ক্লাস
          </h2>

          {/* Underline */}
          <div className="flex justify-center">
            <div className="w-40 h-1.5 bg-emerald-500 rounded-full"></div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {demoVideos.map((video, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/20 dark:border-white/5">
                  
                  {activeVideo === video.id ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full h-full cursor-pointer" onClick={() => setActiveVideo(video.id)}>
                      <img src={video.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="thumbnail" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform group-hover:scale-110">
                          <Play className="w-8 h-8 text-white fill-current translate-x-0.5" />
                        </div>
                      </div>
                      
                      {/* Card Content Overlay */}
                      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <h3 className="text-white font-bold text-lg sm:text-xl">{video.title}</h3>
                        <p className="text-emerald-400 text-sm">{video.channelName}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}