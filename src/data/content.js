const content = {
  nav: {
    items: ["About", "Experience", "Projects", "Skills", "Contact"],
  },

  hero: {
    name: "Anh Ngo",
    tagline: "I debug with a rubber duck. it works.",
    phrases: [
      "multi-agent AI assistants",
      "petabyte-scale distributed storage",
      "LLM memory management",
      "100K+ restaurant locations",
    ],
    statusBadges: [
      "open to new grad roles",
      "building cool things",
      "quacking bugs away",
    ],
  },

  experience: {
    entries: [
      {
        company: "Snowflake",
        role: "Software Engineer Intern",
        date: "May 2026 — September 2026",
        tag: "incoming",
        bullets: [
          "Distributed Storage team — building high-throughput, fault-tolerant infrastructure handling petabyte-scale data across multi-cloud environments, core systems powering Snowflake's data platform",
        ],
      },
      {
        company: "Toast",
        role: "Software Engineer Intern (part-time)",
        date: "September 2025 — Present",
        tag: "rehire",
        bullets: [
          "Developing ToastIQ, a multi-agent AI assistant that provides business insights and recommendations to 100,000+ restaurant locations across Toast's platform in a 10-person agile team",
          "Architected LLM memory management capabilities by implementing MCP tool and server with GraphQL integration for reliable memory CRUD operations, processing 100+ hourly preference updates",
          "Engineered multimodal capabilities with a file upload endpoint in 2-day hackathon supporting 7+ formats, enabling restaurant owners to analyze textual and visual documents for the first time",
        ],
      },
      {
        company: "Toast",
        role: "Software Engineer Intern",
        date: "June 2025 — August 2025",
        bullets: [
          "Built prompt fetching and management service integrating Langfuse, reducing iteration time by 98% from 2 hours to 2 minutes and enabling 20+ team members to test LLM prompts efficiently",
          "Optimized customer chat experience by implementing AI-powered conversation summarization with Gemini 2.5 Flash API, processing 1000+ daily conversations while reducing chat history UI clutter by 80%",
          "Deployed scalable caching infrastructure with Terraform and Redis, improving prompt retrieval latency by 70% and maintaining 99.91% availability across high-traffic production environments",
          "Developed automated evaluation infrastructure with Langfuse and GitHub Actions CI/CD integration, enabling rapid testing of MCP tool implementations and prompt variations while validating LLM output quality across 30+ datasets",
        ],
      },
      {
        company: "TAPTAP",
        role: "Software Engineer Intern",
        date: "June 2024 — August 2024",
        bullets: [
          "Built internal analytics and loyalty management dashboards, delivering 12 features using React, NestJS, and TypeScript for F&B business insights",
          "Secured sensitive customer data by implementing role-based access control in NestJS with automated alerting system, preventing over 100 unauthorized access incidents over 1 month",
          "Visualized over 100,000 voucher redemptions on the loyalty management dashboard using MongoDB aggregation pipelines with Redis caching to reduce API response times by 30% and enable real-time monitoring",
        ],
      },
    ],
  },

  projects: {
    entries: [
      {
        title: "BitTorrent Client",
        description:
          "A full-featured BitTorrent client implementing core P2P protocols (handshake, piece selection, choking/unchoking) with support for files up to 1GB and 15+ concurrent peer connections.",
        tech: ["Java", "Maven", "JUnit", "Multithreading", "TCP/IP"],
        metrics: "40% faster downloads via multithreaded architecture with Java concurrency utilities and thread pools",
        link: null,
      },
      {
        title: "Feline Genotype Inference Engine",
        description:
          "A probabilistic inference engine modeling 5 interacting loci as a factor graph with latent variables, dominance, epistasis, and X-linkage, marginalizing over hidden genotypes using allele frequency priors and Monte Carlo simulation.",
        tech: ["Python", "NumPy", "SciPy", "Streamlit", "Bayesian Inference"],
        metrics: "Calibrated via EM algorithm on 1,000+ pedigree records, validated with chi-squared tests (p > 0.05)",
        link: null,
      },
    ],
  },

  skills: {
    categories: [
      {
        label: "Languages",
        color: "yellow",
        items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "Kotlin", "SQL", "HTML", "CSS"],
      },
      {
        label: "AI/ML & Data",
        color: "mint",
        items: [
          "pandas",
          "NumPy",
          "SciPy",
          "scikit-learn",
          "MCP",
          "A2A",
          "Langfuse",
        ],
      },
      {
        label: "Databases & Cloud",
        color: "peach",
        items: [
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "AWS",
          "Supabase",
          "Firebase",
        ],
      },
      {
        label: "Frameworks & Libraries",
        color: "yellow",
        items: [
          "Spring Boot",
          "Dropwizard",
          "React",
          "Node.js",
          "Express",
          "NestJS",
          "Django",
          "JUnit",
          "MockK",
          "Mockito",
        ],
      },
      {
        label: "Developer Tools",
        color: "mint",
        items: [
          "Git",
          "Docker",
          "Terraform",
          "GitHub Actions",
          "Maven",
          "Gradle",
          "Postman",
          "Jira",
        ],
      },
    ],
  },

  about: {
    bio: "I'm Anh — a CS student at Rose-Hulman Institute of Technology (GPA: 3.93) building AI agent infrastructure and figuring out how to make machines remember things (and forget the right things). When I'm not staring at a terminal, you'll find me playing violin, crocheting something cozy, brushing up on my German, or missing Vietnam's street food. I also play League of Legends — support main, because someone has to keep the team alive. Originally from Vietnam, currently debugging my way through Indiana.",
  },

  contact: {
    email: "qanhngo.cs@gmail.com",
    linkedin: "https://linkedin.com/in/anh-ngo-q",
    github: "https://github.com/anh-ngo-q",
    inviteLine:
      "Got a cool project, a job opening, or just want to talk about ducks? Let's connect!",
  },
};

export default content;
