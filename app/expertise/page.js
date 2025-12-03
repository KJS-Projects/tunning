"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExpertiseHero from "@/components/expertise/ExpertiseHero";
import TechnologyStacks from "@/components/expertise/TechnologyStacks";
import ServiceTiers from "@/components/expertise/ServiceTiers";
import CaseStudies from "@/components/expertise/CaseStudies";
import Consultation from "@/components/expertise/Consultation";

export default function ExpertisePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0]) }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.2, 0.7], [0.2, 0]) }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div style={{ opacity, scale }}>
        <ExpertiseHero />
        <TechnologyStacks activeTab={activeTab} setActiveTab={setActiveTab} />
        <ServiceTiers />
        <CaseStudies />
        <Consultation />
      </motion.div>

      {/* Floating Tech Badges */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="space-y-4">
          {["Next.js", ".NET Core", "AWS", "Drupal"].map((tech) => (
            <motion.div key={tech} whileHover={{ x: -10, scale: 1.1 }} className="group relative">
              <div className="w-18 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-100 flex items-center justify-center cursor-pointer">
                <span className="font-bold text-gray-700 text-xs">{tech}</span>
              </div>
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                  Expert in {tech}
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <motion.div className="flex flex-col items-center space-y-4">
          {["Hero", "Tech", "Services", "Cases", "Contact"].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => {
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative group">
              <motion.div
                animate={{ scale: scrollYProgress.get() > index * 0.2 ? 1.2 : 1 }}
                className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"
              />
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                  {section}
                  <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-900" />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
