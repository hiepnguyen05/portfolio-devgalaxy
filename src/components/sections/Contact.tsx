'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-bold mb-16 text-center tracking-tight"
                    >
                        Signal Transmission
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-slate-400 mb-8 font-light italic">
                                Ready to start a new mission together? Reach out through the terminal or via my social frequencies.
                            </p>

                            <div className="space-y-6">
                                <ContactInfoItem
                                    icon={<Mail size={20} />}
                                    text="hiep20122005@gmail.com"
                                    href="mailto:hiep20122005@gmail.com"
                                />
                                <ContactInfoItem
                                    icon={<Github size={20} />}
                                    text="github.com/hiepnguyen05"
                                    href="https://github.com/hiepnguyen05"
                                />
                                <ContactInfoItem
                                    icon={<Linkedin size={20} />}
                                    text="linkedin.com/in/hiệp-nguyễn-2b84093a9"
                                    href="https://www.linkedin.com/in/hiệp-nguyễn-2b84093a9"
                                />
                            </div>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="text"
                                placeholder="Identify yourself..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm p-3 outline-none transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Communication address (Email)..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm p-3 outline-none transition-all"
                            />
                            <textarea
                                placeholder="Input transmission content..."
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm p-3 outline-none transition-all"
                            />
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 group"
                            >
                                Broadcast Signal
                                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactInfoItem({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer w-fit"
        >
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                {icon}
            </div>
            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{text}</span>
        </a>
    );
}
