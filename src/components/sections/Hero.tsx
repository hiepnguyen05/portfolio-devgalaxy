'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                        }
                    }
                }}
                className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
            >
                <div className="z-10">
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
                    >
                        Cosmos Developer | <span className="text-blue-500">Nguyễn Ngọc Hiệp</span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xl text-slate-400 mb-8 max-w-lg"
                    >
                        Architecting high-performance backend systems and scalable mission-critical logic across the digital void.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.8 }}
                        className="flex gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                        >
                            Explore Missions
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1j_RNvTEQ9z1vFELwcv7wGrbXPE-aSWqP/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-slate-700 hover:bg-slate-800 rounded-full font-semibold transition-all"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative w-80 h-80"
                    >
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl0n8VHanzn_M2OBbAPt2CiH77z3PIcH3izLgnRg9X_XTX7Qrr7tzj3ABdvhp4uwCGG482xgGcqUsD4bUMYKtryQ-9ArEMsbQjyQmJTilBiN7_JmTtniaveu4Gzebh1KLYt8OSQx25buwuVxhynrc19VjQO0Sm5-x4NzrQQ5rpsY72yGiHcR_xaCeMFkggCpxdHVyrxv_4EBbNQxvPMYMdpj2mUZDV__lLl_GGeasbXY8ZraibZMUH_pF1UCNqjY1xaY9bdJo9IFg"
                            alt="Floating Astronaut"
                            width={320}
                            height={320}
                            className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
