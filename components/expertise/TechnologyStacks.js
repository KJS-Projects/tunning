"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Shield, Zap, Globe, Cpu, Layers, GitBranch, Container, Workflow } from "lucide-react";

const technologyStacks = {
  frontend: {
    title: "Frontend Development",
    description: "Building responsive, performant user interfaces with modern frameworks and best practices.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      {
        name: "React.js",
        level: "Expert",
        projects: 35,
        description: "Component-based architecture with hooks and context API",
      },
      {
        name: "Next.js",
        level: "Expert",
        projects: 28,
        description: "SSR, SSG, and full-stack capabilities with App Router",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        projects: 42,
        description: "Type-safe development for scalable applications",
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        projects: 40,
        description: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "Redux / Zustand",
        level: "Advanced",
        projects: 25,
        description: "State management solutions for complex applications",
      },
    ],
  },
  backend: {
    title: "Backend Development",
    description: "Scalable server-side solutions with robust APIs and microservices architecture.",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    technologies: [
      {
        name: ".NET Core",
        level: "Expert",
        projects: 30,
        description: "High-performance web APIs and microservices",
      },
      {
        name: "Node.js",
        level: "Expert",
        projects: 32,
        description: "Event-driven architecture with Express/Nest.js",
      },
      {
        name: "Python/Django",
        level: "Advanced",
        projects: 18,
        description: "Rapid development with Django REST framework",
      },
      {
        name: "GraphQL",
        level: "Advanced",
        projects: 15,
        description: "Efficient data fetching with Apollo/GraphQL",
      },
      {
        name: "WebSockets",
        level: "Expert",
        projects: 22,
        description: "Real-time communication with Socket.io/SignalR",
      },
    ],
  },
  database: {
    title: "Database Systems",
    description: "Optimized data storage solutions with high availability and scalability.",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    technologies: [
      {
        name: "PostgreSQL",
        level: "Expert",
        projects: 28,
        description: "Advanced relational database with JSON support",
      },
      {
        name: "MongoDB",
        level: "Expert",
        projects: 25,
        description: "Document database for flexible data models",
      },
      {
        name: "Redis",
        level: "Advanced",
        projects: 32,
        description: "In-memory data structure store for caching",
      },
      {
        name: "Elasticsearch",
        level: "Advanced",
        projects: 12,
        description: "Search and analytics engine",
      },
      {
        name: "MySQL",
        level: "Expert",
        projects: 20,
        description: "Reliable relational database for web applications",
      },
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, infrastructure as code, and cloud-native deployments.",
    icon: Cloud,
    color: "from-yellow-500 to-orange-500",
    technologies: [
      {
        name: "AWS",
        level: "Expert",
        projects: 35,
        description: "Full-stack cloud solutions with EC2, S3, Lambda",
      },
      {
        name: "Docker",
        level: "Expert",
        projects: 40,
        description: "Containerization for consistent deployments",
      },
      {
        name: "Kubernetes",
        level: "Advanced",
        projects: 18,
        description: "Container orchestration at scale",
      },
      {
        name: "CI/CD",
        level: "Expert",
        projects: 45,
        description: "GitHub Actions, Jenkins, GitLab CI",
      },
      {
        name: "Terraform",
        level: "Advanced",
        projects: 15,
        description: "Infrastructure as code for cloud resources",
      },
    ],
  },
  cms: {
    title: "CMS & Platforms",
    description: "Content management and e-commerce platforms with custom integrations.",
    icon: Globe,
    color: "from-indigo-500 to-blue-500",
    technologies: [
      {
        name: "Drupal",
        level: "Expert",
        projects: 20,
        description: "Enterprise-grade content management",
      },
      {
        name: "WordPress",
        level: "Advanced",
        projects: 15,
        description: "Custom themes and plugin development",
      },
      {
        name: "Headless CMS",
        level: "Expert",
        projects: 22,
        description: "Strapi, Contentful, Sanity integrations",
      },
      {
        name: "Shopify",
        level: "Advanced",
        projects: 12,
        description: "E-commerce store development",
      },
    ],
  },
};

const tabs = [
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Server },
  { id: "database", label: "Database", icon: Database },
  { id: "devops", label: "DevOps", icon: Cloud },
  { id: "cms", label: "CMS", icon: Globe },
];

export default function TechnologyStacks({ activeTab, setActiveTab }) {
  const currentStack = technologyStacks[activeTab];

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology <span className="gradient-text">Stacks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across the entire technology stack, from frontend interfaces to backend systems and infrastructure.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}>
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Stack Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="flex items-start mb-8">
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentStack.color} mr-6`}>
              <currentStack.icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">{currentStack.title}</h3>
              <p className="text-gray-600 text-lg">{currentStack.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentStack.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{tech.name}</h4>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        tech.level === "Expert" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }`}>
                      {tech.level}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text mb-1">{tech.projects}</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{tech.description}</p>

                {/* Skill meter */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Proficiency</span>
                    <span>{tech.level === "Expert" ? "95%" : "85%"}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: tech.level === "Expert" ? "95%" : "85%" }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${currentStack.color}`}
                    />
                  </div>
                </div>

                {/* Project examples */}
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex -space-x-2 mr-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white" />
                    ))}
                  </div>
                  <span>Used in {tech.projects}+ successful projects</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Certifications & Training</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-xl">
                <span className="text-blue-700 font-medium">AWS Certified</span>
              </div>
              <div className="flex items-center bg-green-50 px-4 py-2 rounded-xl">
                <span className="text-green-700 font-medium">Microsoft Certified</span>
              </div>
              <div className="flex items-center bg-purple-50 px-4 py-2 rounded-xl">
                <span className="text-purple-700 font-medium">React Expert</span>
              </div>
              <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-xl">
                <span className="text-yellow-700 font-medium">Drupal Specialist</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
