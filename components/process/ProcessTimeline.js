"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, TestTube, Rocket, Users, FileText, Zap, Shield, Cloud, MessageSquare, CheckCircle } from "lucide-react";

const processPhases = [
  {
    phase: 1,
    title: "Discovery & Planning",
    description: "Deep dive into your business goals, technical requirements, and success metrics.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    duration: "1-2 weeks",
    deliverables: [
      "Project Requirements Document",
      "Technical Architecture Plan",
      "Project Timeline & Milestones",
      "Success Metrics Definition",
      "Risk Assessment Report",
    ],
    activities: ["Stakeholder interviews", "Market research", "Competitor analysis", "Technical feasibility study", "Budget planning"],
  },
  {
    phase: 2,
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces and seamless user experiences.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    duration: "2-3 weeks",
    deliverables: ["Wireframes & Prototypes", "User Flow Diagrams", "Design System", "Interactive Mockups", "Style Guide"],
    activities: ["User research", "Information architecture", "Visual design", "Usability testing", "Design iteration"],
  },
  {
    phase: 3,
    title: "Development",
    description: "Agile development with continuous integration and code reviews.",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    duration: "4-12 weeks",
    deliverables: ["Production-ready Code", "API Documentation", "Database Schema", "Integration Modules", "Code Review Reports"],
    activities: ["Sprint planning", "Daily standups", "Pair programming", "Code reviews", "Continuous integration"],
  },
  {
    phase: 4,
    title: "Testing & QA",
    description: "Comprehensive testing to ensure quality, performance, and security.",
    icon: TestTube,
    color: "from-yellow-500 to-orange-500",
    duration: "1-2 weeks",
    deliverables: ["Test Plans & Cases", "Bug Reports", "Performance Metrics", "Security Audit Report", "User Acceptance Testing"],
    activities: ["Unit testing", "Integration testing", "Performance testing", "Security testing", "User acceptance testing"],
  },
  {
    phase: 5,
    title: "Deployment",
    description: "Smooth deployment with monitoring and performance optimization.",
    icon: Rocket,
    color: "from-red-500 to-pink-500",
    duration: "1 week",
    deliverables: [
      "Deployed Application",
      "Infrastructure Setup",
      "Monitoring Dashboard",
      "Deployment Documentation",
      "Backup & Recovery Plan",
    ],
    activities: ["Environment setup", "Database migration", "Load balancing", "Performance tuning", "Go-live preparation"],
  },
  {
    phase: 6,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and optimization post-launch.",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    duration: "Ongoing",
    deliverables: ["Support SLAs", "Performance Reports", "Security Updates", "Feature Enhancements", "Training Materials"],
    activities: ["24/7 monitoring", "Regular updates", "Performance optimization", "Security patches", "User training"],
  },
];

export default function ProcessTimeline({ activePhase, setActivePhase }) {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Development Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured, transparent process that ensures quality delivery at every stage.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processPhases.map((phase) => {
              const Icon = phase.icon;
              const isActive = activePhase === phase.phase - 1;

              return (
                <motion.button
                  key={phase.phase}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActivePhase(phase.phase - 1)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all ${
                    isActive ? `bg-gradient-to-r ${phase.color} text-white shadow-lg` : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}>
                  <Icon className="w-5 h-5" />
                  <span>
                    Phase {phase.phase}: {phase.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Phase Details */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Phase Overview */}
              <div>
                <div className="flex items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-linear-to-r ${processPhases[activePhase].color} mr-6`}>
                    {/* <processPhases[activePhase].icon className="w-10 h-10 text-white" /> */}
                  </div>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-3xl font-bold text-gray-800">{processPhases[activePhase].title}</h3>
                      <span className="px-4 py-1 bg-gray-100 rounded-full text-sm font-medium">{processPhases[activePhase].duration}</span>
                    </div>
                    <p className="text-gray-600 text-lg">{processPhases[activePhase].description}</p>
                  </div>
                </div>

                {/* Activities */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                    Key Activities
                  </h4>
                  <div className="space-y-3">
                    {processPhases[activePhase].activities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center mr-4">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Deliverables */}
              <div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-green-500" />
                    Key Deliverables
                  </h4>
                  <div className="space-y-3">
                    {processPhases[activePhase].deliverables.map((deliverable, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 flex items-center justify-center mr-4">
                          <Shield className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{deliverable}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Phase Stats */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Phase Metrics</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Completion</span>
                        <span>{activePhase === 5 ? "Ongoing" : "100%"}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: activePhase === 5 ? "80%" : "100%" }}
                          transition={{ duration: 1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${processPhases[activePhase].color}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Quality Score</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 w-11/12" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Client Involvement</span>
                        <span>High</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-10/12" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-100">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium ${
                  activePhase === 0 ? "opacity-50 cursor-not-allowed" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}>
                <span>← Previous Phase</span>
              </motion.button>

              <div className="flex items-center space-x-2">
                {processPhases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhase(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activePhase === index ? `bg-gradient-to-r ${processPhases[index].color}` : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePhase(Math.min(processPhases.length - 1, activePhase + 1))}
                disabled={activePhase === processPhases.length - 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium ${
                  activePhase === processPhases.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                }`}>
                <span>Next Phase →</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Process Visualization */}
          <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {processPhases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;

                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Content Card */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} mb-8 md:mb-0`}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${isActive ? "border-blue-500" : "border-gray-100"}`}>
                        <div className="flex items-start mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${phase.color} mr-4`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-800">
                              Phase {phase.phase}: {phase.title}
                            </h4>
                            <p className="text-gray-600 mt-1">{phase.duration}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{phase.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setActivePhase(index)}
                        className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer ${
                          isActive ? `bg-gradient-to-r ${phase.color} shadow-lg` : "bg-white border-2 border-gray-200"
                        }`}>
                        {isActive ? (
                          <Icon className="w-8 h-8 text-white" />
                        ) : (
                          <span className="text-xl font-bold text-gray-700">{phase.phase}</span>
                        )}
                      </motion.div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
