"use client";

import { motion } from "framer-motion";
import { RefreshCw, Users, Target, TrendingUp, Shield, Zap, BarChart, MessageSquare } from "lucide-react";

const agilePrinciples = [
  {
    icon: RefreshCw,
    title: "Iterative Development",
    description: "Continuous delivery in 2-week sprints with regular feedback loops",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Client Collaboration",
    description: "Daily standups, sprint reviews, and transparent communication",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Goal-Oriented Sprints",
    description: "Each sprint delivers specific, measurable business value",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Retrospectives after each sprint to optimize processes",
    color: "from-yellow-500 to-orange-500",
  },
];

const sprintCycle = [
  {
    phase: "Planning",
    duration: "1 day",
    activities: ["Backlog refinement", "Sprint goal setting", "Task estimation"],
  },
  {
    phase: "Development",
    duration: "9 days",
    activities: ["Daily standups", "Pair programming", "Code reviews"],
  },
  {
    phase: "Review",
    duration: "1 day",
    activities: ["Demo to stakeholders", "Feedback collection", "Acceptance criteria"],
  },
  {
    phase: "Retrospective",
    duration: "1 day",
    activities: ["Process review", "Improvement planning", "Action items"],
  },
];

export default function AgileMethodology() {
  return (
    <section id="methodology" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Agile</span> Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow Agile principles to deliver value quickly, adapt to changes, and ensure continuous improvement throughout your
            project.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Agile Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {agilePrinciples.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-1 shadow-lg">
                    <div className="bg-white rounded-xl p-8 text-center group-hover:bg-gray-50 transition-colors h-full">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${principle.color} mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sprint Cycle Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our 2-Week Sprint Cycle</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each sprint delivers working software and incorporates client feedback for continuous improvement.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Circle */}
              <div className="relative w-64 h-64 mx-auto mb-12">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="2" />

                  {/* Sprint progress */}
                  {sprintCycle.map((_, index) => (
                    <motion.circle
                      key={index}
                      initial={{ strokeDashoffset: 283 }}
                      animate={{ strokeDashoffset: 283 - (283 * (index + 1)) / sprintCycle.length }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"][index]}
                      strokeWidth="3"
                      strokeDasharray="283"
                      strokeDashoffset="283"
                      transform="rotate(-90 50 50)"
                      strokeLinecap="round"
                    />
                  ))}
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">2 Weeks</div>
                    <div className="text-gray-600">Sprint Duration</div>
                  </div>
                </div>
              </div>

              {/* Sprint Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sprintCycle.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 rounded-full ${
                          index === 0
                            ? "bg-blue-100 text-blue-600"
                            : index === 1
                            ? "bg-purple-100 text-purple-600"
                            : index === 2
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        } flex items-center justify-center mr-4`}>
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{phase.phase}</h4>
                        <p className="text-sm text-gray-600">{phase.duration}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div
                            className={`w-2 h-2 rounded-full mr-3 ${
                              index === 0 ? "bg-blue-500" : index === 1 ? "bg-purple-500" : index === 2 ? "bg-green-500" : "bg-yellow-500"
                            }`}
                          />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits of Agile */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Benefits of Our Agile Approach</h3>
                <p className="text-blue-100">Faster time-to-market with reduced risks and increased transparency.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-yellow-300 mr-4" />
                    <h4 className="text-xl font-bold">Faster Delivery</h4>
                  </div>
                  <p className="text-blue-100">
                    Working features delivered every 2 weeks, allowing for early ROI and continuous value delivery.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-green-300 mr-4" />
                    <h4 className="text-xl font-bold">Risk Mitigation</h4>
                  </div>
                  <p className="text-blue-100">Regular feedback loops and incremental delivery minimize project risks and scope creep.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <BarChart className="w-8 h-8 text-blue-300 mr-4" />
                    <h4 className="text-xl font-bold">Better ROI</h4>
                  </div>
                  <p className="text-blue-100">
                    Prioritize high-value features first and adapt based on market feedback for maximum impact.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-8 h-8 text-pink-300 mr-4" />
                    <h4 className="text-xl font-bold">Transparency</h4>
                  </div>
                  <p className="text-blue-100">
                    Complete visibility into progress, challenges, and decisions through regular demos and reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
