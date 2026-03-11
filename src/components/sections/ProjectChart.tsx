'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV_LINKS, PROJECTS } from '@/constants';
import { motion } from 'framer-motion';
import ProjectModal from '../ui/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

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

// Data is now imported from @/constants

const allStars = [
    { x: 400, y: 50, size: 5, twinkle: true },
    { x: 550, y: 250, size: 3 },
    { x: 500, y: 550, size: 7 },
    { x: 850, y: 450, size: 4 },
    { x: 350, y: 850, size: 5 },
    { x: 200, y: 1100, size: 6, twinkle: true },
    { x: 650, y: 900, size: 4 }
];

import { useRouter } from 'next/navigation';

function ProjectCard({ project, containerRef }: { project: any; containerRef: React.RefObject<HTMLDivElement | null> }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / 20;
        const rotateY = (rect.width / 2 - x) / 20;

        gsap.to(cardRef.current, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1000,
            overwrite: 'auto'
        });
    };

    const onMouseLeave = () => {
        if (!cardRef.current) return;
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)"
        });
    };

    const handleProjectClick = (projectId: string) => {
        // Star Zoom Transition
        const star = document.querySelector(`circle[cx="${project.x}"][cy="${project.y}"]`);
        if (star) {
            gsap.to(star, {
                r: 1000,
                fill: "#fff",
                filter: "blur(40px)",
                duration: 0.8,
                ease: "power2.in",
                onComplete: () => {
                    router.push(`/projects/${projectId}`);
                }
            });
            gsap.to(containerRef.current, {
                scale: 2,
                opacity: 0,
                duration: 0.8,
                ease: "power2.in"
            });
        } else {
            router.push(`/projects/${projectId}`);
        }
    };

    return (
        <div
            ref={cardRef}
            data-project-id={project.id}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={() => handleProjectClick(project.id)}
            className={`absolute w-full md:w-[380px] project-card project-card-glass p-6 rounded-2xl opacity-0 z-20 transition-all duration-300 cursor-pointer ${project.anchor === 'left' ? '-translate-x-10 text-right' : 'translate-x-10'
                }`}
            style={{
                left: project.cardPos.left,
                top: project.cardPos.top,
            }}
        >
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-slate-400 mb-5 text-sm leading-relaxed">{project.shortDescription}</p>
            <div className={`flex flex-wrap gap-2 mb-4 ${project.anchor === 'left' ? 'justify-end' : ''}`}>
                {project.tags.map((tag: string) => (
                    <span key={tag} className="px-2 py-1 bg-white/5 text-slate-300 text-[10px] rounded border border-white/10 uppercase tracking-widest">
                        {tag}
                    </span>
                ))}
            </div>
            <div className={`text-xs font-bold text-blue-400 hover:text-white transition-colors flex items-center gap-1 ${project.anchor === 'left' ? 'justify-end flex-row-reverse' : ''}`}>
                <span className="tracking-widest uppercase text-[10px]">
                    Initialize Mission Deep Scan
                </span>
                <svg className={`w-3 h-3 ${project.anchor === 'left' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
}

export default function ProjectChart() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const activePathRef = useRef<SVGPathElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (!containerRef.current || !activePathRef.current) return;

        const pathLength = activePathRef.current.getTotalLength();

        // Set initial state
        gsap.set(activePathRef.current, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 30%",
                end: "bottom 90%",
                scrub: 1.5,
            }
        });

        // Animate path
        tl.to(activePathRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            duration: 10
        });

        // Animate individual stars and cards
        allStars.forEach((star, index) => {
            const starId = `#star-${index}`;
            const project = PROJECTS.find(p => p.x === star.x && p.y === star.y);

            const timeOffset = (index / allStars.length) * 10;

            tl.to(starId, {
                opacity: 1,
                fill: "#60a5fa",
                filter: "drop-shadow(0 0 15px #3b82f6)",
                scale: 1.2,
                duration: 1
            }, timeOffset);

            if (project) {
                tl.to(`[data-project-id="${project.id}"]`, {
                    opacity: 1,
                    x: 0,
                    duration: 2,
                    ease: "power2.out"
                }, timeOffset + 0.5);
            }
        });

        // Star and Card revelation is handled by the loop above in the GSAP timeline

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section id="projects" className="py-32 relative bg-transparent overflow-hidden" ref={containerRef}>
            {/* Cosmic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="mist-cloud absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full" />
                <div
                    className="mist-cloud absolute bottom-1/4 right-1/4 w-[800px] h-[800px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)' }}
                />

                {/* Nebula Dust Container */}
                <div id="nebula-dust" className="absolute inset-0 opacity-20 pointer-events-none">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <DustParticle key={i} />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-48 text-center tracking-tight">Mission Star Chart</h2>

                <div className="relative max-w-7xl mx-auto min-h-[1200px]">
                    {/* Lens Flares */}
                    <div className="flare w-24 h-24 opacity-20 absolute" style={{ left: '400px', top: '50px' }} />
                    <div className="flare w-40 h-40 opacity-10 absolute" style={{ left: '500px', top: '550px' }} />
                    {/* Constellation Map SVG */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg className="h-full w-full" viewBox="0 0 1200 1200" preserveAspectRatio="none">
                            <path
                                ref={pathRef}
                                d="M400,50 L550,250 L500,550 L850,450 L500,550 L350,850 L200,1100 L350,850 L650,900"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.05)"
                                strokeWidth="1"
                            />
                            <path
                                ref={activePathRef}
                                d="M400,50 L550,250 L500,550 L850,450 L500,550 L350,850 L200,1100 L350,850 L650,900"
                                fill="none"
                                stroke="rgba(59, 130, 246, 0.4)"
                                strokeWidth="2"
                            />

                            {allStars.map((star, i) => {
                                const project = PROJECTS.find(p => p.x === star.x && p.y === star.y);
                                return (
                                    <circle
                                        key={i}
                                        id={`star-${i}`}
                                        cx={star.x}
                                        cy={star.y}
                                        r={star.size}
                                        fill="rgba(255,255,255,0.2)"
                                        className={`star-point ${star.twinkle ? "star-twinkle" : ""} ${project ? "cursor-pointer" : ""}`}
                                        onClick={(e) => {
                                            if (!project) return;
                                            const target = e.currentTarget;
                                            gsap.to(target, {
                                                r: 1000,
                                                fill: "#fff",
                                                filter: "blur(40px)",
                                                duration: 0.8,
                                                ease: "power2.in",
                                                onComplete: () => {
                                                    router.push(`/projects/${project.id}`);
                                                }
                                            });
                                            gsap.to(containerRef.current, {
                                                scale: 2,
                                                opacity: 0,
                                                duration: 0.8,
                                                ease: "power2.in"
                                            });
                                        }}
                                    />
                                );
                            })}
                        </svg>
                    </div>

                    {/* Project Cards */}
                    {PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            containerRef={containerRef}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}
