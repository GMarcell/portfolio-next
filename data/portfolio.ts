export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#hire-fit", label: "Hire Fit" },
  { href: "#real-work", label: "Real Works" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const resumeUrl = "/resume.pdf";

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5", label: "Showcase Builds" },
  { value: "95+", label: "Performance Target" },
  { value: "4", label: "Team Environments" },
];

export const stack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

export const tickerItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "REST APIs",
  "Full Stack",
  "Tailwind CSS",
  "Agile / Scrum",
];

export const highlights = [
  {
    code: "01",
    title: "Performance-focused",
    text: "Building fast, cross-browser compatible, production-grade web apps.",
  },
  {
    code: "02",
    title: "End-to-end ownership",
    text: "Owning features from database schema and API design through to polished, responsive UI.",
  },
  {
    code: "03",
    title: "Agile practitioner",
    text: "Comfortable collaborating in fast-moving Scrum teams with shared ownership.",
  },
  {
    code: "04",
    title: "Full-stack capability",
    text: "Comfortable across the stack — from PostgreSQL and Prisma to React components and CSS.",
  },
];

export const hiringReasons = [
  {
    code: "01",
    title: "Fast onboarding",
    text: "Comfortable jumping into React and Next.js codebases, reading existing patterns, and shipping without needing weeks of hand-holding.",
  },
  {
    code: "02",
    title: "Full-stack product sense",
    text: "I think about the whole system — database queries, API contracts, auth, and how the UI connects to it all — not just what the component looks like.",
  },
  {
    code: "03",
    title: "Reliable collaborator",
    text: "Used to Scrum delivery, cross-functional communication, production deadlines, and practical tradeoffs across the full stack.",
  },
  {
    code: "04",
    title: "Ship-ready & available",
    text: "Open to full-time, contract, and freelance opportunities — remote, hybrid, or on-site. Ready for interviews and quick to start.",
  },
];

export const projects = [
  {
    number: "01",
    year: "2025",
    title: "Sunday Schedule",
    category: "Volunteer & Multimedia Team Scheduler",
    accent: "#3f6b52",
    tone: "forest",
    productionHref: "https://multimedia-schedule.netlify.app/",
    githubLink: "https://github.com/GMarcell/sunday-schedule",
    summary:
      "A full-stack scheduling tool that lets church admins manage multimedia volunteers, assign roles like sound, projection, and livestream, and auto-generate conflict-free monthly schedules — replacing group chats and manual spreadsheets.",
    impact:
      "The strongest signal on this page: built solo for a real organization and actively used by non-technical volunteers to solve a real coordination problem. Proves end-to-end ownership — data modeling, auth, scheduling logic, and a UX that real people rely on every month, not just a tutorial clone.",
    screens: [
      "Dashboard",
      "Members",
      "Roles",
      "Service Planner",
      "Generated Schedule",
    ],
    requirements: [
      "Member directory with roles, qualifications, and availability",
      "Auto-schedule generator that fairly distributes monthly assignments",
      "Recurring and one-off service event planning",
    ],
    metrics: [
      { value: "Real", label: "Production Users" },
      { value: "Solo", label: "Full-Stack Build" },
      { value: "Auto", label: "Conflict-Free Scheduling" },
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Tailwind CSS"],
  },
  {
    number: "02",
    year: "2025",
    title: "FitTrack",
    category: "Gamified Fitness Tracker",
    accent: "#1e3a5f",
    tone: "navy",
    productionHref: "https://fittrack-nine-nu.vercel.app/",
    githubLink: "https://github.com/GMarcell/fittrack",
    summary:
      "A Solo Leveling-inspired fitness tracker that turns training into a hunter-leveling RPG — 8 tracked stats, AI-generated daily quests, and Groq-powered weekly training plans built around your recent sessions and weakest stats.",
    impact:
      "Full-stack build combining a real data model (Prisma/Postgres), auth (NextAuth v5), an AI planning pipeline (Groq/Llama 3.3), and a polished dark-navy UI with charts, view transitions, and a cron-driven quest lifecycle — not a CRUD tutorial.",
    screens: [
      "Dashboard",
      "Stats (Radar + Charts)",
      "Daily Quests",
      "Goals",
      "Benchmarks",
    ],
    requirements: [
      "8-stat hunter system with rank calculation and history tracking",
      "AI-generated daily quests targeting weakest stats, with accept/fail logic",
      "Groq-powered weekly training plan generation",
      "Session, goal, and benchmark tracking with fitness-standard comparisons",
    ],
    metrics: [
      { value: "8", label: "Tracked Hunter Stats" },
      { value: "AI", label: "Weekly Plan Generation" },
      { value: "E–S", label: "Rank System" },
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS v4",
    ],
  },
  {
    number: "03",
    year: "2025",
    title: "LeadFlow",
    category: "AI-Powered CRM & Lead Management",
    accent: "#0f2942",
    tone: "navy",
    productionHref: "https://leadflow-mu-eight.vercel.app/",
    githubLink: "https://github.com/GMarcell/leadflow",
    summary:
      "An AI-powered CRM for small businesses and freelancers — track leads on a drag-and-drop Kanban pipeline, schedule follow-ups, and get AI-generated note summaries and next-step suggestions, without the bloat of enterprise tools.",
    impact:
      "Full-stack build covering data modeling, auth, a real-time Kanban pipeline with dnd-kit, analytics dashboards, and a Groq-powered AI layer for note summarization and follow-up suggestions — a complete SaaS-shaped product, not a CRUD demo.",
    screens: [
      "Dashboard",
      "Leads",
      "Pipeline (Kanban)",
      "Analytics",
      "Settings",
    ],
    requirements: [
      "Lead/contact CRUD with deal value, source, and tags",
      "6-stage Kanban pipeline with drag-and-drop and per-stage value totals",
      "Follow-up scheduling with due/overdue/upcoming tracking",
      "AI note summarization and follow-up suggestions via Groq",
    ],
    metrics: [
      { value: "6", label: "Pipeline Stages" },
      { value: "AI", label: "Note Summarization" },
      { value: "Real-time", label: "Kanban Drag & Drop" },
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "Tailwind CSS v4",
    ],
  },
  {
    number: "04",
    year: "2025",
    title: "JobTracker",
    category: "AI-Powered Job Application Tracker",
    accent: "#14532d",
    tone: "green",
    productionHref: "https://jobtracker-ten-kappa.vercel.app/",
    githubLink: "https://github.com/GMarcell/jobtracker",
    summary:
      "An AI-powered job application tracker that manages your entire job search pipeline — track applications through 12 status stages, schedule interviews and follow-ups, and tailor resumes with AI for ATS compatibility.",
    impact:
      "The most complete project in this portfolio: 12 application statuses, 10 interview types, 7 follow-up types, a two-stage AI tailoring engine on Groq, ATS compliance scoring, Markdown-to-DOCX export, and 60 unit tests — a production-quality job search OS, not a CRUD demo.",
    screens: [
      "Dashboard",
      "Applications",
      "Application Detail",
      "Resume Manager",
      "AI Tailor",
    ],
    requirements: [
      "Application CRUD across 12 status stages with rich metadata (company, role, salary, source, notes)",
      "Interview scheduling across 10 interview types with automatic round tracking",
      "Follow-up management across 7 follow-up types with due-date tracking",
      "AI resume tailoring via Groq with keyword extraction and 0–100 ATS compliance scoring",
      "Resume export from Markdown to ATS-friendly .docx",
    ],
    metrics: [
      { value: "12", label: "Application Statuses" },
      { value: "AI", label: "ATS Resume Tailoring" },
      { value: "60", label: "Unit Tests" },
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS v4",
      "Groq SDK",
    ],
  },
  {
    number: "05",
    year: "2025",
    title: "GrandWealth",
    category: "Personal Wealth Management Dashboard",
    accent: "#78350f",
    tone: "gold",
    productionHref: "https://grandwealth.vercel.app/",
    githubLink: "https://github.com/GMarcell/grandwealth",
    summary:
      "A unified personal finance dashboard tracking cash flow, gold deposits, and stock portfolios in Rupiah — with rollover-aware monthly budgets, live market pricing, and interactive charts across a fully custom category system.",
    impact:
      "Full-stack build covering data modeling, auth, live market data integration (Yahoo Finance for gold and IDX stocks), a custom budget-cycle engine with rollover and caps, scheduled cron-based price updates, and CSV import/export — a complete personal finance platform, not a CRUD demo.",
    screens: [
      "Dashboard",
      "Transactions",
      "Gold",
      "Stocks",
      "Budgets",
      "Settings",
    ],
    requirements: [
      "Transaction CRUD with dynamic predefined and custom categories",
      "Gold tracking with live XAU/USD to IDR/gram conversion and unrealized P&L",
      "Stock portfolio tracking with live IDX pricing (.JK) and scheduled cron refresh",
      "Configurable monthly budgets with rollover, rollover caps, and progress alerts",
      "CSV import/export for transactions",
    ],
    metrics: [
      { value: "Live", label: "Gold & Stock Pricing" },
      { value: "12mo", label: "Budget History Tracking" },
      { value: "23", label: "Unit Tests" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS 4",
    ],
  },
];

export const experiences = [
  {
    period: "Jul 2024 - Present",
    company: "Rata.id",
    location: "South Jakarta",
    role: "Full Stack Engineer",
    description:
      "Own the frontend across multiple product areas at a dental healthtech company — including a procurement system (7 modules), a scheduling system, and a clinical review module. Led the migration of internal procurement workflows from spreadsheets to a structured web app used by 50+ staff. Refactored large god components into single-responsibility units, making the codebase readable without a walkthrough.",
    impact:
      "Delivered 7 procurement modules in 6 months while maintaining existing systems. Reduced onboarding time for new frontend devs by cleaning up monolithic components.",
    tags: [
      "React.js",
      "Full Stack",
      "PostgreSQL",
      "REST APIs",
      "Performance",
      "Production",
    ],
  },
  {
    period: "Mar 2023 - Jul 2024",
    company: "Merkle Innovation",
    location: "Indonesia",
    role: "Frontend Developer to Senior Track",
    description:
      "Joined as an intern and was promoted to full-time based on performance. Contributed to the Siloam Hospitals management system — one of Indonesia's largest private hospital networks — building four core modules: inpatient, outpatient, doctor management, and pharmacy. Worked Figma to production within a three-person frontend team.",
    impact:
      "Promoted intern-to-full-time within months. Built 4 hospital management modules serving a national hospital network. Consistently delivered Figma-to-production within sprint cycles.",
    tags: [
      "React.js",
      "TypeScript",
      "UI Architecture",
      "REST APIs",
      "Scrum",
      "Tailwind CSS",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend & Fullstack Core",
    items: [
      { name: "React.js", value: "95%" },
      { name: "Next.js", value: "90%" },
      { name: "JavaScript", value: "92%" },
      { name: "TypeScript", value: "80%" },
      { name: "HTML / CSS", value: "97%" },
    ],
  },
  {
    title: "Styling and UI",
    items: [
      { name: "Tailwind CSS", value: "93%" },
      { name: "Sass / SCSS", value: "88%" },
      { name: "Responsive Design", value: "95%" },
      { name: "CSS Animations", value: "82%" },
      { name: "Cross-browser", value: "90%" },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", value: "80%" },
      { name: "Prisma", value: "75%" },
      { name: "PostgreSQL", value: "72%" },
      { name: "Supabase", value: "70%" },
      { name: "REST API Design", value: "78%" },
    ],
  },
  {
    title: "Process and Tools",
    items: [
      { name: "Agile / Scrum", value: "90%" },
      { name: "Git / GitHub", value: "88%" },
      { name: "Figma", value: "78%" },
      { name: "Python", value: "65%" },
      { name: "C++", value: "60%" },
    ],
  },
];

export const certifications = [
  { code: "WD", name: "Responsive Web Design", issuer: "freeCodeCamp" },
  {
    code: "RJ",
    name: "Membuat Website dengan ReactJS",
    issuer: "Alterra Academy",
  },
  {
    code: "FE",
    name: "Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
  },
  {
    code: "RE",
    name: "React",
    issuer: "Hackerank",
  },
];

export const contactLinks = [
  {
    href: "mailto:grand1310marcell@gmail.com",
    label: "Email",
    value: "grand1310marcell@gmail.com",
    code: "EM",
  },
  {
    href: "https://www.linkedin.com/in/grandmarcell",
    label: "LinkedIn",
    value: "linkedin.com/in/grandmarcell",
    code: "IN",
  },
  {
    href: "",
    label: "Location",
    value: "Tangerang, Indonesia · Open to relocation",
    code: "LC",
  },
];

export const realWork = [
  {
    number: "01",
    company: "Rata.id",
    title: "Procurement system — spreadsheets to web app",
    period: "2024 – Present",
    confidential:
      "Internal company tool — not publicly accessible for confidentiality reasons. Happy to walk through it live in an interview.",
    summary:
      "Rata.id's internal procurement workflow lived entirely in spreadsheets. I led the frontend migration to a structured web application covering the full purchase lifecycle — from initial request through to delivery confirmation and vendor performance tracking.",
    modules: [
      "Purchase Request",
      "Quotation Comparison",
      "Purchase Order",
      "Payment Request",
      "Proof of Delivery",
      "Item Management",
      "Vendor Management",
    ],
    role: "Owned the entire frontend layer across 7 procurement modules, a scheduling system, and a clinical review module. Collaborated closely on REST API contract design and PostgreSQL schema decisions with the backend teammate to ship a cohesive full-stack product.",
    context:
      "Delivered across six months while maintaining the existing spreadsheet tooling in parallel and continuing work on other product areas. Replaced a manual process used by 50+ staff across multiple clinics.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "PostgreSQL"],
  },
  {
    number: "02",
    company: "Merkle Innovation · Siloam Hospitals",
    title: "Hospital management system",
    period: "2023 – 2024",
    confidential:
      "Internal company tool — not publicly accessible for confidentiality reasons. Happy to walk through it live in an interview.",
    summary:
      "Built and maintained four core modules of a hospital management system for Siloam Hospitals — one of Indonesia's largest private hospital networks — within a three-person frontend team.",
    modules: [
      "Inpatient",
      "Outpatient",
      "Doctor Management",
      "Pharmacy",
      "Bed Management",
    ],
    role: "Frontend implementation across 4 hospital management modules from Figma handoffs through to production deployment. Worked closely with backend teams on REST API integration and participated in cross-stack architectural decisions within a three-person frontend team.",
    context:
      "Joined as an intern, was promoted to full-time based on performance, and took on increasing module ownership over the engagement.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Figma", "Scrum"],
  },
];

export const oldProjects = [
  {
    number: "01",
    year: "2024",
    title: "MediBook",
    category: "Healthcare Appointment Platform",
    accent: "#d6b35a",
    tone: "gold",
    productionHref: "https://medibook9.netlify.app/",
    githubLink: "https://github.com/GMarcell/medibook",
    summary:
      "A healthcare appointment platform for finding doctors by specialty, viewing real-time availability, and booking visits without phone calls.",
    impact:
      "Shows I can handle sensitive, high-trust workflows with clear forms, accessibility, validation, and dashboard complexity.",
    screens: [
      "Search",
      "Doctor Listing",
      "Doctor Profile",
      "Booking Flow",
      "Dashboard",
      "Admin",
    ],
    requirements: [
      "Specialty, location, and availability filters",
      "Three-step booking flow with Zod validation",
      "Patient auth, cancellation, and rescheduling",
    ],
    metrics: [
      { value: "24+", label: "Screens" },
      { value: "98", label: "Lighthouse" },
      { value: "0.8s", label: "Load Target" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "NextAuth.js",
    ],
  },
  {
    number: "02",
    year: "2024",
    title: "FinTrack",
    category: "Personal Finance Dashboard",
    accent: "#e1c16e",
    tone: "gold",
    productionHref: "https://finnance-tracker-main.netlify.app/",
    githubLink: "https://github.com/GMarcell/fintrack",
    summary:
      "A personal finance dashboard that visualises income, expenses, and savings goals with local-first data storage and themeable analytics.",
    impact:
      "Demonstrates data-heavy UI thinking, chart readability, state management, empty states, and privacy-first product decisions.",
    screens: [
      "Overview",
      "Transactions",
      "Budget Goals",
      "Analytics",
      "Settings",
    ],
    requirements: [
      "Income and expense transaction management",
      "Animated charts, tooltips, and count-up stats",
      "Dark/light mode plus CSV export",
    ],
    metrics: [
      { value: "6", label: "Chart Types" },
      { value: "12", label: "Categories" },
      { value: "42kb", label: "Bundle Target" },
    ],
    stack: ["React", "Recharts", "Sass", "Context API", "date-fns"],
  },
  {
    number: "03",
    year: "2023",
    title: "Shopwave",
    category: "Animated E-Commerce Storefront",
    accent: "#c9963e",
    tone: "gold",
    productionHref: "https://shopwave-01.netlify.app/",
    githubLink: "https://github.com/GMarcell/shopwave",
    summary:
      "A modern storefront focused on motion, pixel-perfect design translation, product discovery, cart behavior, and checkout flow polish.",
    impact:
      "Proves Figma-to-code precision, motion taste, mobile commerce UX, and the ability to make common flows feel premium.",
    screens: [
      "Homepage",
      "Product Listing",
      "Product Detail",
      "Cart Drawer",
      "Checkout",
      "Success",
    ],
    requirements: [
      "Product filters, variants, wishlist, and cart drawer",
      "Multi-step checkout with mock Stripe UI",
      "Framer Motion transitions respecting reduced motion",
    ],
    metrics: [
      { value: "30+", label: "Animations" },
      { value: "8", label: "Pages" },
      { value: "60fps", label: "Target" },
    ],
    stack: ["Next.js", "Framer Motion", "Zustand", "Tailwind CSS", "Stripe UI"],
  },
  {
    number: "04",
    year: "2023",
    title: "DesignOS",
    category: "Component Library & Design System",
    accent: "#f0cf78",
    tone: "gold",
    productionHref: "https://design-os01.netlify.app/",
    githubLink: "https://github.com/GMarcell/designos",
    summary:
      "A reusable React component library with typed APIs, token-based theming, Storybook documentation, and interaction test coverage.",
    impact:
      "Signals senior-track engineering habits: reusable APIs, documented components, test coverage, and maintainable design tokens.",
    screens: [
      "Primitives",
      "Layout",
      "Feedback",
      "Navigation",
      "Overlays",
      "Data",
    ],
    requirements: [
      "Forty-plus accessible, fully typed components",
      "CSS variable theming for light, dark, and brand tokens",
      "Storybook docs, Chromatic checks, and Vitest coverage",
    ],
    metrics: [
      { value: "40+", label: "Components" },
      { value: "94%", label: "Coverage" },
      { value: "18kb", label: "Gzipped" },
    ],
    stack: ["React", "TypeScript", "Storybook", "Vitest", "tsup"],
  },
  {
    number: "05",
    year: "2022",
    title: "WeatherNow",
    category: "Minimal Weather Application",
    accent: "#b98a2f",
    tone: "gold",
    productionHref: "https://weather-now001.netlify.app/",
    githubLink: "https://github.com/GMarcell/weathernow",
    summary:
      "A polished weather app with live OpenWeather data, geolocation, city search, saved recents, and pure CSS weather animations.",
    impact:
      "Shows I can make small products feel complete with API resilience, loading states, local persistence, and careful micro-interactions.",
    screens: ["Current", "Forecast", "Hourly", "Search", "Error States"],
    requirements: [
      "Current weather and five-day forecast from API data",
      "Geolocation, autocomplete, and recent searches",
      "Animated condition icons with reduced-motion support",
    ],
    metrics: [
      { value: "5", label: "Forecast Days" },
      { value: "0.6s", label: "Load Target" },
      { value: "100", label: "Lighthouse" },
    ],
    stack: ["React", "OpenWeather API", "CSS Modules", "Axios", "Netlify"],
  },
  {
    number: "06",
    year: "2025",
    title: "Sunday Schedule",
    category: "Volunteer & Multimedia Team Scheduler",
    accent: "#3f6b52",
    tone: "forest",
    productionHref: "https://multimedia-schedule.netlify.app/",
    githubLink: "https://github.com/GMarcell/sunday-schedule",
    summary:
      "A full-stack scheduling tool that lets church admins manage multimedia volunteers, assign roles like sound, projection, and livestream, and auto-generate conflict-free monthly schedules — replacing group chats and manual spreadsheets.",
    impact:
      "Proves end-to-end full-stack ownership: data modeling, auth, role logic, and a UI non-technical volunteers can actually use. Built to solve a real coordination problem and currently used by a real organization, not a tutorial clone.",
    screens: [
      "Dashboard",
      "Members",
      "Roles",
      "Service Planner",
      "Generated Schedule",
    ],
    requirements: [
      "Member directory with roles, qualifications, and availability",
      "Auto-schedule generator that fairly distributes monthly assignments",
      "Recurring and one-off service event planning",
    ],
    metrics: [
      { value: "Real", label: "Production Users" },
      { value: "Solo", label: "Full-Stack Build" },
      { value: "Auto", label: "Conflict-Free Scheduling" },
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Tailwind CSS"],
  },
  {
    number: "07",
    year: "2025",
    title: "FitTrack",
    category: "Gamified Fitness Tracker",
    accent: "#1e3a5f",
    tone: "navy",
    productionHref: "https://fittrack-nine-nu.vercel.app/",
    githubLink: "https://github.com/GMarcell/fittrack",
    summary:
      "A Solo Leveling-inspired fitness tracker that turns training into a hunter-leveling RPG — 8 tracked stats, AI-generated daily quests, and Groq-powered weekly training plans built around your recent sessions and weakest stats.",
    impact:
      "Full-stack build combining a real data model (Prisma/Postgres), auth (NextAuth v5), an AI planning pipeline (Groq/Llama 3.3), and a polished dark-navy UI with charts, view transitions, and a cron-driven quest lifecycle — not a CRUD tutorial.",
    screens: [
      "Dashboard",
      "Stats (Radar + Charts)",
      "Daily Quests",
      "Goals",
      "Benchmarks",
    ],
    requirements: [
      "8-stat hunter system with rank calculation and history tracking",
      "AI-generated daily quests targeting weakest stats, with accept/fail logic",
      "Groq-powered weekly training plan generation",
      "Session, goal, and benchmark tracking with fitness-standard comparisons",
    ],
    metrics: [
      { value: "8", label: "Tracked Hunter Stats" },
      { value: "AI", label: "Weekly Plan Generation" },
      { value: "E–S", label: "Rank System" },
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS v4",
    ],
  },
  {
    number: "08",
    year: "2025",
    title: "LeadFlow",
    category: "AI-Powered CRM & Lead Management",
    accent: "#0f2942",
    tone: "navy",
    productionHref: "https://leadflow-mu-eight.vercel.app/",
    githubLink: "https://github.com/GMarcell/leadflow",
    summary:
      "An AI-powered CRM for small businesses and freelancers — track leads on a drag-and-drop Kanban pipeline, schedule follow-ups, and get AI-generated note summaries and next-step suggestions, without the bloat of enterprise tools.",
    impact:
      "Full-stack build covering data modeling, auth, a real-time Kanban pipeline with dnd-kit, analytics dashboards, and a Groq-powered AI layer for note summarization and follow-up suggestions — a complete SaaS-shaped product, not a CRUD demo.",
    screens: [
      "Dashboard",
      "Leads",
      "Pipeline (Kanban)",
      "Analytics",
      "Settings",
    ],
    requirements: [
      "Lead/contact CRUD with deal value, source, and tags",
      "6-stage Kanban pipeline with drag-and-drop and per-stage value totals",
      "Follow-up scheduling with due/overdue/upcoming tracking",
      "AI note summarization and follow-up suggestions via Groq",
    ],
    metrics: [
      { value: "6", label: "Pipeline Stages" },
      { value: "AI", label: "Note Summarization" },
      { value: "Real-time", label: "Kanban Drag & Drop" },
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "Tailwind CSS v4",
    ],
  },
  {
    number: "09",
    year: "2025",
    title: "JobTracker",
    category: "AI-Powered Job Application Tracker",
    accent: "#14532d",
    tone: "green",
    productionHref: "https://jobtracker-ten-kappa.vercel.app/",
    githubLink: "https://github.com/GMarcell/jobtracker",
    summary:
      "An AI-powered job application tracker that manages your entire job search pipeline — track applications through 12 status stages, schedule interviews and follow-ups, and tailor resumes with AI for ATS compatibility.",
    impact:
      "Full-stack build covering data modeling, auth, application/interview/follow-up pipelines, a two-stage AI tailoring engine on Groq, ATS compliance scoring, and Markdown-to-DOCX resume export — a complete job search operations tool, not a CRUD demo.",
    screens: [
      "Dashboard",
      "Applications",
      "Application Detail",
      "Resume Manager",
      "AI Tailor",
    ],
    requirements: [
      "Application CRUD across 12 status stages with rich metadata (company, role, salary, source, notes)",
      "Interview scheduling across 10 interview types with automatic round tracking",
      "Follow-up management across 7 follow-up types with due-date tracking",
      "AI resume tailoring via Groq with keyword extraction and 0–100 ATS compliance scoring",
      "Resume export from Markdown to ATS-friendly .docx",
    ],
    metrics: [
      { value: "12", label: "Application Statuses" },
      { value: "AI", label: "ATS Resume Tailoring" },
      { value: "60", label: "Unit Tests" },
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS v4",
      "Groq SDK",
    ],
  },
  {
    number: "10",
    year: "2025",
    title: "GrandWealth",
    category: "Personal Wealth Management Dashboard",
    accent: "#78350f",
    tone: "gold",
    productionHref: "https://your-grandwealth-deployment.vercel.app/",
    githubLink: "https://github.com/GMarcell/grandwealth",
    summary:
      "A unified personal finance dashboard tracking cash flow, gold deposits, and stock portfolios in Rupiah — with rollover-aware monthly budgets, live market pricing, and interactive charts across a fully custom category system.",
    impact:
      "Full-stack build covering data modeling, auth, live market data integration (Yahoo Finance for gold and IDX stocks), a custom budget-cycle engine with rollover and caps, scheduled cron-based price updates, and CSV import/export — a complete personal finance platform, not a CRUD demo.",
    screens: [
      "Dashboard",
      "Transactions",
      "Gold",
      "Stocks",
      "Budgets",
      "Settings",
    ],
    requirements: [
      "Transaction CRUD with dynamic predefined and custom categories",
      "Gold tracking with live XAU/USD to IDR/gram conversion and unrealized P&L",
      "Stock portfolio tracking with live IDX pricing (.JK) and scheduled cron refresh",
      "Configurable monthly budgets with rollover, rollover caps, and progress alerts",
      "CSV import/export for transactions",
    ],
    metrics: [
      { value: "Live", label: "Gold & Stock Pricing" },
      { value: "12mo", label: "Budget History Tracking" },
      { value: "23", label: "Unit Tests" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS 4",
    ],
  },
];
