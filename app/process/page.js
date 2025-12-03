"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import AgileMethodology from "@/components/process/AgileMethodology";
import CollaborationTools from "@/components/process/CollaborationTools";
import SuccessMetrics from "@/components/process/SuccessMetrics";
import ProcessCTA from "@/components/process/ProcessCTA";

export default function ProcessPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 0.8, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const [activePhase, setActivePhase] = useState(0);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, 100]),
            y: useTransform(scrollYProgress, [0, 1], [0, 50]),
          }}
          className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-500" />
          </svg>
        </motion.div>
      </div>

      <motion.div style={{ opacity, scale }} className="relative">
        <ProcessHero />
        <ProcessTimeline activePhase={activePhase} setActivePhase={setActivePhase} />
        <AgileMethodology />
        <CollaborationTools />
        <SuccessMetrics />
        <ProcessCTA />
      </motion.div>

      {/* Floating Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center space-y-4">
          {["Hero", "Timeline", "Methodology", "Tools", "Metrics", "Start"].map((section, index) => (
            <motion.a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative group"
              whileHover={{ scale: 1.2 }}>
              <motion.div
                animate={{
                  scale: scrollYProgress.get() > index * 0.16 ? 1.3 : 1,
                  backgroundColor: scrollYProgress.get() > index * 0.16 ? "#4f46e5" : "#9ca3af",
                }}
                className="w-3 h-3 rounded-full transition-colors"
              />
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                  {section}
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
