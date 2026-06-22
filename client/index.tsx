import { useState } from "preact/hooks";

type Idea = {
  id: number;
  title: string;
  tagline: string;
  sections: { heading: string; points: string[] }[];
};

const ideas: Idea[] = [
  {
    id: 1,
    title: "Better NPM",
    tagline: "NPM is rotting from the inside. Build something better before it takes the whole ecosystem down with it.",
    sections: [
      {
        heading: "Revocable Releases",
        points: [
          "Less than 100 downloads or under 5 hours old? Let the author pull it back. That's it. No permanent record of your f*ckup.",
          "Typo a version number and it's immortal. TanStack Query's latest release is permanently busted because of exactly this. Fixable — but NPM won't touch it.",
        ],
      },
      {
        heading: "Paid AI-Powered Audits",
        points: [
          "Plug in an API key. Every release gets diffed and scored for safety. 50 cents a pop. Cheap insurance.",
          "Runs on a verified third party so you can't fake your own score. Actual risk numbers before every install. This alone would change everything.",
        ],
      },
      {
        heading: "Package Metadata & Visibility",
        points: [
          "Is it obfuscated or readable? Open source or closed? Who pushed it? All of that should be right there, in your face, before you install.",
          "Right now npx shows you a version number and asks yes or no. That's the whole security theater. Nothing about size, author, permissions, risk. How the f*ck do you decide?",
          "Someone publishes 'is-odd' with a zero instead of an O. Same look, same flow, completely malicious. The platform can't tell the difference. That's not a bug — it's a design-level failure.",
        ],
      },
      {
        heading: "Kill Name Squatting",
        points: [
          "TanStack on NPM isn't owned by Tanner. Some asshole squatted it, tried to shake him down, then sold it to a scam outfit.",
          "Verification process — human or agent. Review disputes, hand over names. Any platform that pretends to care about open source needs to ban this sh*t on sight.",
        ],
      },
      {
        heading: "Better NPX CLI",
        points: [
          "Show the size. Show the author. Show the safety score and what permissions it needs. A version number tells me nothing.",
          "Agents make this worse. A skill.md tells your agent to run npx, someone hijacks the package, and now your agent is executing malware. The CLI needs to give agents enough to flag the risk.",
        ],
      },
      {
        heading: "Private Registries",
        points: [
          "Publish to your own registry. It takes priority over public by default. Internal tools, internal access, no ceremony.",
          "The whole system assumes every package costs a fortune and has a full-time babysitter. Most packages are tiny scripts. The model is wrong and nobody's fixing it.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Reinvent Source Control",
    tagline: "Git was built for Linus in 2005. You are not the Linux kernel. Stop using tools that don't fit.",
    sections: [
      {
        heading: "Granular Permissions",
        points: [
          "Private files in a repo. Why the f*ck is that not a thing?",
          "Private branches. PRs that stay invisible until merge. Public/private is a repo toggle right now. Should be a per-change setting. This is not complicated.",
          "Projects get carved into five repos just to open source the safe parts. The tool is dictating your architecture. That's backwards.",
        ],
      },
      {
        heading: "Better .env Handling",
        points: [
          "You can't commit .env because Git shows everything to everyone forever. That's not a law of nature. That's a Git problem.",
          "Entire companies exist to manage env vars that live in a text file on your machine. The fact that this is an industry says everything about how broken Git is.",
        ],
      },
      {
        heading: "Private Security Fixes",
        points: [
          "Linux patches a CVE. Agents scrape the diff before the fix ships. Attackers get zero-days for free.",
          "Merge a fix. Cut a release. Patch everyone. Then go public. Is that pure open source? Don't care. We're in a security crisis and playing purity games.",
        ],
      },
      {
        heading: "Commits Are the Wrong Primitive",
        points: [
          "JJ proved it. Snapshots and tags crush commits and branches. So much time wasted on history that doesn't matter.",
          "Work trees are a disaster. One agent checks out main in a work tree and suddenly main is hostage. A random side directory held your primary branch ransom. Think about how stupid that is.",
        ],
      },
      {
        heading: "Break Free from File Systems",
        points: [
          "Source control shouldn't need a real OS. Just bash runs dev environments in memory inside JS. Clone without touching disk.",
          "APFS is hot garbage at small files. M4 Mac: 31 seconds to clone. Same task on Ubuntu with a mid-range AMD CPU and a normal SSD: 6.8 seconds. M1 Ultra: 140 seconds. Same. Exact. Task.",
          "In-memory ops dodge all these platform-specific nightmares. Node buffers don't care about your janky file system.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Dropbox for Devs",
    tagline: "Your code folder should just be the same everywhere. Stop manually syncing sh*t between machines.",
    sections: [
      {
        heading: "Universal Code Sync",
        points: [
          "Multiple machines, different OSes, one folder. Structure and contents mirrored everywhere. Dropbox but for people who write code.",
          "Env vars sync too. No more 'works on my machine' because your other machine doesn't have the right secrets.",
        ],
      },
      {
        heading: "Lazy File Fetching",
        points: [
          "Structure is always there. Files pull down when you navigate to them. No upfront cloning, no stale work trees.",
          "Node modules need OS-specific handling, fine. Core idea: structure is universal, contents stream on touch.",
        ],
      },
      {
        heading: "Not Based on Git",
        points: [
          "Git across machines means manual cloning or submodule hell. Both f*cking suck.",
          "Dream: Dropbox with a .gitignore. One structure, every machine and agent has it, zero effort.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "New Mobile Platform",
    tagline: "Apple takes 30% and Google barely tries. Mobile needs a third option before the duopoly kills innovation entirely.",
    sections: [
      {
        heading: "Break the Duopoly",
        points: [
          "Apple bans whatever it wants, takes 30% of every transaction, and bakes your personal info into files that end up in source control. The whole experience is hostile to developers.",
          "Google bans you with zero explanation and puts no money into Android. At least Apple tells you why, even if the reason is stupid. Google just says no and walks away.",
          "You can order an Uber with a credit card but can't buy a game without Apple's 30%. That's not policy. That's extortion.",
        ],
      },
      {
        heading: "Android Compatibility",
        points: [
          "BlackBerry 10 already proved this works. Different OS, Android apps through a runtime. CPUs today are fast enough that overhead barely matters.",
          "App gap solved from day one. Build something new without throwing away the existing ecosystem.",
        ],
      },
      {
        heading: "NPM for Mobile",
        points: [
          "Someone demos an app. Scan a QR code. It's on your phone. No store, no approval, no 30%. Just working software.",
          "Fork apps. Modify them. JIT compilation. Build on your phone without rebuilding the OS.",
          "Paul Henschel — Zustand, React Three Fiber — started with Paranoid Android. He would've stayed on mobile if the platform didn't s*ck so bad. One of the best devs in the React world lost because mobile was too painful to build for.",
        ],
      },
      {
        heading: "The Last Chance",
        points: [
          "Android is closing up every year. This might be the last window for a truly open mobile platform.",
          "CyanogenMod and Paranoid Android proved independent devs making ROMs for fun isn't just possible — it thrived. That spirit needs to come back before it's gone.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Better Slack",
    tagline: "Slack was built for sending messages, not reading them. Someone needs to unf*ck team communication.",
    sections: [
      {
        heading: "Posts > Messages",
        points: [
          "Messages are too granular. Posts sit between a channel and a thread. They carry context and don't vanish into the noise.",
          "Facebook cracked this years ago. Top-level comments, nested replies, sub-nesting, old posts bumping on activity. Why does nothing else work like this?",
          "Slack threads sink into history while still active. Finding a live conversation is genuinely hard. The app was built to SEND, not to READ.",
        ],
      },
      {
        heading: "Infinite Nesting & Context",
        points: [
          "Branch a sub-comment. Send an agent to explore. Get results back. All in the same tree. That's the bar.",
          "No inline replies in Slack. Someone says something in a thread and you can't target their message. Manual quote. In 2025. Embarrassing.",
        ],
      },
      {
        heading: "First-Class Agent Support",
        points: [
          "Agents should be native participants, not bots bolted on the side. Real citizens of the platform.",
          "Post work. Agent picks it up. Does it. Replies. Post bumps to top. No more Discord hell where threads spawn into the abyss.",
          "Facebook Workplace was the closest thing to this. They shut it down. The only platform that got context management right, and they killed it.",
        ],
      },
      {
        heading: "Open Source Standard",
        points: [
          "Open standard. Anyone can adopt it. Not a proprietary product you beg to use.",
          "Not trying to kill Slack overnight. Just give people something better that slowly takes over because it actually works.",
          "Microsoft Teams has some of these ideas. But it's Teams. Come on.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Weird Benchmarks",
    tagline: "Want models to get better at something? Prove they're bad at it. Build a benchmark.",
    sections: [
      {
        heading: "Benchmarks from Real People",
        points: [
          "Most benchmarks come from labs. They should come from devs who actually hit real problems with these things.",
          "SkateBench — naming skate tricks from descriptions — turned out useful. It hits grammar, niche language, and spatial reasoning. Researchers actually reach out about it.",
          "Got a weird niche? Bench it. Measuring what nobody else measured can matter more than you think.",
        ],
      },
      {
        heading: "Measure What Matters",
        points: [
          "AI fails you at something? Save it. Package it reproducibly. Now you have a real benchmark instead of another synthetic dataset.",
          "GitBench for agent Git skills. More of that. Benchmarks for the actual sh*t people automate, not academic exercises.",
          "Weird hypotheses. Real workflows. Everything. More data points = faster fixes.",
        ],
      },
      {
        heading: "Incentivize the Fix",
        points: [
          "Models s*ck at Crystal or whatever language you love? Bench it. Once labs can measure the gap, they'll grind to close it.",
          "Don't complain. Build a benchmark that shows the gap. Labs will come to you.",
          "Go build weird benchmarks. You'll learn a lot, and your measurements might matter way more than you expect.",
        ],
      },
    ],
  },
];

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
