import { BentoGrid } from '@/components/bento/BentoGrid';
import { KineticHero } from '@/components/hero/KineticHero';
import { ConversationalForm } from '../components/contact/ConversationForm';
import { AboutSection } from '@/components/about/AboutSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { EducationSection } from '@/components/education/EducationSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection'

const Footer = () => (
  <footer className="border-t border-white/10 py-8 mt-12 text-center text-gray-600 text-sm">
    <div className="flex justify-center gap-6 mb-4">
      <a href="https://github.com/DataWiseWizard" className="hover:text-blue-400 transition-colors">GitHub</a>
      <a href="https://www.linkedin.com/in/rudraksha-kumbhkar-269aa9297/" className="hover:text-blue-400 transition-colors">LinkedIn</a>
    </div>
    <p>© {new Date().getFullYear()} - Engineering Portfolio</p>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-blue-500/30">
      <KineticHero />
      <div className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
        <section id="work" className="mb-24">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-semibold text-gray-200">Selected Works</h2>
            <span className="text-xs font-mono text-gray-500">ENGINEERING LOGS</span>
          </div>
          <BentoGrid />
        </section>
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ConversationalForm />
        <Footer />
      </div>
    </main>
  );
}