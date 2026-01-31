'use client';

import { useEffect, useState, useRef } from 'react';

type LogEntry = {
    id: number;
    timestamp: string;
    module: 'LIDAR' | 'MOTOR' | 'AI_CORE' | 'NETWORK';
    message: string;
    status: 'OK' | 'WARN' | 'CRITICAL';
};

export const SimulationTerminal = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const messages = [
            { module: 'LIDAR', message: 'Point cloud density: 1400 pts/sec', status: 'OK' },
            { module: 'AI_CORE', message: 'Object detection: [Class: Tree, Conf: 0.98]', status: 'OK' },
            { module: 'MOTOR', message: 'RPM adjustment: +400 (Wind correction)', status: 'WARN' },
            { module: 'NETWORK', message: 'Latency spike detected: 140ms', status: 'WARN' },
            { module: 'AI_CORE', message: 'Path re-calculation initiated...', status: 'OK' },
        ] as const;

        const interval = setInterval(() => {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            const newLog: LogEntry = {
                id: Date.now(),
                timestamp: new Date().toISOString().split('T')[1].slice(0, -1),
                module: randomMsg.module,
                message: randomMsg.message,
                status: randomMsg.status,
            };

            setLogs((prev) => [...prev.slice(-15), newLog]); 
        }, 800);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="rounded-xl bg-black border border-white/10 overflow-hidden font-mono text-xs md:text-sm shadow-2xl">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="text-gray-400">/usr/bin/drone_telemetry</span>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
            </div>

            <div
                ref={scrollRef}
                className="h-[300px] overflow-y-auto p-4 space-y-2 scroll-smooth"
            >
                {logs.map((log) => (
                    <div key={log.id} className="flex gap-3">
                        <span className="text-gray-600 shrink-0">[{log.timestamp}]</span>
                        <span className={`
              shrink-0 w-16 font-bold
              ${log.module === 'AI_CORE' ? 'text-purple-400' : ''}
              ${log.module === 'LIDAR' ? 'text-blue-400' : ''}
              ${log.module === 'MOTOR' ? 'text-orange-400' : ''}
              ${log.module === 'NETWORK' ? 'text-gray-400' : ''}
            `}>
                            {log.module}
                        </span>
                        <span className={`
              ${log.status === 'WARN' ? 'text-yellow-300' : 'text-gray-300'}
            `}>
                            {log.message}
                        </span>
                    </div>
                ))}
                <div className="animate-pulse text-green-500">_</div>
            </div>
        </div>
    );
};