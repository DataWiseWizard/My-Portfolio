import React from 'react';
import Link from 'next/link';

const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="text-[10px] font-medium bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/5 hover:bg-white/10 transition-colors">
        {children}
    </span>
);

const BentoItem = ({
    children,
    className = "",
    href,
    gradient = "from-blue-600/20 to-purple-600/20"
}: {
    children: React.ReactNode;
    className?: string;
    href?: string;
    gradient?: string;
}) => {
    const Content = () => (
        <div className={`
                group relative overflow-hidden rounded-3xl p-6 h-full
                bg-[#1a1a1a] border border-white/10 
                transition-all duration-300 ease-out
                hover:border-blue-400/30
                hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.15)]
                hover:-translate-y-1 
                active:scale-[0.98]
            ${className}
            `}>
            <div className={`
                absolute inset-0 bg-gradient-to-br ${gradient} 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
            `} />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );

    return href ? (
        <Link href={href} className="block h-full cursor-none">
            <Content />
        </Link>
    ) : (
        <Content />
    );
};

export const BentoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
            <BentoItem href="/case-studies/pinch" className="md:col-span-2 md:row-span-2">
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                                AI Intelligence
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Pinch</h3>
                        <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                            Autonomous image categorization engine using Google AI model.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>Computer Vision</Badge>
                        <Badge>MERN</Badge>
                        <Badge>System Architecture</Badge>
                    </div>
                </div>
            </BentoItem>

            <BentoItem href="/case-studies/se-docx" className="md:col-span-2 md:row-span-1">
                <div className="flex items-center justify-between h-full">
                    <div>
                        <h3 className="text-xl font-bold text-white">SE-Docx</h3>
                        <p className="text-sm text-gray-400 mt-1">High-security document vault.</p>
                    </div>
                    <div className="text-right hidden sm:block">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Constraint</p>
                        <div className="text-xs font-mono text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-900/30">
                            Zero-Leak Protocol
                        </div>
                    </div>
                </div>
            </BentoItem>

            <BentoItem
                href="/case-studies/drone-lab"
                className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-blue-900/10 to-black border-blue-500/20"
            >
                <div className="flex flex-col h-full justify-center items-center text-center">
                    <div className="relative w-10 h-10 mb-3 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-[spin_3s_linear_infinite]" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                    </div>
                    <h4 className="text-blue-400 font-bold text-sm">Drone Lab</h4>
                    <p className="text-[10px] text-blue-300/60 mt-1">Latency R&D: Active</p>
                </div>
            </BentoItem>

            <BentoItem className="md:col-span-1 md:row-span-1" href="/case-studies/clinic-system">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h4 className="text-gray-200 font-bold text-lg">Clinic CMS</h4>
                        <p className="text-xs text-gray-500">Real-time Firebase Queues</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-gray-500">
                            <span>Efficiency</span>
                            <span>98%</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-[98%] h-full" />
                        </div>
                    </div>
                </div>
            </BentoItem>

            <BentoItem
                className="md:col-span-2 md:row-span-1"
                gradient="from-yellow-600/20 to-orange-600/20"
                href="/case-studies/visual-lab"
            >
                <div className="flex items-center gap-4 h-full">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Visual Labs</h3>
                        <p className="text-xs text-gray-400">Tactile Audio Visualization & Maps</p>
                    </div>
                </div>
            </BentoItem>
        </div>
    );
};