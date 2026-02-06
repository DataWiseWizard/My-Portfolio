'use client';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
    <div className="space-y-3">
        <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-gray-300 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export const SkillsSection = () => {
    return (
        <section className="py-16 border-t border-white/10">
            <div className="flex items-center gap-2 mb-12">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h2 className="text-2xl font-semibold text-white">Technical Arsenal</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <SkillCategory
                    title="Core Stack"
                    skills={['Next.js 14', 'JavaScript', 'TypeScript', 'Java', 'Python', 'React', 'Vanilla', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JWT', 'Sckit Learn', 'numpy']}
                />
                <SkillCategory
                    title="Systems & AI"
                    skills={['Python', 'System Architecture', 'Firebase']}
                />
                <SkillCategory
                    title="Tools & Environment"
                    skills={['Git', 'Render', 'Postman', 'Vercel']}
                />
            </div>
        </section>
    );
};