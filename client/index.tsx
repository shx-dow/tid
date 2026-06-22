import { ideas } from "../shared/ideas";

function Hero() {
  return (
    <section className="pb-12 pt-16 sm:pb-16 sm:pt-20">
      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
        theo<span className="text-white">wishes</span>
      </h1>
      <p className="mt-3 max-w-4xl text-lg leading-relaxed text-neutral-400">
        <a href="https://x.com/theo" target="_blank" rel="noopener noreferrer" className="text-yellow-400/70 hover:text-yellow-400">@theo</a> has been keeping a list of ideas he wishes somebody would build.
        He shared all of them. Here they are.
      </p>
    </section>
  );
}

function QuoteBanner() {
  return (
    <div className="my-16 text-center">
      <div className="mx-auto max-w-3xl">
        <span className="block text-6xl leading-none text-yellow-400/20 select-none">&ldquo;</span>
        <blockquote className="-mt-3 text-xl italic leading-relaxed text-neutral-400">
          Ideas are still cheap. I don't think I'm special for having a whole bunch of ideas.
          The point of this is that I've seen what you guys do when you're given ideas.
        </blockquote>
        <p className="mt-6 text-sm text-neutral-600">~ Theo</p>
      </div>
    </div>
  );
}

function IdeaSection({ heading, points }: { heading: string; points: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">{heading}</h3>
      <div className="mt-4 space-y-3">
        {points.map((point, i) => (
          <p key={i} className="pl-5 text-neutral-300 leading-relaxed border-l border-neutral-800/70">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}

function IdeaCard({ idea }: { idea: typeof ideas[number] }) {
  return (
    <article id={`idea-${idea.id}`} className="relative scroll-mt-12">
      <div className="pointer-events-none absolute -left-8 top-0 select-none font-mono text-[14rem] font-black leading-none text-white/[0.03] sm:-left-16">
        {String(idea.id).padStart(2, "0")}
      </div>
      <div className="relative">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-neutral-800" />
          <span className="font-mono text-xs text-neutral-600">Idea #{idea.id}</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{idea.title}</h2>
        <p className="mt-2 text-base leading-relaxed text-neutral-400">{idea.tagline}</p>
        <div className="mt-8 space-y-8">
          {idea.sections.map((section) => (
            <IdeaSection key={section.heading} heading={section.heading} points={section.points} />
          ))}
        </div>
      </div>
    </article>
  );
}

function FooterSection() {
  return (
    <footer className="mt-20 border-t border-neutral-800/60 pt-10 pb-6 text-center">
      <h2 className="text-2xl font-bold tracking-tight">Go build something</h2>
      <p className="mx-auto mt-4 max-w-3xl text-neutral-400 leading-relaxed">
        &ldquo;It's time to build bigger stuff. Go kick up an agent and try one of these things out.
        I bet you'll be surprised just how far you can go.&rdquo;
      </p>
      <p className="mt-4 text-sm text-neutral-600">— Theo</p>
      <div className="mx-auto mt-8 flex items-center justify-center gap-6 text-xs text-neutral-600">
        <span>theowishes</span>
        <span className="text-neutral-700/50">&middot;</span>
        <a href="https://x.com/_chitransh09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          _chitransh09
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
        <div className="space-y-24 pb-6">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
