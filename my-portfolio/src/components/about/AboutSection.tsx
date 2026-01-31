'use client';

export const AboutSection = () => {
    return (
        <section className="py-24 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                            Operator Profile
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold leading-tight">
                        Engineering is not just code.<br />
                        <span className="text-gray-500">It's about resilience.</span>
                    </h2>

                    <p className="text-gray-400 leading-relaxed text-lg">
                        I started as a Full-Stack Engineer building robust systems like
                        <strong className="text-white"> SE-Docx</strong> and <strong className="text-white">Pinch</strong>.
                        But my curiosity didn't stop at the web browser.
                    </p>

                    <p className="text-gray-400 leading-relaxed text-lg">
                        Today, I am pivoting towards the physical world—applying my architectural
                        judgment to <strong className="text-blue-400">Autonomous Robotics</strong>.
                        I believe the future belongs to developers who can bridge the gap between
                        high-level AI logic and low-level hardware constraints.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-1">1.5+</h3>
                        <p className="text-sm text-gray-500">Years Full-Stack Exp.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-3xl font-bold text-blue-400 mb-1">Active</h3>
                        <p className="text-sm text-gray-500">Robotics Research</p>
                    </div>
                    <div className="col-span-2 p-6 rounded-2xl bg-[#1a1a1a] border border-white/10">
                        <h4 className="text-white font-semibold mb-2">Core Philosophy</h4>
                        <p className="text-sm text-gray-400 italic">
                            "Honest engineering means acknowledging trade-offs. I don't just build features;
                            I build systems that survive in the real world."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};