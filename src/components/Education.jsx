import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { userData } from '../data';

const Education = () => {
    return (
        <section id="education" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        My academic journey and professional certifications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-accent">
                            <GraduationCap /> Education
                        </h3>
                        <div className="space-y-8">
                            {userData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-8 border-l-2 border-white/10"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                                    <p className="text-accent/80 mb-2">{edu.institute}</p>
                                    <div className="flex justify-between text-sm text-muted">
                                        <span>{edu.duration}</span>
                                        <span className="font-semibold text-white">{edu.score}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certificates Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-accent">
                            <Award /> Certifications
                        </h3>
                        <div className="space-y-4">
                            {userData.certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-4 bg-secondary rounded-lg border border-white/5 hover:border-accent/30 transition-colors flex items-start gap-3"
                                >
                                    <div className="mt-1 text-accent">
                                        <Award size={16} />
                                    </div>
                                    <p className="text-muted hover:text-white transition-colors">
                                        {cert}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
