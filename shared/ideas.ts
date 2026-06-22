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
