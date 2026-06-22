import { ideas } from "../shared/ideas";

const ideaEmojis = ["📦", "🔄", "☁️", "📱", "💬", "📊"];

function Hero() {
  return (
    <section className="border-b border-neutral-800 pb-16 pt-20">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
        what<span className="text-yellow-400">theo</span>wishes
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-neutral-400">
        Theo — t3dotgg — has been keeping a list of ideas he wishes somebody would build.
        He shared all of them. Here they are.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {ideas.map((idea, i) => (
          <a
            key={idea.id}
            className="rounded-full border border-neutral-700 px-4 py-1.5 text-sm text-neutral-300 hover:border-yellow-400/50 hover:text-yellow-400"
            href={`#idea-${idea.id}`}
          >
            {ideaEmojis[i]} {idea.title}
          </a>
        ))}
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <div className="border-l-4 border-yellow-400/50 bg-yellow-400/5 px-6 py-5 my-16">
      <p className="text-base leading-relaxed text-neutral-300 italic">
        "Ideas are still cheap. I don't think I'm special for having a whole bunch of ideas.
        The point of this is that I've seen what you guys do when you're given ideas."
      </p>
      <p className="mt-2 text-sm text-neutral-500">— Theo / t3dotgg</p>
    </div>
  );
}

function IdeaCard({ idea, index }: { idea: typeof ideas[number]; index: number }) {
  return (
    <article id={`idea-${idea.id}`} className="scroll-mt-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-yellow-400/60">0{idea.id}</span>
        <h2 className="text-3xl font-bold tracking-tight">{ideaEmojis[index]} {idea.title}</h2>
      </div>
      <p className="mt-3 text-neutral-400 leading-relaxed">{idea.tagline}</p>
      <div className="mt-8 space-y-8">
        {idea.sections.map((section) => (
          <div key={section.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">{section.heading}</h3>
            <ul className="mt-3 space-y-2">
              {section.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-neutral-300 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400/60" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function CallToAction() {
  return (
    <section className="border-t border-neutral-800 py-16 text-center">
      <h2 className="text-2xl font-bold">Go build something</h2>
      <p className="mt-3 text-neutral-400 max-w-xl mx-auto">
        "It's time to build bigger stuff. Go kick up an agent and try one of these things out.
        I bet you'll be surprised just how far you can go."
      </p>
      <p className="mt-2 text-sm text-neutral-600">— Theo</p>
    </section>
  );
}

export function App() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <Hero />
        <QuoteBanner />
        <div className="space-y-24 pb-16">
          {ideas.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
        <CallToAction />
      </div>
    </main>
  );
}
