import Link from 'next/link';

export default function VisualLabCaseStudy() {
    return (
        <main className="min-h-screen bg-[#121212] text-white selection:bg-orange-500/30 pb-24">

            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-[#121212] to-[#121212]" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                        <span className="text-xs font-mono text-orange-300 uppercase tracking-widest">
                            Audio Engineering
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Sonic Canvas.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                        High-performance audio visualization using <br />
                        <span className="text-gray-100 font-semibold">Web Audio API</span> and <span className="text-gray-100 font-semibold">HTML5 Canvas</span>.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <aside className="md:col-span-4 space-y-8">
                    <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Next.js', 'TypeScript', 'Web Audio API', 'Canvas API', 'Zustand'].map((tech) => (
                                <span key={tech} className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/5">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Repo Access</h3>
                        <Link
                            href="https://github.com/datawisewizard/music-player"
                            target="_blank"
                            className="block w-full text-center py-3 rounded-xl bg-orange-600 hover:bg-orange-500 transition-colors font-medium text-white"
                        >
                            View Source Code
                        </Link>
                    </div>
                </aside>

                <article className="md:col-span-8 space-y-16">

                    <section>
                        <h2 className="text-3xl font-bold mb-6">The "Invisible" Data Stream</h2>
                        <p className="text-gray-400 leading-7 mb-6">
                            Audio is usually an invisible data stream. I wanted to transform it into a tangible,
                            visual experience. This required bridging the gap between the <code className="text-orange-400">AudioContext</code>
                            and the <code className="text-orange-400">CanvasRenderingContext2D</code>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Maintaining 60 FPS</h2>
                        <p className="text-gray-400 leading-7 mb-6">
                            The challenge with real-time visualization is performance. A naive implementation using standard React state
                            would trigger re-renders 60 times a second, crashing the browser.
                        </p>
                        <p className="text-gray-400 leading-7 mb-8">
                            I solved this by decoupling the animation loop from React's render cycle. I used a
                            <code className="text-orange-400">useRef</code> to hold the canvas reference and ran the
                            visualization logic inside a native <code className="text-orange-400">requestAnimationFrame</code> loop.
                        </p>

                        <div className="rounded-xl bg-[#0a0a0a] border border-white/10 p-6 font-mono text-xs overflow-x-auto relative">
                            <div className="absolute top-4 right-4 text-[10px] text-gray-600">src/components/Visualizer.tsx</div>
                            <div className="text-gray-300">
                                <span className="text-purple-400">const</span> draw = () ={'>'} {'{'}<br />
                                &nbsp;&nbsp;requestAnimationFrame(draw);<br />
                                &nbsp;&nbsp;analyser.getByteFrequencyData(dataArray);<br />
                                <br />
                                &nbsp;&nbsp;<span className="text-gray-500">// Direct Canvas Manipulation (No React Re-renders)</span><br />
                                &nbsp;&nbsp;canvasCtx.fillStyle = <span className="text-green-300">'rgb(0, 0, 0)'</span>;<br />
                                &nbsp;&nbsp;canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);<br />
                                {'}'}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">State Management with Zustand</h2>
                        <p className="text-gray-400 leading-7">
                            Managing a global audio player state (Play/Pause/Next) across multiple components can lead to "Prop Drilling" hell.
                            I utilized <strong>Zustand</strong> for a lightweight, hook-based store that allows any component
                            to control the playback engine without unnecessary re-renders.
                        </p>
                    </section>

                </article>
            </div>
            <section className="max-w-7xl mx-auto px-6 mt-32 border-t border-white/10 pt-12 flex justify-between items-center">
                <Link href="/" className="text-gray-500 hover:text-white transition-colors">
                    ← Back to Command Center
                </Link>
            </section>

        </main>
    );
}