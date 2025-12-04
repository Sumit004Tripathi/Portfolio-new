import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Code2 } from 'lucide-react';
import { userData } from '../data';

const Contact = () => {
    const formRef = React.useRef();
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Check if env vars are present
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
            import('@emailjs/browser').then((emailjs) => {
                emailjs.default.send(
                    serviceId,
                    templateId,
                    {
                        from_name: form.name,
                        to_name: "Sumit Tripathi",
                        from_email: form.email,
                        to_email: "tripathisumit2004@gmail.com",
                        message: form.message,
                    },
                    publicKey
                )
                    .then(() => {
                        setLoading(false);
                        alert('Thank you. I will get back to you as soon as possible.');
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, (error) => {
                        setLoading(false);
                        console.error(error);
                        alert('Something went wrong. Please try again.');
                    });
            });
        } else {
            // Fallback to mailto
            const subject = `Portfolio Contact from ${form.name}`;
            const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
            window.location.href = `mailto:${userData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setLoading(false);
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }
    };

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted">Email</p>
                                <a href={`mailto:${userData.contact.email}`} className="text-lg hover:text-accent transition-colors">
                                    {userData.contact.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted">Phone</p>
                                <a href={`tel:${userData.contact.phone}`} className="text-lg hover:text-accent transition-colors">
                                    {userData.contact.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted">Location</p>
                                <p className="text-lg">{userData.location}</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-lg font-semibold mb-4">Social Profiles</h4>
                            <div className="flex gap-4">
                                <a
                                    href={userData.contact.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-all"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href={userData.contact.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-all"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={userData.contact.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-all"
                                >
                                    <Code2 size={20} />
                                </a>
                                <a
                                    href={userData.contact.hackerrank}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-all"
                                >
                                    <Code2 size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-secondary p-8 rounded-2xl border border-white/5"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-primary/50 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-primary/50 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-primary/50 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
