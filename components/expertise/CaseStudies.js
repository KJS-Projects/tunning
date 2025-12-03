"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap, DollarSign, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "Fortune 500 Retailer",
    challenge: "Legacy system unable to handle peak season traffic (100k+ concurrent users)",
    solution: "Built scalable microservices architecture with Next.js frontend and .NET Core backend",
    results: [
      { metric: "300%", label: "Increase in peak traffic capacity", icon: Users },
      { metric: "40%", label: "Reduction in page load time", icon: Zap },
      { metric: "$2.5M", label: "Annual cost savings", icon: DollarSign },
    ],
    technologies: ["Next.js", ".NET Core", "Redis", "AWS", "Kubernetes"],
    duration: "8 months",
    team: "15 engineers",
  },
  {
    id: 2,
    client: "Healthcare Provider",
    challenge: "Manual patient management system causing 65% longer wait times",
    solution: "Integrated healthcare platform with telemedicine and AI scheduling",
    results: [
      { metric: "65%", label: "Reduction in patient wait time", icon: TrendingUp },
      { metric: "90%", label: "Increase in patient satisfaction", icon: Users },
      { metric: "50%", label: "Faster appointment scheduling", icon: Zap },
    ],
    technologies: ["React", ".NET Core API", "MongoDB", "Azure", "SignalR"],
    duration: "6 months",
    team: "12 engineers",
  },
  {
    id: 3,
    client: "FinTech Startup",
    challenge: "Need to launch MVP in 3 months to secure Series A funding",
    solution: "Rapid MVP development with focus on core features and scalability",
    results: [
      { metric: "$5M", label: "Series A funding secured", icon: DollarSign },
      { metric: "10k", label: "Users in first month", icon: Users },
      { metric: "99.9%", label: "System uptime", icon: Zap },
    ],
    technologies: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    duration: "3 months",
    team: "5 engineers",
  },
];

export default function CaseStudies() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impactful <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world solutions delivering measurable business results for our clients.
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mb-6">
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center hover:shadow-lg transition-shadow">
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Case Studies Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-8 pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] snap-start">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                {/* Client Header */}
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
                    <span className="text-sm font-medium text-blue-700">Case Study #{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{study.client}</h3>
                  <div className="flex items-center text-gray-600 space-x-6">
                    <div>
                      <div className="text-sm">Duration</div>
                      <div className="font-bold">{study.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm">Team Size</div>
                      <div className="font-bold">{study.team}</div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">The Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Our Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-700 mb-4">Measurable Results</h4>
                  <div className="space-y-4">
                    {study.results.map((result, i) => {
                      const Icon = result.icon;

                      return (
                        <motion.div
                          key={i}
                          whileHover={{ x: 10 }}
                          className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center mr-4">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold gradient-text mb-1">{result.metric}</div>
                            <div className="text-sm text-gray-600">{result.label}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-700 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-shadow">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
              onClick={() => {
                if (scrollRef.current) {
                  const scrollAmount = scrollRef.current.clientWidth * index;
                  scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
