"use client";

import { motion } from "framer-motion";
import { X, ExternalLink, Calendar, Users, TrendingUp, Zap, Globe, Shield } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe className="w-20 h-20 text-white/30" />
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="absolute bottom-6 left-8 right-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-12rem)]">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <p className="text-gray-600 text-lg mb-8">{project.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl text-gray-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">High-performance architecture with 99.99% uptime</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Enterprise-grade security and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Scalable infrastructure to handle growth</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Real-time collaboration features</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Stats */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Project Details</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Duration</span>
                      </div>
                      <span className="font-bold text-gray-800">{project.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>Team Size</span>
                      </div>
                      <span className="font-bold text-gray-800">{project.teamSize}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <span>Impact</span>
                      </div>
                      <span className="font-bold text-green-600">{project.impact}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Shield className="w-4 h-4 mr-2" />
                        <span>Client Type</span>
                      </div>
                      <span className="font-bold text-gray-800 capitalize">
                        {project.clientType
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Demo */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Live Demo</h3>
                  <p className="text-gray-600 mb-6">Explore the live implementation of this project.</p>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold text-center hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center space-x-2">
                      <ExternalLink className="w-5 h-5" />
                      <span>Visit Live Site</span>
                    </div>
                  </motion.a>
                </div>

                {/* Project Scale */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Project Scale</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Complexity</span>
                        <span>High</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Team Size</span>
                        <span>Large</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Impact</span>
                        <span>Significant</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial (if available) */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Client Feedback</h3>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-2">
                      "Tunning delivered an exceptional solution that exceeded our expectations. Their team's expertise in both frontend and
                      backend technologies ensured a robust and scalable platform."
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-800">John Doe</div>
                        <div className="text-sm text-gray-600">CTO, {project.title.split(" ")[0]} Inc.</div>
                      </div>
                      <div className="flex text-yellow-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-600">Interested in a similar solution for your business?</div>
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Close
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-shadow">
                Start Similar Project
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
