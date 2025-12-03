"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Globe, Shield, Zap, Database, Cloud, Cpu, Server } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: <Code className="w-8 h-8" />,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8" />,
    items: [".NET Core", ".NET Core API", "Node.js", "Python"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "CMS",
    icon: <Globe className="w-8 h-8" />,
    items: ["Drupal", "WordPress", "Headless CMS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8" />,
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Performance",
    icon: <Zap className="w-8 h-8" />,
    items: ["CDN Optimization", "Caching Strategies", "Load Balancing"],
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We master cutting-edge technologies to deliver robust, scalable solutions that drive business growth and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tech.color} mb-6`}>
                <div className="text-white">{tech.icon}</div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">{tech.category}</h3>

              <ul className="space-y-3">
                {tech.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} mr-3`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Animated gradient border */}
              <div className="mt-6 pt-6 border-t border-gray-100 relative">
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Projects completed</span>
                  <span className="font-bold text-lg gradient-text">25+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Enterprise Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
