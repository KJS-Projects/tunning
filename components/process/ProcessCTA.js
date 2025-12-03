"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, FileText, Users, CheckCircle, ArrowRight, Shield, Zap } from "lucide-react";

export default function ProcessCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    message: "",
  });

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Platform",
    "Enterprise Software",
    "API Development",
    "System Migration",
    "Other",
  ];

  const timelines = ["Immediate (1-2 weeks)", "Soon (1 month)", "Planning phase (2-3 months)", "Future (3+ months)"];

  const benefits = [
    {
      icon: Shield,
      title: "Risk-Free Start",
      description: "30-day money-back guarantee on all projects",
    },
    {
      icon: Zap,
      title: "Quick Start",
      description: "Project kickoff within 48 hours of agreement",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Assigned project manager and technical lead",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Process form submitted:", formData);
  };

  return (
    <section id="start" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Start</span> Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how our proven process can help you achieve your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Process?</h3>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;

                      return (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4 flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">{benefit.title}</h4>
                            <p className="text-gray-600">{benefit.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Next Steps</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Initial Consultation</div>
                        <div className="text-sm text-gray-600">Free 30-minute discovery call</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Proposal & Planning</div>
                        <div className="text-sm text-gray-600">Detailed project roadmap</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Kickoff & Development</div>
                        <div className="text-sm text-gray-600">Project starts within 48 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Consultation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Schedule Free Consultation</h3>
                  <p className="text-gray-300">Get started with a no-obligation discovery call</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Type *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.projectType === type
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                        }`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Timeline *</label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none">
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                    placeholder="Tell us about your project goals, challenges, and requirements..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-3">
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="text-center text-gray-400 text-sm">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>No commitment required • 30-minute discovery call</span>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
