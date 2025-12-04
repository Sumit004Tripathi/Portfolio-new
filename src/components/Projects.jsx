import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { userData } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Showcasing my work in Machine Learning, Data Science, and Web Development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {userData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all group hover:-translate-y-2"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-primary/50 rounded-lg text-accent">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-4">
                                        {/* Assuming github link might be added later to project object, using generic for now if not present */}
                                        <a href="#" className="text-muted hover:text-accent transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href="#" className="text-muted hover:text-accent transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-accent/80 mb-4 font-mono">
                                    {project.duration}
                                </p>

                                <ul className="space-y-2 mb-6 flex-grow">
                                    {project.details.map((detail, i) => (
                                        <li key={i} className="text-muted text-sm flex items-start gap-2">
                                            <span className="text-accent mt-1.5">•</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
