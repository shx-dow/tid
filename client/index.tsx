import { useState } from "preact/hooks";
import { ideas } from "../shared/ideas";

function Hero() {
  return (
    <section className="pb-6 pt-16 sm:pb-8 sm:pt-20">
      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
        theo<span className="text-white">ideadump</span>
      </h1>
      <p className="mt-3 max-w-4xl text-lg leading-relaxed text-neutral-400">
        <a href="https://x.com/theo" target="_blank" rel="noopener noreferrer" className="text-yellow-400/70 hover:text-yellow-400">@theo</a> has been keeping a list of ideas he wishes somebody would build.
        He shared all of them. Here they are.
      </p>
      <a
        href="https://youtu.be/wEAb0x3wTRc"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
        </svg>
        Watch the original video
      </a>
    </section>
  );
}

function QuoteBanner() {
  return (
    <div className="mt-6 mb-12 text-center">
      <div className="mx-auto max-w-3xl">
        <span className="block text-6xl leading-none text-yellow-400/20 select-none">&ldquo;</span>
        <blockquote className="-mt-3 text-xl italic leading-relaxed text-neutral-400">
          It's time to build bigger stuff. Go kick up an agent and try one of these things out.
          I bet you'll be surprised just how far you can go.
        </blockquote>
        <p className="mt-6 text-sm text-neutral-600">~ Theo</p>
      </div>
    </div>
  );
}

function IdeaSection({ heading, points }: { heading: string; points: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-3">{heading}</h3>
      <div className="space-y-3">
        {points.map((point, i) => (
          <p key={i} className="pl-5 text-neutral-300 leading-relaxed border-l border-neutral-800/70">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}

function IdeaCard({ idea, index }: { idea: typeof ideas[number]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div id={idea.title.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-12 border-b border-neutral-800/50 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-3 py-5 text-left group cursor-pointer">
        <span className="font-mono text-sm text-neutral-600 w-5 shrink-0">{index + 1}.</span>
        <svg
          className={`h-3 w-3 shrink-0 text-neutral-600 transition-transform ${open ? "rotate-90" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        <div className="min-w-0">
          <h2 className="text-lg font-semibold tracking-tight group-hover:text-neutral-200 transition-colors">{idea.title}</h2>
          <p className="text-sm text-neutral-500 truncate">{idea.tagline}</p>
        </div>
      </button>
      {open && (
        <div className="pb-6 pl-12 space-y-6">
          {idea.sections.map((section) => (
            <IdeaSection key={section.heading} heading={section.heading} points={section.points} />
          ))}
        </div>
      )}
    </div>
  );
}
function FooterSection() {
  return (
    <footer className="mt-20 border-t border-neutral-800/60 pt-10 pb-6">
      <div className="text-center">
        <p className="text-xs text-neutral-600">building one of these? <a href="https://x.com/_chitransh09" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition-colors">dm me your repo</a></p>
      </div>
      <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-xs text-neutral-600">
        <a href="https://github.com/shx-dow/wtw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a href="https://x.com/_chitransh09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&display=swap');`}</style>
      <div className="mx-auto max-w-6xl px-8 py-8 sm:px-12 lg:px-16">
        <Hero />
        <QuoteBanner />
        <div>
          {ideas.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
