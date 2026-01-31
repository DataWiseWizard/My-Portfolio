import Link from 'next/link';

export default function ClinicCaseStudy() {
    return (
        <main className="min-h-screen bg-[#121212] text-white selection:bg-blue-500/30 pb-24">
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#121212] to-[#121212]" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-xs font-mono text-blue-300 uppercase tracking-widest">
                            Real-Time Synchronization
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Clinic OS.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                        Eliminating physical waiting room chaos with <br />
                        <span className="text-gray-100 font-semibold">Live Queue Telemetry</span> and <span className="text-gray-100 font-semibold">Role-Based Dashboards</span>.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <aside className="md:col-span-4 space-y-8">
                    <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Firebase Realtime DB', 'React Router v6', 'Recharts', 'Tailwind'].map((tech) => (
                                <span key={tech} className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/5">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Repo Access</h3>
                        <Link
                            href="https://github.com/datawisewizard/clinic-management-system"
                            target="_blank"
                            className="block w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors font-medium text-white"
                        >
                            View Source Code
                        </Link>
                    </div>
                </aside>

                <article className="md:col-span-8 space-y-16">

                    <section>
                        <h2 className="text-3xl font-bold mb-6">The "Blind Wait" Problem</h2>
                        <p className="text-gray-400 leading-7 mb-6">
                            In traditional clinics, patients sit in a "blind queue"—they don't know when their turn is.
                            This causes anxiety for patients and repetitive questions ("How much longer?") for staff.
                        </p>
                        <p className="text-gray-400 leading-7">
                            I architected a <strong>Live Queue System</strong> where updates propagate instantly to all connected clients.
                            When a doctor clicks "Next Patient," the reception dashboard and the waiting room display update in
                            <strong>under 100ms</strong> via WebSocket connections.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Role-Based Architecture</h2>
                        <p className="text-gray-400 leading-7 mb-8">
                            Security in a medical app isn't optional. I implemented strict <strong>Route Guards</strong>
                            to ensure data isolation between the three core user personas.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { role: 'Doctor', color: 'bg-blue-500', desc: 'Write prescriptions, view history.' },
                                { role: 'Reception', color: 'bg-purple-500', desc: 'Manage queue, billing.' },
                                { role: 'Admin', color: 'bg-gray-500', desc: 'System oversight, analytics.' },
                            ].map((item) => (
                                <div key={item.role} className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10">
                                    <div className={`w-2 h-2 rounded-full ${item.color} mb-3`} />
                                    <h4 className="font-bold text-white mb-1">{item.role}</h4>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Data-Driven Operations</h2>
                        <p className="text-gray-400 leading-7 mb-6">
                            Beyond just managing the queue, the system tracks operational health.
                            Using the <code className="text-blue-400">AnalyticsDashboard.jsx</code> module,
                            administrators can visualize peak hours and patient turnaround times.
                        </p>
                        <div className="rounded-xl bg-[#0a0a0a] border border-white/10 p-6 font-mono text-xs overflow-x-auto">
                            <span className="text-purple-400">const</span> stats = calculateDailyStats(appointments);<br />
                            <span className="text-gray-500">// Returns: {'{'} total: 45, pending: 12, completed: 33 {'}'}</span>
                        </div>
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