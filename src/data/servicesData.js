export const primaryServices = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDesc: "End-to-end bespoke software engineered specifically to solve complex enterprise operational challenges.",
    icon: "Code2",
    slug: "category-web-development",
    features: ["Bespoke Architecture", "Scalable Microservices", "Multi-Tenant Cloud", "Robust Security Standards"]
  },
  {
    id: "web-development",
    title: "Fullstack Web Applications",
    shortDesc: "High-performance dynamic web applications built with React, Node.js, Next.js, Python/Django, and modern cloud databases.",
    icon: "Globe",
    slug: "category-web-development",
    features: ["MERN Stack Mastery", "Single Page Apps (SPA)", "Progressive Web Apps (PWA)", "Sub-second Page Load"]
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    shortDesc: "Cross-platform iOS and Android applications using Flutter and React Native with native-level performance and fluid UI.",
    icon: "Smartphone",
    slug: "category-mobile-development",
    features: ["Flutter & Dart", "React Native", "Offline-First Sync", "App Store Optimization"]
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise ERP & CRM Systems",
    shortDesc: "Integrated business management software, inventory tracking, sales automation, and automated reporting systems.",
    icon: "Building2",
    slug: "category-enterprise-solutions",
    features: ["Custom ERP Development", "Sales Pipeline CRM", "Automated Billing & GST", "Role-Based Access Control"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Interactive Design",
    shortDesc: "Human-centric user experience research, wireframing, high-fidelity prototypes, and sleek design systems in Figma.",
    icon: "Palette",
    slug: "category-ui-ux-design",
    features: ["Figma Design Systems", "User Journey Mapping", "Interactive Prototypes", "Usability Audit"]
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    shortDesc: "Automated CI/CD pipelines, container orchestration, AWS/GCP cloud migration, and continuous security monitoring.",
    icon: "Cloud",
    slug: "category-cloud-devops",
    features: ["Docker & Kubernetes", "AWS / GCP / Azure", "CI/CD GitHub Actions", "24/7 Monitoring & Backups"]
  }
];

export const domainCategories = [
  {
    id: "category-web-development",
    title: "Web Development",
    subtitle: "Scalable Fullstack Web Solutions",
    icon: "Globe",
    description: "We architect scalable, blazing-fast web applications using MERN, Python, Laravel, and modern JAMstack principles. Designed for maximum throughput and seamless user experiences.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React.js", "Node.js", "Express", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL"],
    subServices: [
      {
        name: "MERN Stack Development",
        desc: "Interactive Single Page Applications powered by MongoDB, Express, React, and Node.js with stateful real-time capabilities."
      },
      {
        name: "Python & Django Web Portals",
        desc: "High-security computational web portals, scientific dashboards, and robust data-heavy platforms with Django."
      },
      {
        name: "Laravel & PHP Applications",
        desc: "Rapid, clean, and battle-tested MVC web solutions for business directories, booking portals, and corporate hubs."
      },
      {
        name: "Headless CMS & JAMstack",
        desc: "Lightning-fast static & server-rendered sites connected to Strapi, Sanity, or custom headless backends."
      },
      {
        name: "SaaS Multi-Tenant Platforms",
        desc: "Subscription billing, tenant isolation, custom subdomain routing, and automated onboarding workflows."
      },
      {
        name: "Progressive Web Apps (PWAs)",
        desc: "Offline functionality, push notifications, and app-like experiences accessible straight through the browser."
      }
    ],
    deliverables: [
      "Production-ready clean modular code",
      "Comprehensive REST / GraphQL API documentation",
      "Cross-browser & responsive compliance",
      "Lighthouse 95+ performance optimization",
      "Automated CI/CD deployment scripts"
    ],
    faqs: [
      { q: "How do you choose between MERN, Python, and Laravel?", a: "We analyze your project's concurrency needs, data complexity, and existing infrastructure to propose the most cost-effective and scalable stack." },
      { q: "Do you offer post-launch maintenance?", a: "Yes, all our web projects include dedicated warranty support followed by flexible SLA-based AMC packages." }
    ]
  },
  {
    id: "category-mobile-development",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform iOS/Android Apps",
    icon: "Smartphone",
    description: "Engaging, high-performance mobile applications engineered with Flutter and React Native that deliver smooth 60fps experiences across both iOS and Android from a single unified codebase.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Flutter", "Dart", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "REST APIs"],
    subServices: [
      {
        name: "Flutter Cross-Platform Apps",
        desc: "Pixel-perfect mobile applications with high animation fidelity for iOS and Android simultaneously."
      },
      {
        name: "React Native Development",
        desc: "JavaScript-driven native mobile experiences that share business logic with web platforms."
      },
      {
        name: "Native iOS (Swift) & Android (Kotlin)",
        desc: "Specialized low-level hardware integration, Bluetooth BLE, GPS tracking, and camera processing."
      },
      {
        name: "Enterprise Mobility Solutions",
        desc: "Secure internal apps for field agents, inventory scanners, warehouse staff, and remote executives."
      },
      {
        name: "Mobile App Store Deployment",
        desc: "Complete assistance with Apple App Store and Google Play Store compliance, review approvals, and release pipelines."
      },
      {
        name: "In-App Purchases & Payments",
        desc: "Integration with Stripe, Razorpay, Apple Pay, Google Pay, and recurring subscription models."
      }
    ],
    deliverables: [
      "Signed APK and IPA release builds",
      "Complete Source Code repository access",
      "Firebase Push Notification & Analytics setup",
      "App Store Review & Release Management",
      "Offline sync & SQLite local storage architecture"
    ],
    faqs: [
      { q: "Will one codebase really work on both iPhone and Android?", a: "Yes, using Flutter and Dart, we deliver 99% shared code without sacrificing smooth 60fps native performance." }
    ]
  },
  {
    id: "category-desktop-windows",
    title: "Windows & Desktop Software",
    subtitle: "High-Performance Desktop Applications",
    icon: "Monitor",
    description: "Robust offline-capable desktop software built for Windows and macOS. Ideal for heavy hardware interfacing, thermal printing, barcode scanners, and isolated local databases.",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Electron.js", "C# / .NET", "Python PyQt", "SQLite", "Node.js", "Serial Port APIs"],
    subServices: [
      {
        name: "Electron.js Modern Desktop Apps",
        desc: "Cross-platform desktop tools powered by web technologies, packaged for Windows, Mac, and Linux."
      },
      {
        name: "Point of Sale (POS) Software",
        desc: "Ultra-fast billing, thermal printer driver hooks, barcode scanner support, and offline cash drawer triggers."
      },
      {
        name: "Hardware Interfacing & IoT Clients",
        desc: "Serial port, USB, RS232, and Bluetooth communicators for industrial equipment and measurement devices."
      },
      {
        name: "Local Database & Sync Engines",
        desc: "Fast offline SQLite/IndexedDB operations with background automatic synchronization to central cloud servers."
      }
    ],
    deliverables: [
      "Windows MSI / EXE installers with auto-updaters",
      "Cross-platform Mac DMG packages",
      "Hardware driver communication protocols",
      "Local encrypted storage mechanisms"
    ],
    faqs: [
      { q: "Can desktop apps sync with our online web portal?", a: "Absolutely! We implement robust background syncing so staff can work offline and sync immediately when connectivity returns." }
    ]
  },
  {
    id: "category-enterprise-solutions",
    title: "Enterprise Solutions (ERP & CRM)",
    subtitle: "Tailored Business Process Optimization",
    icon: "Building2",
    description: "End-to-end bespoke Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) platforms designed to match your organization's exact operational workflows.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Node.js", "Python", "React.js", "PostgreSQL", "Redis", "Docker", "PowerBI"],
    subServices: [
      {
        name: "Custom ERP Architecture",
        desc: "Unified modules for procurement, inventory control, manufacturing bill-of-materials, and human resources."
      },
      {
        name: "Sales & Lead CRM Portals",
        desc: "Automated lead ingestion, pipeline visualizers, WhatsApp / Email campaign automation, and sales rep performance metrics."
      },
      {
        name: "Supply Chain & Warehouse Management",
        desc: "Batch tracking, QR/barcode scanning, automated reorder triggers, and vendor portal integrations."
      },
      {
        name: "Financial Accounting & GST Invoicing",
        desc: "Automated e-invoicing, tax calculation, ledger management, balance sheets, and audit-ready reporting."
      }
    ],
    deliverables: [
      "Modular micro-frontend architecture",
      "Granular permission and audit logs system",
      "Automated PDF invoice generation and mailers",
      "Interactive executive dashboards"
    ],
    faqs: [
      { q: "Can we migrate data from Tally or old Excel sheets?", a: "Yes, we build custom ETL data migration scripts that sanitize and import your historical records seamlessly." }
    ]
  },
  {
    id: "category-ui-ux-design",
    title: "UI/UX & Product Design",
    subtitle: "Intuitive Interfaces & Modern Design Systems",
    icon: "Palette",
    description: "Transforming complex business logic into intuitive, visually stunning digital interfaces through user research, wireframing, interactive Figma prototypes, and comprehensive design tokens.",
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Figma", "Adobe XD", "Illustrator", "Protopie", "Design Tokens", "Tailwind CSS"],
    subServices: [
      {
        name: "User Journey & Wireframing",
        desc: "Low-fidelity structural wireframes that optimize the user flow, conversion paths, and information hierarchy."
      },
      {
        name: "High-Fidelity UI Design",
        desc: "Modern, pixel-perfect visual design with rich color harmonies, typography scales, and micro-interactions."
      },
      {
        name: "Design Systems & Component Libraries",
        desc: "Scalable Figma component libraries aligned with developer tokens (Tailwind / CSS variables)."
      },
      {
        name: "UX Audit & Usability Testing",
        desc: "Comprehensive heuristic evaluations identifying conversion blockers and usability friction points."
      }
    ],
    deliverables: [
      "Figma design system with variants and auto-layout",
      "Interactive clickable prototypes for stakeholders",
      "Exported SVG iconography and illustration assets",
      "Complete developer handoff documentation"
    ],
    faqs: [
      { q: "Do your designers collaborate directly with developers?", a: "Yes! Our designers work side-by-side with our frontend engineers to ensure 100% design fidelity in the final code." }
    ]
  },
  {
    id: "category-cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    subtitle: "High Availability & Automated Pipelines",
    icon: "Cloud",
    description: "Modernizing your deployment workflows with Docker containerization, Kubernetes orchestration, automated CI/CD pipelines, and cost-optimized AWS / GCP cloud architectures.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Nginx", "Grafana"],
    subServices: [
      {
        name: "CI/CD Pipeline Automation",
        desc: "Zero-touch automated building, testing, linting, and zero-downtime deployment pipelines using GitHub Actions."
      },
      {
        name: "Docker & Kubernetes Clustering",
        desc: "Containerizing microservices for consistent development and automated autoscaling in production."
      },
      {
        name: "Cloud Cost Optimization",
        desc: "Auditing AWS/GCP resources to reduce monthly infrastructure bills by up to 40% while enhancing reliability."
      },
      {
        name: "Server Hardening & Security",
        desc: "SSL certification, firewall rules, automated daily off-site backups, and DDoS mitigation."
      }
    ],
    deliverables: [
      "Infrastructure as Code (IaC) configuration",
      "GitHub Actions workflow pipelines",
      "24/7 server health dashboards (Grafana/Prometheus)",
      "Disaster recovery and automated backup protocols"
    ],
    faqs: [
      { q: "Can you manage our AWS account directly?", a: "Yes, via IAM role delegation with strict security policies." }
    ]
  },
  {
    id: "category-qa-testing",
    title: "QA & Software Testing",
    subtitle: "Zero-Bug Reliability & Automated Test Suites",
    icon: "ShieldCheck",
    description: "Comprehensive software quality assurance spanning automated end-to-end testing, API integration testing, load & stress simulation, and manual regression cycles.",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Cypress", "Playwright", "Postman", "Jest", "JMeter", "Selenium"],
    subServices: [
      {
        name: "Automated E2E Testing",
        desc: "Playwright and Cypress test suites running against staging environments before every release."
      },
      {
        name: "REST / GraphQL API Testing",
        desc: "Automated assertion scripts verifying schema validity, status codes, payload structures, and edge cases."
      },
      {
        name: "Load & Stress Testing",
        desc: "Simulating thousands of concurrent virtual users to identify database deadlocks and memory bottlenecks."
      },
      {
        name: "Cross-Device Manual QA",
        desc: "Rigorous testing across real Android devices, iPhones, iPads, and varied desktop screen resolutions."
      }
    ],
    deliverables: [
      "Detailed test plans and test case matrices",
      "Automated test run logs in CI pipelines",
      "Bug tracker reports with video repro steps",
      "Final Quality Sign-off Certificate"
    ],
    faqs: [
      { q: "Can you test our existing software without rewriting code?", a: "Yes, our QA team can write black-box automated test suites and perform manual regression on your existing applications." }
    ]
  },
  {
    id: "category-ai-automation",
    title: "AI & Machine Learning",
    subtitle: "Intelligent Algorithms & Workflow Automation",
    icon: "Cpu",
    description: "Harnessing the power of Large Language Models (LLMs), natural language processing, computer vision, and predictive analytics to automate complex business workflows.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Python", "OpenAI API", "LangChain", "PyTorch", "HuggingFace", "FastAPI", "Vector DBs (Pinecone/Chroma)"],
    subServices: [
      {
        name: "Custom AI Chatbots & Agents",
        desc: "RAG-powered conversational AI assistants trained on your private company documentation and CRM data."
      },
      {
        name: "Automated Document OCR & Extraction",
        desc: "Extracting structured financial and invoice data from unstructured PDFs and scanned receipts."
      },
      {
        name: "Predictive Analytics Models",
        desc: "Sales forecasting, customer churn prediction, and dynamic pricing algorithms tailored for retail and SaaS."
      },
      {
        name: "Intelligent RPA Automations",
        desc: "Bots that automate repetitive cross-system data entry, notifications, and verification workflows."
      }
    ],
    deliverables: [
      "Fine-tuned model / RAG pipeline deployment",
      "FastAPI inference microservice",
      "Interactive AI dashboard and prompt engineering logs",
      "Data privacy and token usage optimization guardrails"
    ],
    faqs: [
      { q: "Is our private business data secure when using AI?", a: "Yes! We deploy isolated enterprise endpoints with zero-data-retention agreements or local on-premise open-source LLMs." }
    ]
  },
  {
    id: "category-ecommerce",
    title: "E-Commerce Solutions",
    subtitle: "High-Converting Digital Stores & Marketplaces",
    icon: "ShoppingBag",
    description: "Custom multi-vendor marketplaces, headless Shopify stores, and custom Node.js/PHP commerce engines designed for blazing conversions, fast checkout, and seamless inventory sync.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0a67e5572243?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Shopify Plus", "WooCommerce", "Next.js Commerce", "Node.js", "Stripe", "Razorpay", "Algolia"],
    subServices: [
      {
        name: "Custom E-Commerce Web Portals",
        desc: "Bespoke online shopping experiences built with React, Next.js, and Node.js with ultra-fast search."
      },
      {
        name: "Multi-Vendor Marketplaces",
        desc: "Vendor onboarding, commission splitting, separate merchant portals, and unified buyer cart."
      },
      {
        name: "Payment & Logistics Integration",
        desc: "Integration with Razorpay, PayU, Stripe, Shiprocket, Bluedart, and automated SMS tracking."
      },
      {
        name: "Headless Commerce Architecture",
        desc: "Separating the lightning-fast frontend storefront from Shopify or Magento backend management."
      }
    ],
    deliverables: [
      "Custom responsive storefront design",
      "Payment gateway & shipping API integration",
      "Admin order management dashboard",
      "Conversion tracking & Google Analytics 4 integration"
    ],
    faqs: [
      { q: "Can you integrate Indian payment gateways like UPI and Razorpay?", a: "Yes, we integrate Razorpay, PayU, PhonePe, Paytm, and international gateways like Stripe with webhook verification." }
    ]
  },
  {
    id: "category-api-middleware",
    title: "API & Middleware Integrations",
    subtitle: "Seamless Data Synchronization & Interoperability",
    icon: "Network",
    description: "Bridging disparate software systems through robust, secure REST and GraphQL APIs, webhooks, and enterprise service bus architectures.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Node.js", "Express", "GraphQL", "Redis", "Kafka", "RabbitMQ", "Swagger / OpenAPI"],
    subServices: [
      {
        name: "Custom REST & GraphQL APIs",
        desc: "Standardized, secure, and versioned APIs with automated Swagger interactive documentation."
      },
      {
        name: "Third-Party SaaS Connectors",
        desc: "Syncing data between Salesforce, Zoho, HubSpot, QuickBooks, SAP, and custom internal tools."
      },
      {
        name: "Event-Driven Message Queues",
        desc: "Asynchronous background processing using Redis, RabbitMQ, and Apache Kafka for peak loads."
      },
      {
        name: "Payment & SMS Gateway Hooks",
        desc: "Resilient webhooks with signature verification, automatic retries, and idempotent transactions."
      }
    ],
    deliverables: [
      "OpenAPI 3.0 / Postman Collection specs",
      "Rate limiting and JWT authentication layers",
      "Real-time webhook dispatcher system",
      "Monitoring & error logging dashboard"
    ],
    faqs: [
      { q: "How do you ensure data integrity during sync failures?", a: "We implement idempotent retry queues, dead-letter queues, and automatic transaction rollback mechanisms." }
    ]
  }
];
