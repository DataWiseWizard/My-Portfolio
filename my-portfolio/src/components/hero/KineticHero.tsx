'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const KineticHero = () => {
    const container = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: 'bottom center',
                scrub: 1,
            },
        });

        tl.to('.hero-word-1', { x: -100, opacity: 0.2, filter: 'blur(10px)' }, 0);
        tl.to('.hero-word-2', { x: 100, opacity: 0.2, filter: 'blur(10px)' }, 0);
        tl.to(subRef.current, { y: 50, opacity: 0, scale: 0.8 }, 0);

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#121212] to-[#121212] -z-10" />

            <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="text-blue-400 font-mono text-xs tracking-wider uppercase">
                    System Status: Online
                </span>
            </div>
            <h1
                ref={titleRef}
                className="text-6xl md:text-9xl font-bold tracking-tighter text-center leading-[0.9] mix-blend-screen"
            >
                <div className="hero-word-1 inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    Web Dev + AI/ML
                </div>
                <br />
                <div className="hero-word-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Devloper
                </div>
            </h1>
            <p
                ref={subRef}
                className="mt-8 text-xl text-gray-400 max-w-xl text-center leading-relaxed"
            >
                Architecting autonomous logic and <br />
                high-fidelity systems for the 2026 landscape.
            </p>
            <div className="absolute bottom-10 animate-bounce text-gray-600 text-sm font-mono">
                ↓ SCROLL TO INITIALIZE
            </div>
        </section>
    );
};