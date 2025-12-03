"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Users, Target, BarChart, Shield, Zap, CheckCircle, Award } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    value: "99%",
    description: "Projects delivered within agreed timelines",
    change: "+5%",
    trend: "up",
  },
  {
    icon: DollarSign,
    title: "Budget Adherence",
    value: "97%",
    description: "Projects completed within budget",
    change: "+3%",
    trend: "up",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    value: "100%",
    description: "Clients would work with us again",
    change: "+2%",
    trend: "up",
  },
  {
    icon: Zap,
    title: "Performance",
    value: "99.9%",
    description: "Average system uptime",
    change: "+0.5%",
    trend: "up",
  },
];

const kpis = [
  {
    category: "Quality",
    metrics: [
      { name: "Code Coverage", value: "95%", target: "90%" },
      { name: "Bug Free Releases", value: "98%", target: "95%" },
      { name: "Performance Score", value: "96", target: "90" },
    ],
  },
  {
    category: "Efficiency",
    metrics: [
      { name: "Velocity", value: "85%", target: "80%" },
      { name: "Lead Time", value: "3 days", target: "5 days" },
      { name: "Deployment Frequency", value: "Daily", target: "Weekly" },
    ],
  },
  {
    category: "Business Impact",
    metrics: [
      { name: "ROI", value: "320%", target: "200%" },
      { name: "Time to Market", value: "-40%", target: "-25%" },
      { name: "User Satisfaction", value: "4.8/5", target: "4.5/5" },
    ],
  },
];

const clientTestimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp Inc.",
    quote: "Their process transparency gave us complete visibility and confidence throughout the project.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Director, StartupXYZ",
    quote: "The agile approach allowed us to pivot quickly based on user feedback without derailing the project.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "CEO, Enterprise Solutions",
    quote: "Their structured process delivered exactly what we needed, on time and within budget.",
    rating: 5,
  },
];

export default function SuccessMetrics() {
  return (
    <section id="metrics" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We measure success through data-driven metrics that matter to your business.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${metric.trend === "up" ? "bg-green-100" : "bg-red-100"}`}>
                      <Icon className={`w-6 h-6 ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                    </div>
                    <div
                      className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        metric.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {metric.change}
                    </div>
                  </div>

                  <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{metric.title}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* KPI Dashboard */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Key Performance Indicators</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We track comprehensive metrics across quality, efficiency, and business impact.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {kpis.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index === 0 ? -20 : index === 2 ? 20 : 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">{category.category}</h4>

                  <div className="space-y-6">
                    {category.metrics.map((metric, i) => (
                      <div key={metric.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700">{metric.name}</span>
                          <div className="flex items-center">
                            <span className="font-bold text-gray-800 mr-2">{metric.value}</span>
                            <div className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Target: {metric.target}</div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width:
                                metric.name === "Code Coverage"
                                  ? "95%"
                                  : metric.name === "Bug Free Releases"
                                  ? "98%"
                                  : metric.name === "Performance Score"
                                  ? "96%"
                                  : metric.name === "Velocity"
                                  ? "85%"
                                  : metric.name === "Lead Time"
                                  ? "60%"
                                  : metric.name === "Deployment Frequency"
                                  ? "100%"
                                  : metric.name === "ROI"
                                  ? "100%"
                                  : metric.name === "Time to Market"
                                  ? "100%"
                                  : metric.name === "User Satisfaction"
                                  ? "96%"
                                  : "100%",
                            }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className={`h-2 rounded-full ${
                              metric.name === "Code Coverage"
                                ? "bg-green-500"
                                : metric.name === "Bug Free Releases"
                                ? "bg-blue-500"
                                : metric.name === "Performance Score"
                                ? "bg-purple-500"
                                : metric.name === "Velocity"
                                ? "bg-yellow-500"
                                : metric.name === "Lead Time"
                                ? "bg-red-500"
                                : metric.name === "Deployment Frequency"
                                ? "bg-cyan-500"
                                : metric.name === "ROI"
                                ? "bg-pink-500"
                                : metric.name === "Time to Market"
                                ? "bg-indigo-500"
                                : "bg-orange-500"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Client Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Client Testimonials</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">What Our Clients Say</h3>
                <p className="text-blue-100">Real feedback from businesses that have experienced our process.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {clientTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex text-yellow-300 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="italic mb-6 text-blue-100">"{testimonial.quote}"</p>

                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-blue-200">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
