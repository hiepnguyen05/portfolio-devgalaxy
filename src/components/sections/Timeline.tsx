'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        company: "University Academic Board",
        role: "Academic Merit Scholarship",
        period: "2025 - 2026",
        description: "Awarded for outstanding academic performance and active contribution to technical research initiatives.",
        active: true
    },
    {
        company: "University Academic Board",
        role: "Academic Merit Scholarship",
        period: "2024 - 2025",
        description: "Recognized for exceptional dedication to academic rigor and advanced technical skill development.",
        active: false
    }
];

export default function Timeline() {
    return (
        <section id="experience" className="py-24 bg-black/40 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Horizon of Excellence</h2>

                <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-white/10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <div className={`w-2 h-2 rounded-full ${exp.active ? 'bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]' : 'bg-white/20'}`} />
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl glass-card border-white/5">
                                <div className="flex items-center justify-between space-x-2 mb-2">
                                    <div className="font-bold text-slate-100">{exp.role} @ {exp.company}</div>
                                    <time className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">{exp.period}</time>
                                </div>
                                <div className="text-slate-400 text-sm">{exp.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
