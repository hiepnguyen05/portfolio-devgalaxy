'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import chandung from '@/assets/images/chandung.jpg';

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center tracking-tight"
                >
                    Origin Story
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="glass-card max-w-4xl mx-auto p-8 lg:p-12 rounded-3xl flex flex-col md:flex-row gap-12 items-center border-white/10"
                >
                    <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-2xl border border-white/20">
                        <Image
                            src={chandung}
                            alt="Nguyễn Ngọc Hiệp"
                            width={192}
                            height={192}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-lg text-slate-300 leading-relaxed font-light">
                            Based in the tech-hub sector of Earth, I am a Backend Developer specializing in Node.js with a passion for building scalable architectures. Much like a mission control specialist, I ensure every line of code is optimized for performance and reliability. My journey started in the JavaScript nebula, eventually expanding into the vast realms of Express and high-performance server-side engineering.
                        </p>
                        <div className="mt-6 flex flex-col gap-1 text-xs font-mono text-blue-400/80">
                            <span>&gt; MISSION_TYPE: HIGH_QUALITY_SOLUTIONS</span>
                            <span>&gt; CORE_DIRECTIVE: CLEAN_ARCHITECTURE</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
