import { BentoGrid } from '@/components/bento/BentoGrid';
import { KineticHero } from '@/components/hero/KineticHero';
import { ConversationalForm } from '../components/contact/ConversationForm';
import { AboutSection } from '@/components/about/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-blue-500/30">
      <KineticHero />
      <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-semibold text-gray-200">Architectural Logs</h2>
            <span className="text-xs font-mono text-gray-500">2025 — 2026</span>
          </div>

          <BentoGrid />
        </section>
        <AboutSection />
        <ConversationalForm />
      </div>
    </main>
  );
}