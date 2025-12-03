"use client";

import { motion } from "framer-motion";
import { Code, Server, Cloud, Database, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function ExpertiseHero() {
  // 1. State to hold the particles (initially empty to match server)
  const [particles, setParticles] = useState([]);

  // 2. Generate random particles ONLY on the client side
  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      // Store random values in state
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  const techIcons = [
    { icon: Code, color: "from-blue-500 to-cyan-500", label: "Frontend" },
    { icon: Server, color: "from-purple-500 to-pink-500", label: "Backend" },
    { icon: Cloud, color: "from-green-500 to-emerald-500", label: "Cloud" },
    { icon: Database, color: "from-yellow-500 to-orange-500", label: "Database" },
    { icon: Shield, color: "from-red-500 to-pink-500", label: "Security" },
    { icon: Zap, color: "from-indigo-500 to-blue-500", label: "Performance" },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 3. Map over the state variable instead of generating inline */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.initialX}vw`,
              y: `${particle.initialY}vh`,
              scale: 0,
            }}
            animate={{
              x: [null, `${particle.targetX}vw`],
              y: [null, `${particle.targetY}vh`],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-12 pb-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1, repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">Technical Excellence Since 2018</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="block">Deep Technical</span>
              <span className="gradient-text">Expertise</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Mastering cutting-edge technologies to build scalable, high-performance solutions for enterprises and innovative startups.
            </motion.p>
          </motion.div>

          {/* Tech Icon Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techIcons.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group">
                <div className={`bg-gradient-to-br ${item.color} p-1 rounded-2xl shadow-lg`}>
                  <div className="bg-white rounded-xl p-8 text-center group-hover:bg-gray-50 transition-colors">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.label}</h3>
                    <p className="text-sm text-gray-600">{index * 15 + 25}+ Projects</p>

                    {/* Progress bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Expertise</span>
                        <span>{90 + index * 2}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${90 + index * 2}%` }}
                          transition={{ delay: 1 + index * 0.1, duration: 1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 1.3 }}
                  className="text-4xl md:text-5xl font-bold mb-2">
                  50+
                </motion.div>
                <div className="text-blue-100">Enterprise Projects</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 1.4 }}
                  className="text-4xl md:text-5xl font-bold mb-2">
                  25+
                </motion.div>
                <div className="text-blue-100">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 1.5 }}
                  className="text-4xl md:text-5xl font-bold mb-2">
                  99.9%
                </motion.div>
                <div className="text-blue-100">System Uptime</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 1.6 }}
                  className="text-4xl md:text-5xl font-bold mb-2">
                  24/7
                </motion.div>
                <div className="text-blue-100">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
