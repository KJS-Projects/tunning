"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, Palette, Code, TestTube, Rocket, Users } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discovery",
    description: "Understanding your business goals and technical requirements",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design",
    description: "Creating intuitive UI/UX designs and system architecture",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development",
    description: "Agile development with modern technologies and best practices",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: "Testing",
    description: "Comprehensive QA and performance testing",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Deployment",
    description: "Smooth deployment with CI/CD pipelines",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Support",
    description: "Ongoing maintenance and 24/7 support",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery, from concept to deployment and beyond.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} mb-8 md:mb-0`}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} mb-4`}>
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Step Indicator */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
