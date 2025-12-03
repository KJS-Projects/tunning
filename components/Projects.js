"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise E-commerce Platform",
    description: "Scalable e-commerce solution handling 10k+ daily transactions",
    link: "https://example-ecommerce.com",
    technologies: ["Next.js", ".NET Core", "PostgreSQL", "AWS"],
    category: "enterprise",
    live: true,
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Comprehensive hospital management with telemedicine features",
    link: "https://example-healthcare.com",
    technologies: ["React", ".NET Core API", "MongoDB", "Azure"],
    category: "enterprise",
    live: true,
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    description: "Real-time financial data visualization platform",
    link: "https://example-fintech.com",
    technologies: ["Next.js", "Node.js", "Redis", "Docker"],
    category: "enterprise",
    live: true,
  },
  {
    id: 4,
    title: "EdTech Learning Platform",
    description: "Interactive online learning with AI recommendations",
    link: "https://example-edtech.com",
    technologies: ["React", "Drupal", "Python", "AWS"],
    category: "medium",
    live: true,
  },
  {
    id: 5,
    title: "Startup MVP Platform",
    description: "Rapid prototyping platform for startups",
    link: "https://example-mvp.com",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    category: "small",
    live: true,
  },
  {
    id: 6,
    title: "Real Estate Portal",
    description: "Property listing and virtual tour platform",
    link: "https://example-realestate.com",
    technologies: ["React", ".NET Core", "PostgreSQL", "Mapbox"],
    category: "medium",
    live: true,
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "enterprise", label: "Enterprise Scale" },
  { id: "medium", label: "Medium Business" },
  { id: "small", label: "Startups & Small" },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful projects across different scales - from enterprise solutions to innovative startup platforms.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Project Header */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                          project.category === "enterprise"
                            ? "bg-blue-100 text-blue-700"
                            : project.category === "medium"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}>
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    </div>
                    {project.live && (
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-3 h-3 bg-green-500 rounded-full"
                      />
                    )}
                  </div>

                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Link Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/link inline-flex items-center justify-between w-full bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 p-4 rounded-xl transition-all">
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-800">Visit Live Site</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" />
                  </motion.a>
                </div>

                {/* Animated Gradient Border */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to start your project?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a large enterprise or a growing startup, we have the expertise to bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center space-x-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all">
            <span>Discuss Your Project</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
