"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Key, Users, Briefcase, ArrowRight } from "lucide-react";

export default function ClientPortalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Enterprise Client Portal</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Exclusive <span className="gradient-text">Client Portal</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure, dedicated portal for enterprise clients to track project progress, manage assets, and collaborate with our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Access</h3>
              <p className="text-gray-300 mb-6">
                Enterprise-grade security with 2FA, encrypted communications, and role-based access control.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Key className="w-4 h-4 mr-2" />
                  Multi-factor authentication
                </li>
                <li className="flex items-center text-gray-400">
                  <Shield className="w-4 h-4 mr-2" />
                  End-to-end encryption
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Project Management</h3>
              <p className="text-gray-300 mb-6">Real-time project tracking, milestone management, and progress analytics.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Live progress tracking
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  Milestone management
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
              <p className="text-gray-300 mb-6">Dedicated communication channels, file sharing, and collaborative tools.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                  Real-time messaging
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                  File version control
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready for Enterprise Solutions?</h3>
                <p className="text-gray-300 max-w-2xl">
                  Schedule a private demo of our client portal and see how we manage enterprise projects with transparency and efficiency.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 hover:shadow-xl hover:shadow-blue-500/30 transition-all whitespace-nowrap">
                <span>Request Portal Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
