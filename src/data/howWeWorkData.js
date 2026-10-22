export const workPhases = [
  {
    step: "01",
    phase: "Discovery & Strategy",
    title: "Understanding Your Vision & Architecture Needs",
    desc: "We dive deep into your business requirements, existing legacy stacks, user personas, and technical constraints to draft a comprehensive Project Scope Document and architectural roadmap.",
    icon: "Compass",
    color: "#19B5C4",
    deliverables: ["Product Requirement Document (PRD)", "Technical Feasibility Analysis", "Timeline & Cost Breakdown", "Milestone Roadmap"],
    duration: "Week 1 - 2"
  },
  {
    step: "02",
    phase: "UI/UX & System Architecture",
    title: "Prototyping & Database Schemas",
    desc: "Our design team crafts intuitive user journeys and interactive Figma prototypes, while backend leads model normalized database schemas and API contract specifications.",
    icon: "Layers",
    color: "#0B2A5B",
    deliverables: ["Interactive Clickable Figma Prototype", "Design System & Component Specs", "Database ER Diagrams", "API Contract Specifications"],
    duration: "Week 2 - 4"
  },
  {
    step: "03",
    phase: "Agile Development Sprints",
    title: "Clean Modular Code & Bi-Weekly Sprints",
    desc: "We execute iterative 2-week Agile sprints with daily progress visibility. Continuous integration ensures code is tested, reviewed, and merged into staging environments continuously.",
    icon: "Code2",
    color: "#19B5C4",
    deliverables: ["Bi-Weekly Sprint Demo Builds", "Staging Server Access", "Clean, Documented Source Code", "Jira Sprint Velocity Reports"],
    duration: "Week 4 - 12"
  },
  {
    step: "04",
    phase: "QA, Security & Performance Testing",
    title: "Automated Test Suites & Zero-Defect Audits",
    desc: "Dedicated QA engineers execute automated Playwright/Cypress end-to-end tests, manual exploratory testing, API vulnerability scans, and stress testing under high concurrent loads.",
    icon: "ShieldCheck",
    color: "#0B2A5B",
    deliverables: ["Automated Test Run Reports", "Security & OWASP Compliance Scan", "Performance & Core Web Vitals Audit", "Zero Critical Bug Sign-off"],
    duration: "Week 10 - 14"
  },
  {
    step: "05",
    phase: "Seamless Cloud Deployment",
    title: "Docker, Kubernetes & Production Launch",
    desc: "We orchestrate zero-downtime production deployments on AWS / GCP / Azure with automated SSL, CDN edge caching, database replication, and monitoring alerts.",
    icon: "Rocket",
    color: "#19B5C4",
    deliverables: ["Live Production Deployment", "App Store & Play Store Publishing", "DNS & SSL Configuration", "Automated Backup & DR Scripts"],
    duration: "Week 14 - 15"
  },
  {
    step: "06",
    phase: "Support, Maintenance & Optimization",
    title: "24/7 SLA Monitoring & Growth Iterations",
    desc: "Post-launch, we provide complimentary warranty support followed by flexible AMC SLA packages for server monitoring, version upgrades, security patches, and feature additions.",
    icon: "Headphones",
    color: "#0B2A5B",
    deliverables: ["Dedicated Technical Account Lead", "24/7 Server Health Monitoring", "Regular Security & Package Updates", "Quarterly Roadmap Review"],
    duration: "Ongoing"
  }
];
