"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ExternalLink, Eye, Zap, Users, TrendingUp, Shield, Globe, ChevronDown, Search, Award, Star } from "lucide-react";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectModal from "@/components/projects/ProjectModal";
import ClientPortalCTA from "@/components/projects/ClientPortalCTA";

const allProjects = [
  {
    id: 1,
    title: "Global E-commerce Platform",
    description:
      "Built a scalable e-commerce solution for a Fortune 500 retail chain, handling 50k+ daily transactions with 99.99% uptime.",
    link: "https://enterprise-ecommerce.com",
    thumbnail: "/api/placeholder/800/600",
    technologies: ["Next.js", ".NET Core API", "PostgreSQL", "Redis", "AWS", "Docker"],
    category: "enterprise",
    clientType: "fortune-500",
    scale: "large",
    duration: "8 months",
    teamSize: "15 members",
    impact: "Increased revenue by 300%",
    live: true,
    featured: true,
    tags: ["E-commerce", "Scalability", "High Traffic"],
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Developed a comprehensive hospital management system with telemedicine capabilities for a leading healthcare provider.",
    link: "https://healthcare-system.com",
    thumbnail: "/api/placeholder/800/600",
    technologies: ["React", ".NET Core", "MongoDB", "Azure", "SignalR"],
    category: "enterprise",
    clientType: "healthcare",
    scale: "large",
    duration: "6 months",
    teamSize: "12 members",
    impact: "Reduced patient wait time by 65%",
    live: true,
    featured: true,
    tags: ["Healthcare", "Telemedicine", "Compliance"],
  },
  {
    id: 3,
    title: "FinTech Analytics Dashboard",
    description: "Real-time financial analytics platform for a leading investment bank with AI-powered insights.",
    link: "https://fintech-analytics.com",
    thumbnail: "/api/placeholder/800/600",
    technologies: ["Next.js", "Node.js", "Python", "Redis", "D3.js"],
    category: "enterprise",
    clientType: "fintech",
    scale: "medium",
    duration: "4 months",
    teamSize: "8 members",
    impact: "Improved decision making by 40%",
    live: true,
    featured: true,
    tags: ["FinTech", "Analytics", "Real-time"],
  },
  {
    id: 4,
    title: "EdTech Learning Platform",
    description: "AI-powered learning platform with personalized content delivery for 100k+ students.",
    link: "https://edtech-platform.com",
    thumbnail: "/api/placeholder/800/600",
    technologies: ["React", "Drupal", "Python", "AWS Lambda", "ML"],
    category: "medium",
    clientType: "edtech",
    scale: "medium",
    duration: "5 months",
    teamSize: "10 members",
    impact: "Increased engagement by 80%",
    live: true,
    featured: false,
    tags: ["EdTech", "AI/ML", "Scalable"],
  },
  {
    id: 5,
    title: "Real Estate Portal",
    description: "Property listing platform with virtual tours and AI-based property recommendations.",
    link: "https://realestate-portal.com",
    thumbnail: "/api/placeholder/800/600",
    technologies: ["Next.js", ".NET Core", "PostgreSQL", "Mapbox", "Three.js"],
    category: "medium",
    clientType: "real-estate",
    scale: "medium",
    duration: "3 months",
    teamSize: "6 members",
    impact: "Increased leads by 150%",
    live: true,
    featured: false,
    tags: ["Real Estate", "3D Tours", "AI"],
  },
  {
    id: 6,
    title: "Startup MVP Platform",
    description: "Rapid MVP development for a SaaS startup, delivered in record time with scalability built-in.",
    link: "https://startup-mvp.com",
    thumbnail: "/api/placeholder/800/600",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Stripe"],
    category: "small",
    clientType: "startup",
    scale: "small",
    duration: "2 months",
    teamSize: "4 members",
    impact: "Secured $2M in seed funding",
    live: true,
    featured: true,
    tags: ["MVP", "SaaS", "Rapid Development"],
  },
  {
    id: 7,
    title: "Logistics Management System",
    description: "End-to-end logistics and supply chain management for a shipping conglomerate.",
    link: "https://logistics-system.com",
    thumbnail: "/api/placeholder/800/600",
    technologies: [".NET Core API", "React", "PostgreSQL", "Redis", "AWS"],
    category: "enterprise",
    clientType: "logistics",
    scale: "large",
    duration: "7 months",
    teamSize: "14 members",
    impact: "Reduced delivery time by 35%",
    live: true,
    featured: false,
    tags: ["Logistics", "Supply Chain", "Enterprise"],
  },
  {
    id: 8,
    title: "Media Streaming Service",
    description: "High-performance video streaming platform with adaptive bitrate streaming.",
    link: "https://streaming-service.com",
    thumbnail: "/api/placeholder/800/600",
    technologies: ["React", "Node.js", "FFmpeg", "AWS S3", "CDN"],
    category: "medium",
    clientType: "media",
    scale: "medium",
    duration: "4 months",
    teamSize: "7 members",
    impact: "Served 1M+ monthly users",
    live: true,
    featured: false,
    tags: ["Streaming", "Video", "High Performance"],
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(allProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filters, setFilters] = useState({
    category: "all",
    scale: "all",
    technologies: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter projects
  useEffect(() => {
    let filtered = allProjects;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (filters.category !== "all") {
      filtered = filtered.filter((project) => project.category === filters.category);
    }

    // Scale filter
    if (filters.scale !== "all") {
      filtered = filtered.filter((project) => project.scale === filters.scale);
    }

    // Technologies filter
    if (filters.technologies.length > 0) {
      filtered = filtered.filter((project) => filters.technologies.every((tech) => project.technologies.includes(tech)));
    }

    setProjects(filtered);
  }, [filters, searchQuery]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      category: "all",
      scale: "all",
      technologies: [],
    });
    setSearchQuery("");
  };

  const featuredProjects = allProjects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">50+ Successful Projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Project</span> Showcase
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Explore our portfolio of exceptional digital solutions crafted for enterprises and innovative startups worldwide.
            </p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <span className="text-lg font-semibold text-gray-700">Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selected projects that demonstrate our expertise in delivering complex, large-scale solutions for industry leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border border-gray-100">
                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>

                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-20 h-20 text-white/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800">{project.duration}</div>
                      <div className="text-sm text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800">{project.teamSize}</div>
                      <div className="text-sm text-gray-500">Team Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{project.impact}</div>
                      <div className="text-sm text-gray-500">Impact</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          project.clientType === "fortune-500"
                            ? "bg-blue-500"
                            : project.clientType === "healthcare"
                            ? "bg-green-500"
                            : "bg-purple-500"
                        }`}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {project.clientType
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </span>
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <ProjectFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
              />
            </div>

            {/* Projects Grid */}
            <div className="lg:w-3/4">
              {/* Search Bar */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects by name, technology, or industry..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Filter className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </motion.div>

              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">All Projects</h3>
                  <p className="text-gray-600">
                    Showing {projects.length} of {allProjects.length} projects
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 outline-none">
                    <option>Sort by: Featured</option>
                    <option>Sort by: Latest</option>
                    <option>Sort by: Scale</option>
                  </select>
                </div>
              </div>

              {/* Projects Grid */}
              <AnimatePresence mode="wait">
                {projects.length > 0 ? (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedProject(project)}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
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
                              <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                {project.title}
                              </h4>
                            </div>
                            {project.live && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                <span className="text-sm text-green-600">Live</span>
                              </motion.div>
                            )}
                          </div>

                          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {project.teamSize}
                              </div>
                              <div className="flex items-center">
                                <Zap className="w-4 h-4 mr-1" />
                                {project.duration}
                              </div>
                            </div>
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                              <span>View</span>
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          </div>
                        </div>

                        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Search className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">No projects found</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Try adjusting your filters or search terms to find what you're looking for.
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow">
                      Reset All Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portal CTA */}
      <ClientPortalCTA />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}
