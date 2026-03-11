'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const achievementData = [
    { label: 'Projects Completed', target: 12 },
    { label: 'Core Technologies', target: 8 },
    { label: 'Code Transmissions', target: 500 },
    { label: 'Academic Honors', target: 2 },
];

export default function Achievements() {
    return (
        <section className="py-24 border-y border-white/5 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {achievementData.map((item, index) => (
                        <CounterItem key={index} label={item.label} target={item.target} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CounterItem({ label, target }: { label: string; target: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <div ref={ref}>
            <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                {count}+
            </div>
            <div className="text-slate-500 uppercase text-[10px] tracking-[0.3em]">
                {label}
            </div>
        </div>
    );
}
