"use client";

import { motion } from "framer-motion";
import { MessageSquare, Video, FileText, GitBranch, Layout, Shield, Zap, Users, Clock, CheckCircle } from "lucide-react";

const tools = [
  {
    category: "Communication",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    tools: [
      { name: "Slack", description: "Real-time team communication" },
      { name: "Zoom", description: "Video conferences & demos" },
      { name: "Microsoft Teams", description: "Enterprise collaboration" },
    ],
  },
  {
    category: "Project Management",
    icon: Layout,
    color: "from-purple-500 to-pink-500",
    tools: [
      { name: "Jira", description: "Agile project tracking" },
      { name: "Asana", description: "Task management" },
      { name: "Notion", description: "Documentation & wikis" },
    ],
  },
  {
    category: "Development",
    icon: GitBranch,
    color: "from-green-500 to-emerald-500",
    tools: [
      { name: "GitHub", description: "Version control & CI/CD" },
      { name: "VS Code", description: "Development environment" },
      { name: "Docker", description: "Containerization" },
    ],
  },
  {
    category: "Design",
    icon: Layout,
    color: "from-yellow-500 to-orange-500",
    tools: [
      { name: "Figma", description: "UI/UX design & prototyping" },
      { name: "Adobe Creative Suite", description: "Visual design assets" },
      { name: "Miro", description: "Wireframing & brainstorming" },
    ],
  },
  {
    category: "Testing",
    icon: CheckCircle,
    color: "from-red-500 to-pink-500",
    tools: [
      { name: "Jest", description: "Unit testing framework" },
      { name: "Cypress", description: "End-to-end testing" },
      { name: "Postman", description: "API testing" },
    ],
  },
  {
    category: "Deployment",
    icon: Zap,
    color: "from-indigo-500 to-blue-500",
    tools: [
      { name: "AWS", description: "Cloud infrastructure" },
      { name: "Vercel", description: "Frontend deployment" },
      { name: "GitHub Actions", description: "Automated workflows" },
    ],
  },
];

const collaborationFeatures = [
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Live progress tracking and instant notifications",
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Enterprise-grade security with role-based permissions",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration between all stakeholders",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Centralized knowledge base and project documentation",
  },
];

export default function CollaborationTools() {
  return (
    <section id="tools" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Collaboration <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use industry-leading tools to ensure seamless communication, transparent progress tracking, and efficient collaboration.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {tools.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.tools.map((tool, i) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        className="flex items-center p-4 bg-white rounded-xl border border-gray-100">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                          <span className="text-white font-bold text-sm">{tool.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{tool.name}</h4>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Client Portal Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Exclusive Client Portal</h3>
                <p className="text-blue-100">Get 24/7 access to project progress, documentation, and direct communication with our team.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {collaborationFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                      <p className="text-blue-100">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg">
                  Request Portal Access
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Communication Channels */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Communication Channels</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Daily Standups</h4>
                <p className="text-gray-600">15-minute daily syncs to review progress and address blockers</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Sprint Reviews</h4>
                <p className="text-gray-600">Bi-weekly demos of completed work and planning for next sprint</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Retrospectives</h4>
                <p className="text-gray-600">Regular meetings to improve processes and collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
