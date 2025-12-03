"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const technologies = [
  "React",
  "Next.js",
  ".NET Core",
  ".NET Core API",
  "Node.js",
  "Drupal",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Redis",
  "TypeScript",
  "Tailwind CSS",
  "Python",
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "enterprise", label: "Enterprise Solutions", count: 4 },
  { id: "medium", label: "Medium Business", count: 3 },
  { id: "small", label: "Startups & Small", count: 1 },
];

const scales = [
  { id: "all", label: "All Sizes" },
  { id: "large", label: "Large Scale (50k+ users)" },
  { id: "medium", label: "Medium Scale (10k-50k users)" },
  { id: "small", label: "Small Scale (<10k users)" },
];

export default function ProjectFilters({ filters, onFilterChange, onReset, showFilters, setShowFilters }) {
  const [expandedSections, setExpandedSections] = useState({
    technologies: true,
    category: true,
    scale: true,
  });

  // 1. Add state to track if we are on a large screen
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // 2. Use useEffect to safely access 'window' on the client side only
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleTechnologyToggle = (tech) => {
    const newTechs = filters.technologies.includes(tech) ? filters.technologies.filter((t) => t !== tech) : [...filters.technologies, tech];

    onFilterChange({ ...filters, technologies: newTechs });
  };

  const handleCategoryChange = (category) => {
    onFilterChange({ ...filters, category });
  };

  const handleScaleChange = (scale) => {
    onFilterChange({ ...filters, scale });
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200">
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">Filters</span>
            {filters.category !== "all" || filters.scale !== "all" || filters.technologies.length > 0 ? (
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full text-sm flex items-center justify-center">
                {[filters.category !== "all", filters.scale !== "all", filters.technologies.length > 0].filter(Boolean).length}
              </span>
            ) : null}
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {(showFilters || isLargeScreen) && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Filter Projects</h3>
              <button onClick={onReset} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Reset All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <button onClick={() => toggleSection("category")} className="w-full flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-700">Project Category</h4>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${expandedSections.category ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedSections.category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            checked={filters.category === category.id}
                            onChange={() => handleCategoryChange(category.id)}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-3 text-gray-600 group-hover:text-gray-800">{category.label}</span>
                        </div>
                        {category.count && <span className="text-sm text-gray-500">{category.count}</span>}
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Scale Filter */}
            <div className="mb-8">
              <button onClick={() => toggleSection("scale")} className="w-full flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-700">Project Scale</h4>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${expandedSections.scale ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedSections.scale && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2">
                    {scales.map((scale) => (
                      <label key={scale.id} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="scale"
                          checked={filters.scale === scale.id}
                          onChange={() => handleScaleChange(scale.id)}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-600 group-hover:text-gray-800">{scale.label}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Technologies Filter */}
            <div className="mb-8">
              <button onClick={() => toggleSection("technologies")} className="w-full flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-700">Technologies</h4>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${expandedSections.technologies ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {expandedSections.technologies && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2">
                    {technologies.map((tech) => (
                      <label key={tech} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={filters.technologies.includes(tech)}
                          onChange={() => handleTechnologyToggle(tech)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-600 group-hover:text-gray-800">{tech}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Active Filters */}
            {(filters.category !== "all" || filters.scale !== "all" || filters.technologies.length > 0) && (
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-3">Active Filters</h4>
                <div className="flex flex-wrap gap-2">
                  {filters.category !== "all" && (
                    <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {categories.find((c) => c.id === filters.category)?.label}
                      <button onClick={() => handleCategoryChange("all")} className="ml-2 hover:text-blue-800">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}

                  {filters.scale !== "all" && (
                    <span className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {scales.find((s) => s.id === filters.scale)?.label}
                      <button onClick={() => handleScaleChange("all")} className="ml-2 hover:text-purple-800">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}

                  {filters.technologies.map((tech) => (
                    <span key={tech} className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                      <button onClick={() => handleTechnologyToggle(tech)} className="ml-2 hover:text-gray-800">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
