export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#hire-fit", label: "Hire Fit" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

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
  "Tailwind CSS",
  "Sass",
  "Scrum",
];

export const tickerItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Sass",
  "Agile / Scrum",
  "Responsive UI",
  "Full Stack",
  "Performance",
  "Design Systems",
];

export const highlights = [
  {
    code: "01",
    title: "Performance-focused",
    text: "Building fast, cross-browser compatible, production-grade web apps.",
  },
  {
    code: "02",
    title: "Design-to-code",
    text: "Translating wireframes and polished mockups into crisp, usable UI.",
  },
  {
    code: "03",
    title: "Agile practitioner",
    text: "Comfortable collaborating in fast-moving Scrum teams with shared ownership.",
  },
  {
    code: "04",
    title: "Growth trajectory",
    text: "Progressed quickly into larger feature ownership and senior-track expectations.",
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
    title: "Product-minded UI",
    text: "I care about what the interface helps users accomplish, not just whether the component matches the mockup.",
  },
  {
    code: "03",
    title: "Reliable collaborator",
    text: "Used to Scrum delivery, cross-functional communication, production deadlines, and practical tradeoffs with designers and backend teams.",
  },
];

export const projects = [
  {
    number: "01",
    year: "2024",
    title: "MediBook",
    category: "Healthcare Appointment Platform",
    accent: "#d6b35a",
    tone: "gold",
    productionHref: "https://medibook9.netlify.app/",
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
];

export const experiences = [
  {
    period: "Jul 2024 - Present",
    company: "Rata.id",
    location: "South Jakarta",
    role: "Full Stack Engineer",
    description:
      "Own the frontend across multiple product areas at a dental healthtech company — including a procurement system (7 modules), a scheduling system, and a clinical review module. Led the migration of internal procurement workflows from spreadsheets to a structured web app. Refactored large god components into single-responsibility units, making the codebase readable without a walkthrough.",
    tags: ["React.js", "Full Stack", "Performance", "Production"],
  },
  {
    period: "Mar 2023 - Jul 2024",
    company: "Merkle Innovation",
    location: "Indonesia",
    role: "Frontend Developer to Senior Track",
    description:
      "Joined as an intern and was promoted to full-time based on performance. Contributed to the Siloam Hospitals management system — building four core modules: inpatient, outpatient, doctor management, and pharmacy. Worked Figma to production within a three-person frontend team.",
    tags: ["React.js", "UI Architecture", "Scrum", "Tailwind CSS"],
  },
];

export const skillGroups = [
  {
    title: "Frontend Core",
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
    issuer: "Dicoding Indonesia",
  },
  { code: "PY", name: "Python Programming", issuer: "Certification Authority" },
  { code: "CP", name: "C++ Programming", issuer: "Certification Authority" },
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
    value: "Tangerang, Indonesia · Open to relocation — Netherlands 🇳🇱",
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
    role: "Full frontend ownership. A teammate built and maintained the backend API and PostgreSQL schema.",
    context:
      "Delivered across six months while maintaining the existing spreadsheet tooling in parallel and continuing work on other product areas.",
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
    role: "Frontend implementation from Figma handoffs through to production deployment, working within a Scrum workflow.",
    context:
      "Joined as an intern, was promoted to full-time based on performance, and took on increasing module ownership over the engagement.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Figma", "Scrum"],
  },
];
