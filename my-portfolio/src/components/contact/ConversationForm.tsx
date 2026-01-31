'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ConversationalForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({ intent: '', timeline: '', email: '' });
    const questions = [
        {
            id: 'intent',
            text: "Hello! To respect your time, what brings you here today?",
            options: ["Recruiting for a role", "Project collaboration", "Just saying hi"],
        },
        {
            id: 'timeline',
            text: "Understood. What is your ideal timeline for this?",
            options: ["Immediately (Urgent)", "Next few weeks", "Flexible / Future"],
        },
        {
            id: 'email',
            text: "Perfect. Where should I send my availability?",
            type: 'email',
            placeholder: "name@company.com"
        }
    ];

    const handleOption = (value: string) => {
        setFormData({ ...formData, [questions[step].id]: value });
        setStep(step + 1);
    };

    const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep(step + 1);
    };

    return (
        <section className="py-24 px-6 max-w-2xl mx-auto min-h-[50vh] flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-purple-400 font-mono text-xs tracking-wider uppercase">
                    Transmission Link
                </span>
            </div>

            <AnimatePresence mode='wait'>
                {step < questions.length ? (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            {questions[step].text}
                        </h2>

                        {questions[step].options ? (
                            <div className="flex flex-wrap gap-3">
                                {questions[step].options?.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOption(option)}
                                        className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all text-gray-300 text-sm md:text-base"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <form onSubmit={handleEmail} className="flex gap-4">
                                <input
                                    type="email"
                                    required
                                    placeholder={questions[step].placeholder}
                                    className="flex-1 bg-transparent border-b border-white/20 py-2 text-2xl focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 rounded-full font-medium hover:bg-blue-500 transition-colors"
                                >
                                    Send
                                </button>
                            </form>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-12 rounded-3xl bg-[#1a1a1a] border border-white/10"
                    >
                        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            ✓
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Received.</h3>
                        <p className="text-gray-400">
                            I'll analyze your request and respond within 24 hours.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};