export const siteContent = {
  hero: {
    // legacy combined strings (kept for compatibility)
    title: "Hi, I'm Aditya.",
    subtitle: "A Software Developer.",
    kicker: "AI-first builder & lifelong learner",

    // subtitleVariants: three variants for the animated subtitle (HTML strings allowed)
    // keep styling classes inside the strings so the highlight matches current appearance
    subtitleVariants: [
      `A <span class="text-primary font-semibold">Software Developer</span>`,
      `With <span class="text-primary font-semibold">Entrepreneurial Mindset</span>`,
      `Driven by <span class="text-primary font-semibold">AI & Curiosity</span>`
    ],

    // structured fields used for styling in the content-refresh branch
    titlePrefix: "Hi, I'm",
    name: "Aditya",
    titleSuffix: ".",

    subtitlePrefix: 'A',
    subtitleMain: 'Software Developer',
    subtitleSuffix: '.',

    body:
      "Currently at Google, I build human-centered systems at scale and solve problems that matter. With four years across startups and big tech, I move fast, blending clean code, product thinking, and an entrepreneurial mindset. A lifelong learner, I'm now exploring how AI can tackle complex challenges and create meaningful solutions for users.",

    cta: { label: 'My Journey', href: '#journey' },
  },

  journey: {
    heading: "My Journey",
    subheading:
      "From campus beginnings to startup chaos and global-scale systems at Google. Driven by curiosity, adaptability, and the joy of building.",
    timeline: [
      {
        title: "Google",
        role: "Software Developer",
        period: "2024 – Present",
        body:
          "Working on large‑scale systems that touch millions, while exploring AI's potential and honing a builder's mindset for the next entrepreneurial leap."
      },
      {
        title: "Startup Journey",
        role: "Founding Engineer",
        period: "2021 - 2023",
        body:
          "Built from zero to one, rapid iteration, many hats, and creating something from nothing. Learned resilience, adaptability, and product thinking."
      },
      {
        title: "Computer Science Engineering",
        role: "University Education",
        period: "2017 – 2021",
        body:
          "Strengthened foundations in algorithms, systems, and software engineering. Discovered a passion for building solutions that matter."
      }
    ]
  },

  building: {
    heading: "What I'm Building",
    subheading:
      "Where passion meets execution: current projects, experiments, and startup ideas.",
    items: [
      {
        title: "Smart AI Workflows",
        status: "In Development",
        body:
          "Designing intelligent AI workflows that simplify day-to-day tasks, boost productivity, and give you back precious hours.",
        tech: ["AI", "Automation", "Productivity"],
        icon: "code",
        color: "gradient-purple",
        links: {
          repo: null,
          demo: null
        }
      },

      {
        title: "Mindful Companion",
        status: "Conceptualizing",
        body: "Your AI-powered partner for emotional well-being. Personalized insights and mindfulness practices to help you thrive",
        tech: ["AI", "Mental Health", "Mindfulness"],
        icon: "lightbulb",
        color: "gradient-purple",
        links: {
          repo: null,
          demo: null
        }
      },
      {
        title: "AI-Powered Astrology",
        status: "Planning",
        body:
          "A unique blend of ancient wisdom and modern AI, creating personalized astrological insights that resonate with today's seekers.",
        tech: ["AI", "Astrology", "Personal Development"],
        icon: "lightbulb",
        color: "gradient-purple",
        links: {
          repo: null,
          demo: null
        }
      },
    ],
    cta: { label: "Let's Build Together", href: "#connect" }
  },

  recommendations: {
    heading: "Kind Words",
    subheading: "Grateful for these kind words from people I've worked with.",
    quotes: [
      {
        quote:
          "Aditya's ability to simplify complex concepts is impressive. He has a knack for making the technical accessible. His ability to communicate effectively with both technical and non-technical stakeholders is a huge asset.",
        author: "Vaishali",
        role: "Manager, Google"
      },
      {
        quote:
          "Aditya's three years of work with me showcased his remarkable curiosity and knack for grasping complex topics through insightful questioning. He's a smart worker, efficiently tackling challenges, a trait particularly valuable in a software developer.",
        author: "Kedar Chandrayan",
        role: "Co-Founder TrueSparrow"
      },
      {
        quote:
          "Aditya demonstrates exceptional teamwork abilities, making collaboration with him a pleasure. His engineering skills rank among the finest I've encountered.",
        author: "Alpesh Modi",
        role: "Director Engineering, TrueSparrow"
      },

    ]
  },

  connect: {
    heading: "Let's Connect",
    body:
      "Always open to meaningful conversations, whether it's about startups, the tech industry, finance, AI experiments, life stories, learning, or travel adventures.",
    links: [
      {
        label: "LinkedIn",
        desc: "Professional updates & network",
        href: "https://www.linkedin.com/in/adityaraj-singh/"
      },
      {
        label: "Topmate",
        desc: "Book a 1:1 session",
        href: "https://topmate.io/aditya_raj_singh"
      },
      {
        label: "Twitter",
        desc: "Thoughts, tech, and experiments",
        href: "https://x.com/hi_adityasingh"
      },
      {
        label: "Email",
        desc: "Let's collaborate",
        href: "mailto:hi.adityarajsingh@gmail.com"
      }
    ]
  },

  about: {
    heading: "I'm Aditya.",
    subheading: "Software Engineer at Google, scaling ideas with an entrepreneurial drive",
    intro1: "Over the past four years I have worked in startups and big tech, in both remote and office settings. My experience spans frontend, backend and UX, always focused on solving meaningful problems and delivering impact.",
    intro2: "From my first encounter with coding as a kid to building systems at Google, I've been driven by curiosity and the magic of turning ideas into reality. I am currently exploring AI's potential to create transformative products and improve everyday life.",
    principlesHeading: "What Drives Me",
    principles: [
      { title: "Curiosity & Learning", body: "Always exploring, questioning, and growing. Every challenge is a chance to understand something new and get better." },
      { title: "User-First Building", body: "Real people use what I build. Understanding their needs, pain points, and goals drives every decision I make." },
      { title: "Ship Fast, Learn Faster", body: "Build quickly, fail early, and iterate based on real feedback. Speed and learning matter more than perfection." },
      { title: "First Principles Thinking", body: "Break down complex problems to their core. Question assumptions and build solutions from the ground up." }
    ],

    beyondHeading: "Beyond Code",
    beyondBullets: [
      "Capturing landscapes through photography",
      "Exploring new cities and meeting new people",
      "Diving into financial markets and economics",
      "Weekly basketball games and following cricket",
      "Geeking out on philosophy and life design"
    ],
    tags: ["Building", "Learning", "Traveling", "Photography"]
  },

  footer: {
    name: "Aditya Raj Singh",
    tagline: "Building, Solving & Learning Daily",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/adityaraj-singh/" },
      { label: "GitHub", href: "https://github.com/AdityaRajSingh" },
      { label: "Topmate", href: "https://topmate.io/aditya_raj_singh" },
      { label: "Twitter", href: "https://x.com/hi_adityasingh" },
      { label: "Email", href: "mailto:hi.adityarajsingh@gmail.com" }
    ],
    navigation: [
      { label: "About", href: "/about", external: false },
      { label: "Blog", href: "/blog", external: false },
      { label: "Journey", href: "#journey", external: false },
      { label: "Work", href: "#building", external: false },
      { label: "Connect", href: "#connect", external: false }
    ],
    copyright: `© ${new Date().getFullYear()} Aditya Raj Singh. All rights reserved.`,
    builtWith: {
      textBefore: "Built with React and",
      icon: "heart", 
      textAfter: "for code"
    }
  }
} as const;

export type FooterNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SiteContent = typeof siteContent;

export type BuildingItem = {
  title: string;
  status: "In Development" | "Planning" | "Conceptualizing";
  body: string;
  tech: string[];
  icon?: "code" | "lightbulb" | "github";
  color?: "gradient-purple" | "gradient-teal" | "gradient-warm";
  links?: { repo?: string | null; demo?: string | null };
};