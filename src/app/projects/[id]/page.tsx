'use client';

import React, { useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, Cpu, Globe, Shield, Terminal, Zap, Code2, Database, Map, WifiOff, Share2, Target, Lightbulb, Github, ShoppingCart } from 'lucide-react';

import { PROJECTS } from '@/constants';
import gsap from 'gsap';

const IconMap: { [key: string]: any } = {
    Terminal,
    Database,
    Zap,
    Shield,
    Cpu,
    ShoppingCart,
    Target,
    Github,
    Globe,
    Code2,
    Map,
    WifiOff,
    Share2,
    Lightbulb
};

function DustParticle() {
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
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
        });
        return () => ctx.revert();
    }, []);

    return <div ref={elRef} className="absolute bg-white rounded-full opacity-0 pointer-events-none" />;
}

const iconMap: Record<string, any> = {
    Database, Shield, Zap, Map, WifiOff, Share2, Target, Lightbulb
};

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
        <main className="min-h-screen bg-transparent text-white pb-32 relative overflow-hidden">
            {/* Design Consistency: Re-use background elements from main page */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="mist-cloud absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-20" />
                <div
                    className="mist-cloud absolute bottom-0 right-0 w-[1000px] h-[1000px] rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)' }}
                />
                <div id="nebula-dust" className="absolute inset-0 opacity-20">
                    {Array.from({ length: 60 }).map((_, i) => (
                        <DustParticle key={i} />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-32 lg:pt-48">
                {/* Cinematic Entry Section */}
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
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-[40px] opacity-60 animate-pulse" />
                        <div className="w-full h-full bg-gradient-to-br from-white via-blue-400 to-blue-600 rounded-full shadow-[0_0_80px_rgba(59,130,246,0.8)] relative z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center justify-center gap-3 text-blue-400 mb-6 font-mono text-[10px] tracking-[0.5em] uppercase">
                            <Rocket size={16} />
                            <span>System Briefing</span>
                        </div>
                        <h1 className="text-5xl lg:text-8xl font-bold mb-8 tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent uppercase">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light italic mb-12 max-w-2xl mx-auto">
                            "{project.shortDescription}"
                        </p>
                    </motion.div>
                </div>

                {/* Main Content Sections */}
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        {/* Mission Overview (Detailed Description) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-500/60 font-bold">Mission Overview</h3>
                                <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/20 to-transparent" />
                            </div>
                            <p className="text-slate-300 leading-relaxed font-light">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Mission Intelligence (Challenge vs Solution) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            <div className="glass-card p-8 rounded-[2rem] border-white/5 bg-gradient-to-br from-red-500/5 to-transparent">
                                <div className="flex items-center gap-3 mb-6 text-red-400/80">
                                    <Target size={18} />
                                    <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold">The Challenge</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    {project.challenge}
                                </p>
                            </div>
                            <div className="glass-card p-8 rounded-[2rem] border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent">
                                <div className="flex items-center gap-3 mb-6 text-blue-400/80">
                                    <Lightbulb size={18} />
                                    <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold">The Solution</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    {project.solution}
                                </p>
                            </div>
                        </motion.div>

                        {/* System Capabilities (Detailed Features List) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 lg:p-12 rounded-[2.5rem] border-white/5"
                        >
                            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-blue-500" />
                                Core Capabilities
                            </h2>
                            <div className="grid gap-8">
                                {project.keyFeatures.map((feature: any, i: number) => {
                                    const IconComponent = IconMap[feature.icon] || Zap;
                                    return (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors">
                                                <IconComponent size={20} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                                <p className="text-slate-400 font-light leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Visual Archive (Dedicated Gallery) */}
                        {project.gallery && project.gallery.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/10" />
                                    <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-slate-500">Visual Archive</h3>
                                    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/10" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {project.gallery.map((item: any, i: number) => (
                                        <div key={i} className="glass-card p-4 rounded-3xl border-white/5 group overflow-hidden">
                                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <p className="text-white font-mono text-[10px] tracking-widest uppercase">{item.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column: Technical Manifest */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-[2rem] border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent sticky top-32"
                        >
                            <div className="flex items-center gap-3 mb-10 text-blue-400">
                                <Cpu size={20} />
                                <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-bold">Technical Manifest</h3>
                            </div>
                            <div className="space-y-8 mb-12">
                                {project.technicalSpecs.map((spec: any, i: number) => (
                                    <div key={i} className="group">
                                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1 group-hover:text-blue-400 transition-colors">{spec.label}</span>
                                        <span className="text-xl font-light text-white block">{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 mb-6 text-slate-500">
                                <Code2 size={16} />
                                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold">Orbital Tools</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-12">
                                {project.tags.map((tag: string) => (
                                    <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-400 text-[10px] rounded-lg uppercase tracking-widest hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-4">
                                {project.demoUrl && (
                                    <button
                                        onClick={() => window.open(project.demoUrl, '_blank')}
                                        className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 group"
                                    >
                                        <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                                        Launch Interface
                                    </button>
                                )}
                                <button
                                    onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                                    disabled={!project.githubUrl}
                                    className="w-full py-5 bg-white/5 border border-white/10 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group"
                                >
                                    <Github size={18} className="text-white group-hover:scale-110 transition-transform" />
                                    View Repository
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
