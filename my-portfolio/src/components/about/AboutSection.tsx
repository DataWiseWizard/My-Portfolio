'use client';

import React from 'react';

// Reusable Contact Row Component
const ContactRow = ({
    icon,
    label,
    value,
    href,
    isBlurry = false
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
    isBlurry?: boolean;
}) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
        <div className="mt-1 text-gray-400 group-hover:text-blue-400 transition-colors">
            {icon}
        </div>
        <div className="flex-1">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
            {href ? (
                <a
                    href={href}
                    className={`text-sm text-gray-200 hover:text-white font-medium transition-colors ${isBlurry ? 'blur-[2px] hover:blur-none transition-all' : ''}`}
                >
                    {value}
                </a>
            ) : (
                <p className={`text-sm text-gray-200 font-medium ${isBlurry ? 'blur-[2px] hover:blur-none transition-all' : ''}`}>
                    {value}
                </p>
            )}
        </div>
    </div>
);

export const AboutSection = () => {
    return (
        <section className="py-24 border-t border-white/10" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-xs font-mono text-blue-300 uppercase tracking-widest">
                            Available for Hire
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                        Building the bridge between <br />
                        <span className="text-gray-500">logic and reality.</span>
                    </h2>

                    <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
                        <p>
                            I am a <strong>Software Engineer</strong> specializing in scalable web systems and autonomous logic.
                            While my background is rooted in full-stack architecture (Next.js, TypeScript, Cloud Infrastructure),
                            my focus has evolved toward building systems that interact with the physical world—from
                            <strong className="text-white"> computer vision pipelines</strong> to
                            <strong className="text-white"> high-frequency data visualization</strong>.
                        </p>
                        <p>
                            In the current landscape, I don't just write code that passes tests; I engineer solutions
                            that solve tangible business problems with efficiency and resilience.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="/final sample.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            Download Resume
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rudraksha-kumbhkar-269aa9297/"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white border border-white/10 font-semibold rounded-lg hover:bg-[#252525] transition-colors"
                        >
                            <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                    <div className="bg-[#121212] p-1 rounded-2xl border border-white/10">
                        <div className="bg-[#1a1a1a] rounded-xl overflow-hidden p-6 space-y-6">
                            <h3 className="text-lg font-bold text-white mb-4">Contact Coordinates</h3>
                            <div className="space-y-3">
                                <ContactRow
                                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                    label="Email Address"
                                    value="rudrakshacode348@gmail.com"
                                />
                                <ContactRow
                                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                    label="Phone"
                                    value="+91 73899 74318"
                                    isBlurry={false}
                                />
                                <ContactRow
                                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                    label="Current Residence"
                                    value="Bhopal, India"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};