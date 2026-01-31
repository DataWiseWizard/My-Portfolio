import Link from 'next/link';
import { SimulationTerminal } from '@/components/lab/SimulationTerminal';

export default function DroneLab() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 pb-24">
            <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-mono text-blue-300 uppercase tracking-widest">
                        Research In Progress
                    </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
                    Autonomous <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        Navigation Logic.
                    </span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <p className="text-xl text-gray-400 leading-relaxed">
                            I am currently bridging the gap between <strong className="text-gray-100">Full-Stack Architecture</strong> and <strong className="text-gray-100">Robotics</strong>.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My research focuses on <strong>Low-Latency Telemetry</strong>—building the web sockets and data pipelines required to stream LIDAR and optical flow data from a drone to a client browser in real-time.
                        </p>

                        <div className="pt-8">
                            <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Current Focus</h3>
                            <ul className="space-y-3">
                                {[
                                    'Optical Flow using OpenCV & Node.js',
                                    'WebSocket Latency Optimization (< 50ms)',
                                    'Sensor Fusion (LIDAR + Camera)'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20" />
                        <SimulationTerminal />
                        <p className="text-xs text-center text-gray-500 mt-4 font-mono">
                            *Live simulation of telemetry packet structure
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-6 mt-20">
                <h2 className="text-3xl font-bold mb-8">The Engineering Challenge</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#121212] border border-white/10">
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">The Constraint</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Drone hardware (Raspberry Pi/Jetson Nano) has limited compute power.
                            Running heavy ML models on-device drains battery and introduces lag.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#121212] border border-white/10">
                        <h3 className="text-lg font-semibold text-purple-300 mb-2">The Hypothesis</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            By offloading heavy processing to a <strong>Node.js Edge Server</strong> via optimized
                            UDP streams, we can achieve complex object detection without upgrading onboard hardware.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 mt-32 border-t border-white/10 pt-12 flex justify-between items-center">
                <Link href="/" className="text-gray-500 hover:text-white transition-colors">
                    ← Back to Command Center
                </Link>
                <Link href="/case-studies/se-docx" className="text-gray-500 hover:text-white transition-colors">
                    Next Log: Security Architecture →
                </Link>
            </section>

        </main>
    );
}