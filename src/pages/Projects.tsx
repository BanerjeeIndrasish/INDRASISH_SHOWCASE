import { Briefcase, Calendar, Link } from "lucide-react";
import { useState } from "react";
import { Button, Tooltip } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../utils";

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 5);

    return (
        <section className="min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        A showcase of web applications, admin panels, and VR experiences
                        I've developed across different domains and technologies.
                    </p>
                </div>

                {/* Project List */}
                <div className="space-y-8">
                    <AnimatePresence>
                        {visibleProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-0">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-gray-800">
                                                {project.title}
                                            </h3>
                                            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                                {project.type}
                                            </span>
                                            {project.link && project.link.length > 0 && <div className="flex gap-2">
                                                {project.link.map((linkItem, index) =>
                                                    Object.entries(linkItem).map(([key, value]) =>
                                                        <Tooltip key={index} title={key.charAt(0).toUpperCase() + key.slice(1)}>
                                                            <a
                                                                href={value}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-gray-500 hover:text-blue-600 transition"
                                                            >
                                                                <Link size={18} />
                                                            </a>
                                                        </Tooltip>
                                                    )
                                                )}
                                            </div>}
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Briefcase size={16} />
                                                {project.company}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                {project.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 leading-relaxed text-start">
                                    {project.description}
                                </p>

                                <div className="mb-4 flex flex-col justify-start items-start">
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                                        Key Features:
                                    </h3>
                                    <ul className="grid md:grid-cols-2 gap-2">
                                        {project.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-600 text-sm"
                                            >
                                                <span className="text-blue-600 mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Show More / Less Button */}
                    <div className="flex justify-center">
                        <Button
                            onClick={() => setShowAll((prev) => !prev)}
                            type="primary"
                            size="large"
                            className="mt-6 px-10 py-5 font-medium rounded-lg shadow-sm"
                        >
                            {showAll ? "Show Less" : "Show All"}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;