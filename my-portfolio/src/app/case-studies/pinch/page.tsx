import Link from 'next/link';

export default function PinchCaseStudy() {
    return (
        <main className="min-h-screen bg-[#121212] text-white selection:bg-purple-500/30 pb-24">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#121212] to-[#121212]" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">
                            AI-Native Architecture
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Pinch.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                        A visual discovery engine powered by <span className="text-gray-100 font-semibold">Gemini 1.5 Flash</span> and <span className="text-gray-100 font-semibold">Vector Embeddings</span>.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <aside className="md:col-span-4 space-y-8 h-fit md:sticky md:top-24">
                    <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Google Gemini 1.5', 'MongoDB Vector Search', 'Pollinations.ai', 'React', 'Node.js'].map((tech) => (
                                <span key={tech} className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/5">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/10">
                        <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Repo Access</h3>
                        <Link
                            href="https://github.com/datawisewizard/pinch"
                            target="_blank"
                            className="block w-full text-center py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors font-medium text-white"
                        >
                            View Source Code
                        </Link>
                    </div>
                </aside>

                <article className="md:col-span-8 space-y-16">
                    <section>
                        <h2 className="text-3xl font-bold mb-6">The "Zero-Tag" Constraint</h2>
                        <p className="text-gray-400 leading-7 mb-6">
                            In traditional visual platforms, discovery relies on users manually tagging their uploads.
                            This is unscalable and prone to human error. I needed a system that could "see" an image
                            and understand its context without user intervention.
                        </p>

                        <div className="p-6 rounded-2xl bg-black/50 border border-purple-500/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-purple-500/10 px-4 py-1 rounded-bl-xl text-xs font-mono text-purple-400">
                                Architectural Decision
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Solution: Gemini 1.5 Flash</h3>
                            <p className="text-gray-400 text-sm">
                                I integrated Google's Gemini 1.5 Flash model to auto-generate context-aware tags and descriptions upon upload.
                                This reduced the "Time-to-Discovery" for new content by <strong>100%</strong> (eliminating manual entry).
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Implementing "Vibe Check"</h2>
                        <p className="text-gray-400 leading-7 mb-6">
                            Keyword search is brittle. Users often want to find images that "feel" like another image,
                            even if they don't share the same text tags.
                        </p>
                        <p className="text-gray-400 leading-7 mb-6">
                            I implemented a <strong>Hybrid Recommendation Engine</strong> using MongoDB Atlas Vector Search.
                            By converting image context into vector embeddings, the "Vibe Check" feature allows users to
                            perform semantic searches, finding visually and conceptually similar content instantly.
                        </p>

                        <div className="relative rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 font-mono text-sm overflow-x-auto">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <code className="text-gray-300">
                                <span className="text-purple-400">const</span> <span className="text-blue-400">vectorSearch</span> = <span className="text-purple-400">await</span> collection.<span className="text-yellow-300">aggregate</span>([<br />
                                &nbsp;&nbsp;{'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"$vectorSearch"</span>: {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queryVector: embedding,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path: <span className="text-green-300">"plot_embedding"</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numCandidates: <span className="text-orange-400">100</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limit: <span className="text-orange-400">5</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                                &nbsp;&nbsp;{'}'}<br />
                                ]);
                            </code>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Handling Hallucinations</h2>
                        <p className="text-gray-400 leading-7">
                            One challenge was the AI occasionally generating confident but incorrect tags (hallucinations).
                            I mitigated this by implementing a <strong>Confidence Threshold</strong> and a user-feedback loop
                            where users can "downvote" irrelevant tags, which fine-tunes the future search relevance.
                        </p>
                    </section>

                    <section className="border-t border-white/10 pt-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold">The "Pinterest" Protocol</h2>
                        </div>

                        <p className="text-gray-400 leading-7 mb-8">
                            Generic image analysis returns generic tags (e.g., "sky", "car"). For Pinch, I needed
                            <strong> aesthetic descriptors</strong> to match the "Pinterest Vibe." I engineered a specific
                            prompt for the <code className="text-purple-300 bg-purple-900/20 px-1 py-0.5 rounded">gemini-2.5-flash-lite</code> model
                            that forces a strict JSON schema.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden">
                                <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-mono text-gray-500">server/utils/ai.js</span>
                                    <span className="text-xs font-mono text-green-400">Prompt Engineering</span>
                                </div>
                                <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-gray-300">
                                    <span className="text-purple-400">const</span> prompt = `<br />
                                    &nbsp;&nbsp;Analyze this image for a <span className="text-yellow-300">Pinterest-style feed</span>.<br />
                                    &nbsp;&nbsp;Return a <span className="text-red-400">purely JSON object</span> (no markdown).<br />
                                    &nbsp;&nbsp;Structure:<br />
                                    &nbsp;&nbsp;{'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;"tags": ["5-8", "adjectives", "describing", <span className="text-yellow-300">"vibe"</span>],<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;"description": "Concise visual description..."<br />
                                    &nbsp;&nbsp;{'}'}`;
                                </div>
                            </div>

                            <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden flex flex-col justify-center p-6">
                                <h3 className="text-lg font-semibold mb-3">Sanitizing LLM Output</h3>
                                <p className="text-sm text-gray-400 mb-4">
                                    LLMs often wrap JSON in markdown backticks. I implemented a regex cleaner to prevent
                                    <code className="mx-1 text-red-300">JSON.parse()</code> errors in production.
                                </p>
                                <div className="bg-black/50 rounded-lg p-4 border border-white/5 font-mono text-xs">
                                    <span className="text-gray-500">// Clean up markdown artifacts</span><br />
                                    text = text.<span className="text-blue-400">replace</span>(/```json/g, '').<span className="text-blue-400">replace</span>(/```/g, '').<span className="text-blue-400">trim</span>();
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                Vector Embedding Pipeline
                            </h3>
                            <p className="text-gray-400 leading-7 max-w-3xl">
                                To enable semantic search, I pass the generated description and tags into the
                                <code className="mx-1 text-blue-300">text-embedding-004</code> model. This converts the
                                "vibe" of the image into an array of floating-point numbers, which are stored in MongoDB
                                for vector similarity matching.
                            </p>
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