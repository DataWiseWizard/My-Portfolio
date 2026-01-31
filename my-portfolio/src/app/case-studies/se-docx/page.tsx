import Link from 'next/link';
import { EncryptionPipeline } from '@/components/security/EncryptionPipeline';

export default function SeDocxCaseStudy() {
    return (
        <main className="min-h-screen bg-[#121212] text-white selection:bg-green-500/30 pb-24">
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-[#121212] to-[#121212]" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-mono text-green-300 uppercase tracking-widest">
                            Zero-Trust Architecture
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        SE-Docx.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                        A government-grade document vault featuring <br />
                        <span className="text-gray-100 font-semibold">Stream-Based Encryption</span> and <span className="text-gray-100 font-semibold">Immutable Audit Logs</span>.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <aside className="md:col-span-4 space-y-8">
                    <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Security Stack</h3>
                        <div className="flex flex-col gap-2">
                            {['AES-256-GCM', 'MongoDB GridFS', 'Helmet.js', 'Express Rate Limit', 'JWT'].map((tech) => (
                                <div key={tech} className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="text-green-500">✓</span> {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Repo Access</h3>
                        <Link
                            href="https://github.com/datawisewizard/se-docx"
                            target="_blank"
                            className="block w-full text-center py-3 rounded-xl bg-green-700 hover:bg-green-600 transition-colors font-medium text-white"
                        >
                            View Source Code
                        </Link>
                    </div>
                </aside>

                <article className="md:col-span-8 space-y-16">
                    <section>
                        <h2 className="text-3xl font-bold mb-6">The "Zero-Leak" Protocol</h2>
                        <p className="text-gray-400 leading-7 mb-8">
                            Storing sensitive data (like Aadhaar cards) requires more than just a password.
                            My objective was to ensure that even if the database was leaked, the files would remain
                            mathematically unreadable.
                        </p>

                        <EncryptionPipeline />
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Non-Repudiation (Audit Trails)</h2>
                        <p className="text-gray-400 leading-7 mb-6">
                            In secure systems, "who did what" is as important as the data itself. I implemented
                            an immutable logging system that tracks every <code className="text-green-400">VIEW</code>,
                            <code className="text-green-400">UPLOAD</code>, and <code className="text-green-400">SHARE</code> event.
                        </p>

                        <div className="rounded-xl bg-[#0a0a0a] border border-white/10 p-6 font-mono text-xs">
                            <div className="text-gray-500 mb-2">// server/models/AuditLog.js</div>
                            <div className="space-y-1 text-gray-300">
                                <span className="text-purple-400">const</span> auditSchema = <span className="text-purple-400">new</span> Schema({'{'}
                                <br />&nbsp;&nbsp;action: {'{'} type: String, enum: ['LOGIN', 'UPLOAD', 'VIEW'] {'}'},
                                <br />&nbsp;&nbsp;user: {'{'} type: Schema.Types.ObjectId, ref: 'User' {'}'},
                                <br />&nbsp;&nbsp;ipAddress: String,
                                <br />&nbsp;&nbsp;timestamp: {'{'} type: Date, default: Date.now {'}'}
                                <br />{'}'});
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Ephemeral Access Control</h2>
                        <p className="text-gray-400 leading-7">
                            To prevent "permission creep," I built a sharing system that automatically revokes access.
                            When a user shares a document, they define a `validUntil` timestamp. The backend middleware
                            checks this timestamp on every request, denying access instantly upon expiration.
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