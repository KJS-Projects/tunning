"use client";

import { motion } from "framer-motion";
import { Building2, Users, Rocket, Check, Star, Shield, Zap, Globe, Target, BarChart, Headphones } from "lucide-react";

const serviceTiers = [
  {
    tier: "enterprise",
    title: "Enterprise Solutions",
    description: "End-to-end solutions for large organizations with complex requirements and high scalability needs.",
    icon: Building2,
    color: "from-blue-600 to-purple-600",
    price: "Custom",
    features: [
      "Dedicated Engineering Team",
      "24/7 Production Support",
      "Enterprise Security & Compliance",
      "Scalable Microservices Architecture",
      "Disaster Recovery Planning",
      "Performance Optimization",
      "Technical Leadership",
      "Quarterly Strategy Reviews",
    ],
    bestFor: "Fortune 500 companies, large enterprises, financial institutions",
    cta: "Schedule Enterprise Consultation",
  },
  {
    tier: "business",
    title: "Business Solutions",
    description: "Complete solutions for growing businesses with custom development and integration needs.",
    icon: Users,
    color: "from-green-600 to-cyan-600",
    price: "From $25,000",
    features: [
      "Custom Web Applications",
      "API Development & Integration",
      "Database Design & Optimization",
      "Cloud Infrastructure Setup",
      "Regular Maintenance & Updates",
      "Technical Documentation",
      "Team Training",
      "Monthly Progress Reports",
    ],
    bestFor: "Medium-sized businesses, startups with funding, established companies",
    cta: "Start Business Project",
  },
  {
    tier: "startup",
    title: "Startup & MVP",
    description: "Rapid development of Minimum Viable Products and early-stage startup solutions.",
    icon: Rocket,
    color: "from-orange-600 to-pink-600",
    price: "From $10,000",
    features: [
      "MVP Development",
      "Rapid Prototyping",
      "Basic Cloud Setup",
      "Core Features Development",
      "Responsive Design",
      "Basic SEO Optimization",
      "Deployment Assistance",
      "3 Months Support",
    ],
    bestFor: "Startups, small businesses, entrepreneurs with MVPs",
    cta: "Build Your MVP",
  },
];

const includedServices = [
  {
    icon: Shield,
    title: "Security First",
    description: "All projects include security best practices and regular vulnerability assessments.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Optimized for speed and efficiency with performance monitoring included.",
  },
  {
    icon: Globe,
    title: "Cross-platform",
    description: "Responsive designs that work seamlessly across all devices and browsers.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focus on business objectives and measurable outcomes for every project.",
  },
  {
    icon: BarChart,
    title: "Analytics Ready",
    description: "Integrated analytics and reporting tools to track performance and growth.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Ongoing support and maintenance for the lifetime of your project.",
  },
];

export default function ServiceTiers() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service <span className="gradient-text">Tiers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for businesses of all sizes, from enterprise-scale systems to startup MVPs.
          </p>
        </motion.div>

        {/* Service Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {serviceTiers.map((tier, index) => {
            const Icon = tier.icon;

            return (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl overflow-hidden ${
                  tier.tier === "enterprise" ? "shadow-2xl transform scale-105 z-10" : "shadow-xl"
                }`}>
                {/* Header Section - Added 'relative z-10' */}
                <div className={`bg-gradient-to-r ${tier.color} p-8 text-white relative z-10`}>
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-10 h-10" />
                    {tier.tier === "enterprise" && (
                      <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm font-medium">Most Popular</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                  <p className="text-white/80 mb-6">{tier.description}</p>
                  <div className="text-4xl font-bold mb-2">{tier.price}</div>
                  <div className="text-white/60 text-sm">{tier.tier === "enterprise" ? "Enterprise pricing" : "Starting price"}</div>
                </div>

                {/* Content Section - Added 'relative z-10' */}
                <div className="bg-white p-8 relative z-10">
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-800 mb-4">Perfect For</h4>
                    <p className="text-gray-600">{tier.bestFor}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-800 mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      tier.tier === "enterprise"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}>
                    {tier.cta}
                  </motion.button>
                </div>

                {/* Gradient border - Kept as is (absolute) */}
                <div
                  className={`absolute inset-0 border-2 rounded-3xl border-transparent bg-gradient-to-r ${tier.color} bg-clip-border -m-0.5 pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* All Services Include Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Every Service Includes</h3>
              <p className="text-blue-100">Quality and excellence are built into every project, regardless of size or budget.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {includedServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                    <p className="text-blue-100">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 text-center">
              <p className="text-blue-100 mb-6">Not sure which service tier is right for you? Let's discuss your project.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg">
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
