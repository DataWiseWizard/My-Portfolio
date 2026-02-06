'use client';

export const ExperienceSection = () => {
  return (
    <section className="py-12 border-t border-white/10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-white">Certification & Experience</h2>
      </div>

      <div className="group relative pl-8 border-l border-white/10">
        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-[#121212]" />
        
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
          <h3 className="text-xl font-bold text-white">Web Dev Internship</h3>
          <span className="text-sm font-mono text-gray-500">Nov_2025 — Feb_2026</span>
        </div>
        
        <div className="text-gray-400 mb-4">
          Experience and knowledge polishing projects helping to become a qualified professional.
          <span className="block text-sm text-gray-500 mt-1">Unified Mentors</span>
        </div>
      </div>

      <div className="group relative pl-8 border-l border-white/10">
        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-[#121212]" />
        
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
          <h3 className="text-xl font-bold text-white">Specialization in AI/ML With Drone Tech</h3>
          <span className="text-sm font-mono text-gray-500">2025 — Present</span>
        </div>
        
        <div className="text-gray-400 mb-4">
          Automation and innovation in drone tech
          <span className="block text-sm text-gray-500 mt-1">iHub DivyaSampark, IIT Roorkie</span>
        </div>
      </div>
    </section>
  );
};