"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Tunning</h2>
                <p className="text-gray-400">Bangalore, India</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">Crafting exceptional digital experiences for enterprises and startups worldwide.</p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Expertise", "Projects", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold mb-6">Technologies</h3>
            <ul className="space-y-2">
              {["React.js", "Next.js", ".NET Core", "Node.js", "Drupal", "AWS", "Azure"].map((tech) => (
                <li key={tech} className="text-gray-400">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Bangalore, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">contact@tunning.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Tunning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
