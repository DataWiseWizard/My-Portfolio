'use client';

export const EducationSection = () => {
  return (
    <section className="py-12 border-t border-white/10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
      </div>

      <div className="group relative pl-8 border-l border-white/10">
        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-[#121212]" />
        
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
          <h3 className="text-xl font-bold text-white">Bachelor of Technology (B.Tech)</h3>
          <span className="text-sm font-mono text-gray-500">2023 — Present</span>
        </div>
        
        <div className="text-gray-400 mb-4">
          Computer Science & Engineering
          <span className="block text-sm text-gray-500 mt-1">Barkatullah University Institute of Technology, Bhopal</span>
        </div>
      </div>
    </section>
  );
};