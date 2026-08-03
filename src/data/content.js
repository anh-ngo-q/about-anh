const content = {
  nav: {
    items: ["About", "Experience", "Projects", "Awards", "Skills", "Contact"],
  },

  hero: {
    name: "Anh Ngo",
    tagline: "I like debugging with a rubber duck. \nSometimes more than one.",
    phrases: [
      "ToastIQ 🍞 multi-agent AI assistant",
      "Snowflake ❄️ distributed storage",
      "my Beli profile",
      // "100K+ restaurant locations",
    ],
    statusBadges: [
      "open to 2027 intern and new grad roles",
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
        tag: "current",
        bullets: [
          "Storage Platform team — petabyte-scale, multi-cloud storage infrastructure powering Snowflake's data platform",
          "Eliminated 3.8B annual cloud-storage LIST calls, achieving $3.4M yearly net savings, by replacing exhaustive file scans with AWS S3, Azure, and GCP inventory snapshot-based detection using scheduled tasks and stored procedures",
          "Flagged 59% more temp files and 6.2% more result files than the legacy scanners in a 7-day production comparison (projected 770TB/year additional reclaimable storage), verified by a zero-missed-file parity gate",
          "Parallelized the deletion enqueue pipeline with multithreading, improving runtime by 97% from 60 hours to 2 hours",
          "Enhanced system health observability with queryable metrics and stuck-deletion alerting for 95M daily candidates",
          "Migrated a petabyte-scale deletion service to an asynchronous batch deletion client, fixing a silent-timeout leak of undeleted files",
        ],
      },
      {
        company: "Toast",
        role: "Software Engineer Intern (part-time)",
        date: "September 2025 — May 2026",
        tag: "rehire",
        bullets: [
          "ToastIQ team, a multi-agent AI assistant that provides business insights and recommendations to 100,000+ restaurants across Toast's platform",
          "Architected LLM memory management capabilities by implementing MCP tool and server with GraphQL integration for reliable memory CRUD operations, processing 1,000+ hourly preference updates",
          "Engineered multimodal capabilities with a file upload endpoint in 2-day hackathon supporting 5+ formats, enabling restaurant owners to analyze textual and visual documents for the first time",
        ],
      },
      {
        company: "Toast",
        role: "Software Engineer Intern",
        date: "June 2025 — August 2025",
        bullets: [
          "Built prompt fetching and management service integrating Langfuse, reducing iteration time by 98% from 2 hours to 2 minutes and enabling 50+ team members to test LLM prompts efficiently",
          "Optimized customer chat experience by implementing AI-powered conversation summarization with Gemini 2.5 Flash API, processing 1000+ daily conversations while reducing chat history UI clutter by 80%",
          "Deployed scalable caching infrastructure with Terraform and Redis, improving prompt retrieval latency by 70% and maintaining 99.91% availability across high-traffic production environments",
          "Developed automated evaluation infrastructure with Langfuse and GitHub Actions CI/CD integration, enabling rapid testing of MCP tool implementations and prompt variations while validating LLM output quality across 30+ datasets",
        ],
      },
      {
        company: "Rose-Hulman",
        role: "Computer Science Teaching Assistant",
        date: "March 2025 — August 2025",
        bullets: [
          "Supported 50 students across 2 sections through weekly office hours on core programming concepts in Python",
          "Developed and maintained Python grading scripts for 144 assignments weekly, reducing grading time by 40%",
          "Evaluated 192 exams per quarter, delivering prompt and actionable feedback to enhance student understanding",
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
      // {
      //   title: "Feline Genotype Inference Engine",
      //   description:
      //     "A probabilistic inference engine modeling 5 interacting loci as a factor graph with latent variables, dominance, epistasis, and X-linkage, marginalizing over hidden genotypes using allele frequency priors and Monte Carlo simulation.",
      //   tech: ["Python", "NumPy", "SciPy", "Streamlit", "Bayesian Inference"],
      //   metrics: "Calibrated via EM algorithm on 1,000+ pedigree records, validated with chi-squared tests (p > 0.05)",
      //   link: null,
      // },
    ],
  },

  awards: {
    entries: [
      {
        title: "Google TechWise Scholarship",
        amount: "$4,250",
        description: "Google's award for top 150 outstanding underrepresented students in tech",
      },
      {
        title: "Rose-Hulman Merit Scholarship",
        amount: "$40,650",
        description: "Highest merit-based scholarship for top incoming Computer Science students",
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
    bio: "I'm Anh — a Computer Science student at Rose-Hulman Institute of Technology!\nCurrently building petabyte-scale storage infrastructure at Snowflake while learning German on the side (because why not add another challenge?).\nBeyond the keyboard: You'll find me playing violin, crocheting new patterns and plushies, or posting restaurant reviews on Beli! Trying really hard to reach 100 new restaurants for 2026 :P\nI'm always excited to chat about tech, music, yarn crafts, language learning, or whatever fascinating project you're working on!",
  },

  contact: {
    email: "qanhngo.cs@gmail.com",
    linkedin: "https://linkedin.com/in/anh-ngo-q",
    github: "https://github.com/anh-ngo-q",
    inviteLine:
      "Got a cool project, a job opening, or just want to talk about ducks? \n Yarn? German? Celsius vs. Monster? Let's connect!",
  },
};

export default content;
