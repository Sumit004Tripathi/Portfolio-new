import React from 'react';
import { motion } from 'framer-motion';
import { userData } from '../data';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                    <div className="bg-secondary p-8 rounded-2xl border border-white/5 shadow-xl">
                        <p className="text-lg text-muted leading-relaxed mb-6">
                            {userData.profile}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
                            <div className="p-4 bg-primary/50 rounded-lg">
                                <h3 className="text-accent font-semibold mb-2">Location</h3>
                                <p className="text-muted">{userData.location}</p>
                            </div>
                            <div className="p-4 bg-primary/50 rounded-lg">
                                <h3 className="text-accent font-semibold mb-2">Email</h3>
                                <p className="text-muted break-all">{userData.contact.email}</p>
                            </div>
                            <div className="p-4 bg-primary/50 rounded-lg">
                                <h3 className="text-accent font-semibold mb-2">Education</h3>
                                <p className="text-muted">{userData.education[0].degree}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
