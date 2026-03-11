'use client';

import React, { useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, Cpu, Globe, Shield, Terminal, Zap, Code2 } from 'lucide-react';
import { PROJECTS } from '@/constants';
import gsap from 'gsap';

function DustParticle() {
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!elRef.current) return;
        const size = Math.random() * 2;
        gsap.set(elRef.current, {
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        });
        gsap.to(elRef.current, {
            opacity: Math.random() * 0.3,
            duration: Math.random() * 5 + 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return <div ref={elRef} className="absolute bg-white rounded-full opacity-0 pointer-events-none" />;
}

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();
    const project = PROJECTS.find(p => p.id === params.id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-black">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4">404</h1>
                    <p className="text-xl text-slate-400 mb-8 font-mono tracking-widest uppercase">Mission Data Corrupted: Project Not Found</p>
                    <button
                        onClick={() => router.push('/')}
                        className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all font-bold uppercase tracking-widest text-sm"
                    >
                        Return to Command Center
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white pb-32 relative overflow-hidden">
            {/* Design Consistency: Re-use background elements from main page */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="mist-cloud absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-20" />
                <div
                    className="mist-cloud absolute bottom-0 right-0 w-[1000px] h-[1000px] rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)' }}
                />
                <div id="nebula-dust" className="absolute inset-0 opacity-20">
                    {Array.from({ length: 150 }).map((_, i) => (
                        <DustParticle key={i} />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-32 lg:pt-48">
                {/* Cinematic Entry Section (The expanded star) */}
                <div className="flex flex-col items-center mb-32 text-center max-w-4xl mx-auto">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => router.push('/#projects')}
                        className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors mb-12 font-mono text-xs tracking-[0.3em] uppercase group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Return to Star Chart
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-24 h-24 mb-12 relative"
                    >
                        {/* The expanded Star (Hero visual) */}
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-[40px] opacity-60 animate-pulse" />
                        <div className="w-full h-full bg-gradient-to-br from-white via-blue-400 to-blue-600 rounded-full shadow-[0_0_80px_rgba(59,130,246,0.8)] relative z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center justify-center gap-3 text-blue-400 mb-6">
                            <Rocket size={20} />
                            <span className="font-mono text-[10px] tracking-[0.5em] uppercase">Deep Scan Manifest</span>
                        </div>
                        <h1 className="text-5xl lg:text-8xl font-bold mb-8 tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent uppercase">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light italic mb-12">
                            "{project.shortDescription}"
                        </p>
                    </motion.div>
                </div>

                {/* Main Content Sections */}
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Documentation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 space-y-12"
                    >
                        {/* Project Overview Card */}
                        <div className="glass-card p-8 lg:p-12 rounded-[2.5rem] border-white/5 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Terminal size={120} />
                            </div>
                            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8 flex items-center gap-4 tracking-tighter">
                                <span className="w-12 h-[1px] bg-blue-500" />
                                Mission Overview
                            </h2>
                            <div className="text-slate-400 text-base lg:text-[1.1rem] leading-relaxed font-light space-y-6">
                                {project.description.split('. ').map((para, i) => (para && (
                                    <p key={i}>{para}.</p>
                                )))}
                            </div>
                        </div>

                        {/* Mission Log / Key Features */}
                        <div className="glass-card p-8 lg:p-12 rounded-[2.5rem] border-white/5">
                            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-blue-500" />
                                Mission Log & Milestones
                            </h2>
                            <div className="space-y-12">
                                {project.missionLog.map((log, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 font-mono text-xs z-10 transition-colors group-hover:border-blue-400">
                                                0{i + 1}
                                            </div>
                                            {i !== project.missionLog.length - 1 && (
                                                <div className="w-[1px] h-full bg-gradient-to-b from-blue-500/30 to-transparent mt-2" />
                                            )}
                                        </div>
                                        <div className="pb-12">
                                            <h4 className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">{log.date}</h4>
                                            <p className="text-xl text-white font-medium mb-3">{log.event}</p>
                                            <p className="text-slate-400 font-light leading-relaxed">
                                                Successfully executed mission protocols and synchronized technical modules.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Sidebar Specs */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 space-y-8"
                    >
                        {/* Technical Manifest */}
                        <div className="glass-card p-8 rounded-[2rem] border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent">
                            <div className="flex items-center gap-3 mb-10 text-blue-400">
                                <Cpu size={20} />
                                <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-bold">Technical Manifest</h3>
                            </div>
                            <div className="space-y-8">
                                {project.technicalSpecs.map((spec, i) => (
                                    <div key={i} className="group">
                                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1 group-hover:text-blue-400 transition-colors">{spec.label}</span>
                                        <span className="text-xl font-light text-white block">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technology Stack Tags */}
                        <div className="glass-card p-8 rounded-[2rem] border-white/5">
                            <div className="flex items-center gap-3 mb-8 text-blue-400">
                                <Code2 size={20} />
                                <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-bold">Orbital Tools</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-400 text-[10px] rounded-lg uppercase tracking-widest hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Access Points */}
                        <div className="space-y-4 pt-4">
                            <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 group">
                                <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                                Launch Live Interface
                            </button>
                            <button className="w-full py-5 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group">
                                <Zap size={18} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                                Request Mission Brief
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
