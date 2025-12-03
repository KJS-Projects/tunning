"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, Users, CheckCircle, MessageSquare, FileText, Award } from "lucide-react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const [selectedPackage, setSelectedPackage] = useState("strategy");

  const consultationPackages = [
    {
      id: "strategy",
      title: "Strategy Session",
      duration: "60 minutes",
      price: "Free",
      icon: MessageSquare,
      features: ["Technical assessment", "Project roadmap", "Technology stack recommendation", "Budget estimation", "Timeline planning"],
      bestFor: "New projects, technical feasibility",
    },
    {
      id: "deepdive",
      title: "Deep Dive Analysis",
      duration: "3 hours",
      price: "$499",
      icon: FileText,
      features: [
        "Comprehensive architecture review",
        "Performance analysis",
        "Security assessment",
        "Scalability planning",
        "Team structure recommendations",
      ],
      bestFor: "Existing systems, enterprise projects",
    },
    {
      id: "workshop",
      title: "Team Workshop",
      duration: "Full day",
      price: "$1,999",
      icon: Users,
      features: [
        "Hands-on technical workshop",
        "Architecture planning",
        "Technology training",
        "Code review session",
        "Q&A with architects",
      ],
      bestFor: "Development teams, knowledge transfer",
    },
  ];

  const timelines = ["Immediate (1-2 weeks)", "Soon (1 month)", "Planning phase (2-3 months)", "Future (3+ months)"];

  const budgets = ["Less than $10k", "$10k - $50k", "$50k - $100k", "$100k - $250k", "$250k - $500k", "$500k+"];

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Platform",
    "Enterprise Software",
    "CMS Development",
    "API Development",
    "System Migration",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule a consultation with our technical experts to discuss your project and explore how we can help you succeed.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Consultation Packages */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-8">Consultation Packages</h3>
                <div className="space-y-6">
                  {consultationPackages.map((pkg) => {
                    const Icon = pkg.icon;
                    const isSelected = selectedPackage === pkg.id;

                    return (
                      <motion.div
                        key={pkg.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`cursor-pointer rounded-2xl p-6 transition-all ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-500"
                            : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
                        }`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div
                              className={`p-3 rounded-xl mr-4 ${
                                isSelected ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-white/10"
                              }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold">{pkg.title}</h4>
                              <div className="flex items-center text-gray-400 mt-1">
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">{pkg.duration}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-2xl font-bold">{pkg.price}</div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="text-sm text-gray-400">Best for: {pkg.bestFor}</div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    <Award className="w-10 h-10 text-yellow-500" />
                    <div>
                      <div className="font-bold">Trusted Partner</div>
                      <div className="text-sm text-gray-400">50+ successful enterprise projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Schedule Your Consultation</h3>
                    <p className="text-gray-300">Fill out the form below and we'll contact you within 24 hours</p>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Role *</label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                        placeholder="CTO, Product Manager, etc."
                      />
                    </div>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Timeline *</label>
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Budget *</label>
                      <select
                        required
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none">
                        <option value="">Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
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

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Schedule within 24 hours</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-shadow">
                      Schedule Consultation
                    </motion.button>
                  </div>
                </form>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-white/10">
                <h4 className="text-xl font-bold mb-6">What Happens Next?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-white">1</span>
                    </div>
                    <h5 className="font-bold mb-2">Initial Contact</h5>
                    <p className="text-gray-300 text-sm">We'll reach out within 24 hours to schedule your consultation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-white">2</span>
                    </div>
                    <h5 className="font-bold mb-2">Technical Discussion</h5>
                    <p className="text-gray-300 text-sm">Deep dive into your requirements with our technical experts</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-white">3</span>
                    </div>
                    <h5 className="font-bold mb-2">Proposal & Planning</h5>
                    <p className="text-gray-300 text-sm">Receive detailed proposal and project roadmap</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
