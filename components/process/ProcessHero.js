"use client";

import { motion } from "framer-motion";
import { Workflow, Target, Users, Clock, CheckCircle, BarChart } from "lucide-react";

export default function ProcessHero() {
  const principles = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Every step aligns with your business objectives",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Transparent communication and partnership",
    },
    {
      icon: Clock,
      title: "Time-Efficient",
      description: "Agile sprints with regular deliverables",
    },
    {
      icon: CheckCircle,
      title: "Quality-First",
      description: "Rigorous testing and code reviews",
    },
    {
      icon: BarChart,
      title: "Data-Driven",
      description: "Metrics and analytics guided decisions",
    },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              rotate: 0,
            }}
            animate={{
              x: [null, Math.random() * 100 + "vw"],
              y: [null, Math.random() * 100 + "vh"],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-64 h-64 border border-blue-200/20 rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-20 pb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-8">
              <Workflow className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Proven Development Process</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="block">Our Proven</span>
              <span className="gradient-text">Process</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              A transparent, collaborative approach that delivers exceptional results while minimizing risks and maximizing efficiency.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold gradient-text mb-2">40%</div>
                <div className="text-gray-600">Faster Development</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Principles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-1 rounded-2xl shadow-lg">
                    <div className="bg-white rounded-xl p-6 text-center group-hover:bg-gray-50 transition-colors h-full">
                      <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{principle.title}</h3>
                      <p className="text-sm text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Process Flow Visualization */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-20 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            </div>

            <div className="relative flex justify-between items-center">
              {[
                { label: "Discover", color: "from-blue-500 to-cyan-500" },
                { label: "Design", color: "from-purple-500 to-pink-500" },
                { label: "Develop", color: "from-green-500 to-emerald-500" },
                { label: "Test", color: "from-yellow-500 to-orange-500" },
                { label: "Deploy", color: "from-red-500 to-pink-500" },
                { label: "Support", color: "from-indigo-500 to-blue-500" },
              ].map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                  className="relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-700">{step.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
