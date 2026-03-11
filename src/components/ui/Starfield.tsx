'use client';

import React, { useEffect, useRef } from 'react';

interface StarConfig {
    count: number;
    baseSize: number;
    maxSpeed: number;
    parallaxFactor: number;
    opacity: number;
}

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scrollYRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let layers: Star[][] = [];
        const layerConfigs: StarConfig[] = [
            { count: 800, baseSize: 0.7, maxSpeed: 0.05, parallaxFactor: 0.1, opacity: 0.5 }, // Background
            { count: 400, baseSize: 1.4, maxSpeed: 0.1, parallaxFactor: 0.3, opacity: 0.8 }, // Midground
            { count: 120, baseSize: 2.5, maxSpeed: 0.2, parallaxFactor: 0.8, opacity: 1.0 }  // Foreground
        ];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Star {
            x: number = 0;
            y: number = 0;
            size: number = 0;
            speed: number = 0;
            opacity: number = 0;
            config: StarConfig;

            constructor(config: StarConfig) {
                this.config = config;
                this.reset(true);
            }

            reset(initial = false) {
                this.x = Math.random() * canvas!.width;
                this.y = initial ? Math.random() * canvas!.height : canvas!.height + 10;
                this.size = Math.random() * this.config.baseSize;
                this.speed = Math.random() * this.config.maxSpeed + 0.02;
                this.opacity = Math.random() * 0.5 + this.config.opacity - 0.2;
            }

            update(scrollY: number) {
                this.y -= this.speed;
                const parallaxY = this.y - (scrollY * this.config.parallaxFactor);
                if (parallaxY < -100) {
                    this.y += canvas!.height + 200;
                }
            }

            draw(effectiveScrollY: number) {
                if (!ctx) return;
                const drawY = (this.y - (effectiveScrollY * this.config.parallaxFactor)) % (canvas!.height + 200);
                const finalY = drawY < -100 ? drawY + canvas!.height + 200 : drawY;

                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, finalY, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initStars = () => {
            layers = layerConfigs.map(config => {
                const layer: Star[] = [];
                for (let i = 0; i < config.count; i++) {
                    layer.push(new Star(config));
                }
                return layer;
            });
        };

        const animateStars = () => {
            // Add a subtle nebula gradient background to the canvas
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width
            );
            gradient.addColorStop(0, '#050a15');
            gradient.addColorStop(1, '#000000');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            layers.forEach(layer => {
                layer.forEach(star => {
                    star.update(window.scrollY);
                    star.draw(window.scrollY);
                });
            });
            requestAnimationFrame(animateStars);
        };

        const onResize = () => {
            resize();
            initStars();
        };

        window.addEventListener('resize', onResize);
        resize();
        initStars();
        animateStars();

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
            id="starfield"
        />
    );
}
