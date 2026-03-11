'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const skillData = [
    {
        name: 'HTML5',
        color: '#E34F26',
        radius: 100,
        speed: 0.003,
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        name: 'JavaScript',
        color: '#F7DF1E',
        radius: 130,
        speed: 0.004,
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        name: 'CSS3',
        color: '#1572B6',
        radius: 160,
        speed: 0.0025,
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        name: 'Node.js',
        color: '#339933',
        radius: 190,
        speed: 0.0018,
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
        name: 'MongoDB',
        color: '#47A248',
        radius: 220,
        speed: 0.0012,
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
        name: 'MySQL',
        color: '#4479A1',
        radius: 250,
        speed: 0.0035,
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
        name: 'ASP.NET Core',
        color: '#512BD4',
        radius: 280,
        speed: 0.0028,
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
    },
    {
        name: 'Flutter',
        color: '#02569B',
        radius: 310,
        speed: 0.0015,
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
    }
];

export default function SkillsOrbit() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="skills" className="py-24 bg-transparent overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
                >
                    Tech Constellation
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 max-w-2xl mx-auto"
                >
                    Orbiting my core expertise are the tools I use to build scalable mission-critical logic.
                </motion.p>
            </div>

            <div
                className="relative h-[700px] w-full flex justify-center items-center cursor-crosshair group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* The Sun - Enhanced Glow */}
                <div className="relative z-10">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-[40px] opacity-50 animate-pulse" />
                    <div className="sun w-24 h-24 bg-gradient-to-br from-white via-blue-400 to-blue-600 rounded-full shadow-[0_0_80px_rgba(59,130,246,0.8)] relative z-10 transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-white rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Orbits and Planets */}
                {skillData.map((skill, index) => (
                    <OrbitingPlanet key={skill.name} skill={skill} isSystemHovered={isHovered} />
                ))}
            </div>
        </section>
    );
}

function OrbitingPlanet({ skill, isSystemHovered }: { skill: typeof skillData[0], isSystemHovered: boolean }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const angleRef = useRef(Math.random() * Math.PI * 2);

    useEffect(() => {
        let animationFrameId: number;

        const move = () => {
            // Slow down when system is hovered
            const currentSpeed = isSystemHovered ? skill.speed * 0.2 : skill.speed;
            angleRef.current += currentSpeed;
            const x = Math.cos(angleRef.current) * skill.radius;
            const y = Math.sin(angleRef.current) * skill.radius;
            setPosition({ x, y });
            animationFrameId = requestAnimationFrame(move);
        };

        move();
        return () => cancelAnimationFrame(animationFrameId);
    }, [skill.radius, skill.speed, isSystemHovered]);

    return (
        <>
            {/* Orbit Line */}
            <div
                className={`absolute border border-white/5 rounded-full pointer-events-none transition-colors duration-500 ${isSystemHovered ? 'border-white/20' : ''}`}
                style={{
                    width: skill.radius * 2,
                    height: skill.radius * 2,
                }}
            />

            {/* Planet */}
            <motion.div
                className="absolute z-20 flex flex-col items-center justify-center group/planet"
                style={{
                    x: position.x,
                    y: position.y,
                }}
            >
                {/* Planet Circle with Official Icon */}
                <div
                    className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/20 bg-black/95 shadow-lg transition-all duration-500 group-hover/planet:scale-125 group-hover/planet:z-30 p-2.5"
                    style={{
                        borderColor: skill.color,
                        boxShadow: `0 0 25px ${skill.color}88`,
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-full opacity-10 group-hover/planet:opacity-50 transition-opacity"
                        style={{ backgroundColor: skill.color }}
                    />
                    <img
                        src={skill.iconUrl}
                        alt={skill.name}
                        className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]"
                    />
                </div>

                {/* Tooltip Name */}
                <div className="mt-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] opacity-0 group-hover/planet:opacity-100 transition-opacity whitespace-nowrap">
                    {skill.name}
                </div>
            </motion.div>
        </>
    );
}
