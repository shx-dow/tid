export type Idea = {
  id: number;
  title: string;
  tagline: string;
  sections: { heading: string; points: string[] }[];
};

export const ideas: Idea[] = [
  {
    id: 1,
    title: "Better NPM",
    tagline: "Reimagine package management from the ground up — security, publishing, visibility, and NPX.",
    sections: [
      {
        heading: "Revocable Releases",
        points: [
          "If a package has been installed under 100 times or has been up for under 5 hours, the author should be able to revoke it.",
          "Accidentally publishing the wrong version number shouldn't be permanent — TanStack Query's latest version is broken because of a typo that can never be taken back.",
        ],
      },
      {
        heading: "Paid AI-Powered Audits",
        points: [
          "Let authors pay a small amount (e.g. 50¢) for an agent to read and score every release before it goes out.",
          "Integrate with Anthropic or other AI APIs to diff each release and give a safety vibe check.",
          "Audit results should be run on a verified third party so authors can't fake their own scores.",
        ],
      },
      {
        heading: "Package Metadata & Visibility",
        points: [
          "Show whether a package is obfuscated or readable, open source or not, backed by known people or anonymous.",
          "Display who published the last release, what permissions the package needs, and how risky it is.",
          "Surface all this metadata both on the NPM site and in the CLI when you install — not just a random version number.",
        ],
      },
      {
        heading: "Kill Name Squatting",
        points: [
          "The TanStack package on NPM isn't owned by Tanner — it's squatted by someone who tried to extort him, then sold it to a sketchy company.",
          "Add a verification process (human or agent-driven) to review squatted names and hand them over to the rightful owners.",
          "Hard-ban name squatting — any real open source platform should treat this as illegal.",
        ],
      },
      {
        heading: "Better NPX CLI",
        points: [
          "When running npx, show package size, recent author, safety score, and permissions instead of a meaningless version number.",
          "Let agents read this metadata and make informed decisions about whether to run a command.",
          "If a package gets hijacked, the agent or user should get a heads-up that something might be insecure.",
        ],
      },
      {
        heading: "Private Registries",
        points: [
          "Support private registries where you can publish packages that aren't publicly released but are available within your environment.",
          "Private registry should be the default over the public registry for your team.",
          "Shareable software in the form of packages is incredible — the current architecture assumes every package is expensive to make and has full-time maintainers.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Reinvent Source Control",
    tagline: "Git was built for Linux kernel development in 2005. The world has changed — it's time to unfuck Git.",
    sections: [
      {
        heading: "Granular Permissions",
        points: [
          "Why can't you have private files in a repo? Some files should only be accessible to certain people.",
          "Why can't you have a private branch or a PR that stays private until it merges?",
          "The idea of public/private being a repo-level setting instead of a change-level option is insane.",
          "Let repos be mono-repos with some sub-packages that are private without splitting into multiple repos.",
        ],
      },
      {
        heading: "Better .env Handling",
        points: [
          "Why can't we commit .env files? The real reason is Git makes everything available to everyone forever.",
          "The existence of dozens of companies just to manage secrets that resolve to a random file on your computer shows Git is failing us.",
          "Environment variables should sync naturally without third-party services.",
        ],
      },
      {
        heading: "Private Security Fixes",
        points: [
          "Linux security patches get read by agents who mine for zero-days before they're even announced.",
          "Imagine merging a security fix, cutting a release, and patching all vulnerable distros before the code is made public.",
          "Open source shouldn't mean 100% of code is public 100% of the time.",
        ],
      },
      {
        heading: "Commits Are the Wrong Primitive",
        points: [
          "JJ shows that snapshots and tags are a much stronger model than commits and branches.",
          "We waste so much time worrying about history — JJ is a breath of fresh air.",
          "Work trees are atrocious — one agent can check out main in a work tree and now you can't check out main in your main directory.",
        ],
      },
      {
        heading: "Break Free from File Systems",
        points: [
          "Source control shouldn't require real operating systems or file systems.",
          "APFS (Apple's file system) is garbage at small file reads/writes — cloning on an M4 Mac takes 31 seconds vs 6.8 seconds on Ubuntu with an old AMD CPU.",
          "An M1 Ultra can take 140 seconds for a task a similar Mac on Ubuntu does in 3-12 seconds.",
          "In-memory operations (like just bash's JS/TS layer) should replace file system–bound operations.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Dropbox for Devs",
    tagline: "Sync your entire code folder across every machine — environment variables, structure, and files — without effort.",
    sections: [
      {
        heading: "Universal Code Sync",
        points: [
          "Have your code folder, structure, and contents mirrored across all your machines automatically — like Dropbox, but for developer environments.",
          "Spin up a Mac Mini downstairs or a GMK Tech Box on Ubuntu and everything is there the same way it was on your main machine.",
          "Environment variables sync totally fine across machines.",
        ],
      },
      {
        heading: "Lazy File Fetching",
        points: [
          "When you navigate to or touch a section of the code folder, pull that part down on-demand at that moment.",
          "No need to clone entire repos — get what you need when you need it.",
          "Node modules would need some OS-specific handling, but the idea is code structure syncs, contents stream.",
        ],
      },
      {
        heading: "Not Based on Git",
        points: [
          "Managing repos across machines with Git means submodule hell or manual cloning everywhere — nobody wants that.",
          "This would be a Dropbox/Google Drive-like layer with its own equivalent of .gitignore.",
          "The dream: your code folder structured one way, and any machine or cloud agent you spin up has all of it — or at least the structure — ready to go.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "New Mobile Platform",
    tagline: "A mobile OS that runs Android apps but is fundamentally different — open, hackable, and built for developers.",
    sections: [
      {
        heading: "Break the Duopoly",
        points: [
          "Apple bans whatever it doesn't like, takes 30% of all digital goods, and makes the developer experience miserable (Info.plist with one dev's config hardcoded in source control).",
          "Google arbitrarily bans apps with no explanation and barely invests in Android — it's slowly languishing.",
          "Both platforms are terrible — Apple gives you a bad reason, Google gives you no reason.",
        ],
      },
      {
        heading: "Android Compatibility (Like BlackBerry 10)",
        points: [
          "BlackBerry 10 proved you can build a different OS and still run Android apps via a built-in runtime.",
          "Today's CPUs are powerful enough that virtualization overhead would be much lower than in the BlackBerry era.",
          "You don't lose the Android app ecosystem — you build on top of it.",
        ],
      },
      {
        heading: "NPM for Mobile",
        points: [
          "Scan a QR code to have an app on your device and running — instant distribution, no store approval.",
          "An app ecosystem that encourages forking and modifying apps, with JIT compilation support.",
          "Like the internet, Linux, or macOS — open, progressive, accessible for building cool things.",
        ],
      },
      {
        heading: "The Last Chance",
        points: [
          "Android is getting more and more closed. Now might be the last time to build a truly open mobile platform.",
          "Paul Henschel (creator of Zustand, React Three Fiber, Poimanders) started with Paranoid Android — a custom ROM. He would have become a mobile dev if mobile dev didn't suck. We lost one of the greatest devs because the platform was too hard to build for.",
          "CyanogenMod and Paranoid Android proved that an ecosystem of independent devs building custom ROMs for fun is possible — we need that experimental spirit back.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Better Slack",
    tagline: "A communication platform built on posts (not messages) with proper threading, context management, and first-class agent support.",
    sections: [
      {
        heading: "Posts > Messages",
        points: [
          "Posts are a better primitive than messages — they fit somewhere between a channel and a thread.",
          "Facebook's model works: top-level comments, nested threading, sub-nesting within comments, and old posts bump to the top when new replies come.",
          "Slack's threads fall back in history even when active — finding them is impossible.",
        ],
      },
      {
        heading: "Infinite Nesting & Context",
        points: [
          "You should be able to branch off context — take a sub-comment, send an agent to explore, and come back with feedback.",
          "Threads that make sense. Replies that make sense. Infinite nesting done right.",
          "Inline replies instead of forcing everything into threads — Slack has no inline replies, which is absurd.",
        ],
      },
      {
        heading: "First-Class Agent Support",
        points: [
          "Agents should be participants in the same control plane as humans, in a way that's logical.",
          "Post something you want to work on, and when your agent replies, the post bumps back to the top.",
          "Combine with something like Hermes Agent — no more impossible-to-manage Discord threads.",
        ],
      },
      {
        heading: "Open Source Standard",
        points: [
          "Facebook Workplace was the closest thing to a good context management product — and they shut it down.",
          "This should be an open-source standard, easy to adopt and play with, not to replace Slack overnight but to slowly replace it.",
          "Microsoft Teams has some of these ideas but it's Microsoft Teams — it'll never be useful.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Weird Benchmarks",
    tagline: "The best way to make AI models better at something is to measure how bad they are at it. Go build benchmarks.",
    sections: [
      {
        heading: "Benchmarks from Real People",
        points: [
          "We need more benchmarks written by people other than researchers and labs — real developers with real problems.",
          "Theo's SkateBench (measuring how well models can name a skateboard trick from a description) turned out to be useful because it spans complex grammar, niche language, and 3D spatial reasoning.",
          "Researchers and labs actually hit up Theo asking about SkateBench — niche benchmarks fascinate them.",
        ],
      },
      {
        heading: "Measure What Matters",
        points: [
          "Take the work you try to use AI for that fails, and save it in a reproducible way so you can try it again later.",
          "CM Griffin just made GitBench — we need more benchmarks like that for agent capabilities.",
          "Measure everything from weird hypotheses to real work.",
        ],
      },
      {
        heading: "Incentivize the Fix",
        points: [
          "If models suck at Crystal (or any obscure language), make a benchmark that proves it — labs will go hard to improve their scores once they can measure it.",
          "If you have a problem that agents suck at, building a benchmark that shows all agents suck at it is the best way to incentivize labs to fix it.",
          "Be surprised how much you learn and how valuable those measurements can be — go build some weird benchmarks.",
        ],
      },
    ],
  },
];
