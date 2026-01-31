'use client';
import { motion } from 'framer-motion';

export const EncryptionPipeline = () => {
    return (
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-20 text-8xl font-black text-gray-800 pointer-events-none select-none">
                AES
            </div>

            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Stream-Based Encryption Pipeline
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center text-xs font-mono">
                <div className="relative group">
                    <div className="w-20 h-20 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700 mb-2 z-10 relative">
                        <span className="text-2xl">📄</span>
                    </div>
                    <p className="text-gray-400">Raw File</p>
                    <p className="text-[10px] text-gray-600">(RAM Buffer)</p>
                </div>

                <div className="flex-1 h-1 bg-gray-800 relative w-full md:w-auto my-4 md:my-0">
                    {/* <motion.div
                        className="absolute inset-0 bg-blue-500"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    /> */}
                </div>

                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-blue-900/20 border border-blue-500/50 flex flex-col items-center justify-center mb-2 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                        <span className="text-blue-400 font-bold">AES-256</span>
                        <span className="text-[9px] text-blue-300">GCM Mode</span>
                    </div>
                    <p className="text-blue-400">Transformation</p>
                </div>

                <div className="flex-1 h-1 bg-gray-800 relative w-full md:w-auto my-4 md:my-0">
                    {/* <motion.div
                        className="absolute inset-0 bg-green-500"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "linear" }}
                    /> */}
                </div>

                <div>
                    <div className="w-20 h-20 rounded-xl bg-green-900/10 flex items-center justify-center border border-green-500/30 mb-2">
                        <span className="text-2xl">🔒</span>
                    </div>
                    <p className="text-green-400">Encrypted Blob</p>
                    <p className="text-[10px] text-gray-600">(MongoDB GridFS)</p>
                </div>

            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-sm text-gray-400">
                <p>
                    <span className="text-green-400 font-bold">Why Stream?</span> Traditional uploads load the full file into RAM, crashing servers under load. My implementation uses <code className="bg-gray-800 px-1 rounded text-gray-200">fs.createReadStream()</code> to pipe data directly through the cipher to the DB, keeping RAM usage constant (O(1)).
                </p>
            </div>
        </div>
    );
};