// All site copy lives here so text can change without touching components.

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  role: string;
  dates: string;
  summary: string;
  highlights: string[];
  tech: string[];
  link?: { label: string; href: string };
  // Systems diagram: each row is a left-to-right chain of nodes.
  flow: { label: string; kind?: "external" | "core" }[][];
  metrics?: { value: string; label: string }[];
};

export type SideProject = {
  title: string;
  category: string;
  summary: string;
  tech: string[];
};

export const profile = {
  name: "Damilola Peter Meshe",
  shortName: "Damilola Meshe",
  initials: "DM",
  title: "Backend Engineer",
  focus: "Python · Django · AWS · MCP",
  location: "Lagos, Nigeria",
  availability: "Open to full-time roles & projects",
  currentRole: "Full Stack Developer",
  currentCompany: "Benmore Technologies",
  languages: "English · French · Yoruba",
  bio: "Backend engineer (Python, Django, AWS) who builds, ships and runs production systems for US clients: a fuel-rewards app with 5K+ active users, logistics and ERP integrations, and AI connectors (MCP) for Claude and ChatGPT.",
  email: "mdpeter28@gmail.com",
  github: "https://github.com/phlenfyl",
  githubHandle: "phlenfyl",
  linkedin: "https://www.linkedin.com/in/damilola-peter-meshe-4b2b26231/",
  cv: "/Damilola_Meshe_CV.pdf",
};

export const stats = [
  { value: "5K+", key: "Active users", label: "active users on Noble Gas Rewards", detail: "2,000 in the first two weeks" },
  { value: "80K+", key: "Orders processed", label: "orders through the freight portal", detail: "Sole engineer, end to end" },
  { value: "107→40", key: "CI runtime", label: "minutes of CI time", detail: "Across 12,000+ tests" },
  { value: "531", key: "Events recovered", label: "lost delivery events recovered", detail: "Traced to an AWS WAF rule" },
];

export const projects: Project[] = [
  {
    id: "SYS-01",
    title: "Noble Gas Rewards",
    shortTitle: "Noble Gas Rewards",
    category: "Mobile · Loyalty",
    tagline: "Fuel & car-wash loyalty app, live on iOS & Android",
    role: "Lead developer",
    dates: "2025 — Present",
    summary:
      "Loyalty app for a fuel and car-wash chain in Connecticut and Massachusetts. Reached 2,000 users in its first two weeks and now serves 5K+ active users. I built and launched it, run its AWS infrastructure, and handle production support.",
    highlights: [
      "Gilbarco POS and car-wash vendor integrations, so points post automatically at the pump",
      "Migrated Heroku → AWS with Terraform (ECS Fargate, RDS, ElastiCache, S3, CloudFront)",
      "Cut CI from 107 to ~40 min across a 12,000+ test suite",
      "Employer fuel program with real-time tiers over WebSockets, a new B2B revenue stream",
      "MCP server so staff run back-office tasks from Claude & ChatGPT, behind OAuth 2.1 and audited approvals",
    ],
    tech: ["Django", "Celery", "Redis", "PostgreSQL", "Flutter", "WebSockets", "AWS", "Terraform", "MCP"],
    link: { label: "noble-portal.com", href: "https://www.noble-portal.com/" },
    flow: [
      [{ label: "Gilbarco POS", kind: "external" }, { label: "Django · Celery", kind: "core" }, { label: "Flutter app" }],
      [{ label: "Claude / ChatGPT", kind: "external" }, { label: "MCP server" }, { label: "AWS ECS · RDS", kind: "core" }],
    ],
    metrics: [
      { value: "5K+", label: "active users" },
      { value: "−60%", label: "CI time" },
      { value: "10+", label: "incidents root-caused" },
    ],
  },
  {
    id: "SYS-02",
    title: "The 357 Company → ALG Worldwide Logistics",
    shortTitle: "357 Company → ALG",
    category: "Logistics · Web platform",
    tagline: "Freight shipping portal, 80,000+ orders processed",
    role: "Sole engineer",
    dates: "2024 — Present",
    summary:
      "Orders, shipping labels, carrier onboarding and customer tracking for a Chicago/Nashville freight broker. I led the platform through its acquisition by ALG Worldwide Logistics (Feb 2025) and moved it onto ALG's AWS.",
    highlights: [
      "DigitalOcean → AWS migration with every table verified by row count",
      "Better Trucks & eCourier carrier APIs with exactly-once booking",
      "Traced dropped webhooks to an AWS WAF rule; recovered 531 delivery events",
      "Closed a cross-customer data leak; tests grew from 267 to 1,100+",
    ],
    tech: ["Django", "PostgreSQL", "AWS EC2", "WAF", "Carrier APIs", "Webhooks"],
    link: { label: "Case study", href: "https://benmore.tech/case-studies/the-357-company/" },
    flow: [
      [{ label: "DigitalOcean", kind: "external" }, { label: "ALG AWS · EC2 + WAF", kind: "core" }],
      [{ label: "Better Trucks", kind: "external" }, { label: "Webhooks" }, { label: "Django portal", kind: "core" }],
    ],
    metrics: [
      { value: "80K+", label: "orders" },
      { value: "531", label: "events recovered" },
      { value: "4×", label: "test suite" },
    ],
  },
  {
    id: "SYS-03",
    title: "Sun Theory",
    shortTitle: "Sun Theory",
    category: "Integrations · ERP",
    tagline: "POS, wholesale & payroll → Sage Intacct, 13 dispensaries",
    role: "Integration engineer",
    dates: "2024 — Present",
    summary:
      "Automated bookkeeping for a Colorado cannabis retailer with 13 dispensaries. POS, wholesale and payroll data post into Sage Intacct by themselves, with an MCP connector so the team can query it from Claude and ChatGPT.",
    highlights: [
      "Flowhub sales → daily balanced GL journal batches, with automatic reversals for voids",
      "LeafLink orders → Sage AR invoices, with payments synced back",
      "Greenleaf payroll → Sage journal entries",
      "Every sync idempotent and retry-safe, with failure alerts",
    ],
    tech: ["Django", "Sage Intacct XML", "Flowhub", "LeafLink", "Greenleaf", "MCP"],
    link: { label: "Case studies", href: "https://benmore.tech/case-studies/" },
    flow: [
      [{ label: "Flowhub POS", kind: "external" }, { label: "Sync engine", kind: "core" }, { label: "Sage GL" }],
      [{ label: "LeafLink", kind: "external" }, { label: "Sync engine", kind: "core" }, { label: "Sage AR" }],
      [{ label: "Greenleaf", kind: "external" }, { label: "Sync engine", kind: "core" }, { label: "Sage JE" }],
    ],
    metrics: [
      { value: "13", label: "dispensaries" },
      { value: "3", label: "systems synced" },
    ],
  },
  {
    id: "SYS-04",
    title: "Benmore Blueprint",
    shortTitle: "Benmore Blueprint",
    category: "Internal platform",
    tagline: "Agency client & operations platform",
    role: "Core developer",
    dates: "2024 — Present",
    summary:
      "Benmore's own platform for clients and staff: client portal, billing, finance, sales, hiring and HR in one Django app. Co-built with the founder, with ~1,000 commits from me.",
    highlights: [
      "E-signature documents with Stripe payment links and installment invoices",
      "Payables matching, P&L reporting, cash-flow forecasting, Plaid bank feeds",
      "2FA with device trust; encrypted data for 2,000+ applicants",
      "Fixed a site-wide login outage; sessions extended from 8 hours to 10 days",
    ],
    tech: ["Django", "PostgreSQL", "Redis", "Stripe", "Plaid", "Slack API"],
    link: { label: "client.benmore.tech", href: "https://client.benmore.tech/" },
    flow: [
      [{ label: "Stripe · Plaid · Slack", kind: "external" }, { label: "Django platform", kind: "core" }],
      [{ label: "Clients" }, { label: "Billing" }, { label: "Finance" }, { label: "HR" }],
    ],
    metrics: [
      { value: "~1,000", label: "commits" },
      { value: "2,000+", label: "applicants encrypted" },
      { value: "8h→10d", label: "sessions" },
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "Sales CRM Automation",
    category: "Automation · 2024—2026",
    summary:
      "Scheduled jobs that feed daily sales, bookings, no-shows and ad spend into a Notion CRM, plus Calendly webhooks that stamp closer hand-off dates.",
    tech: ["Flask", "Notion API", "Calendly", "APScheduler"],
  },
  {
    title: "NoteVs for VS Code",
    category: "Developer tools · AI · 2026",
    summary:
      "My own VS Code extension for notes next to code, with a Rasa-based AI agent, push-to-talk voice input and Notion/Obsidian export. Six Marketplace releases.",
    tech: ["TypeScript", "VS Code API", "Rasa", "MCP"],
  },
];

export const experience = [
  {
    dates: "Apr 2024 — Present",
    shortDates: "2024 — now",
    role: "Full Stack Developer",
    org: "Benmore Technologies",
    place: "Chicago · Remote",
    summary: "Build and run production systems for US clients across loyalty, logistics, ERP and internal platforms.",
  },
  {
    dates: "Apr 2022 — Jan 2023",
    shortDates: "2022 — 2023",
    role: "Technical Support Engineer",
    org: "NuMartng (Nudakol Systems)",
    place: "Lagos",
    summary: "Customer purchase support and inventory and sales tracking for an e-commerce store.",
  },
  {
    dates: "2024",
    shortDates: "2024",
    role: "B.Sc. Computer Science",
    org: "Mountain Top University",
    place: "Ogun State",
    summary: "",
  },
];

export const stack = [
  { group: "Languages", items: ["Python", "SQL", "TypeScript", "JavaScript", "Dart"] },
  { group: "Backend", items: ["Django", "DRF", "Celery", "Channels", "Flask", "FastAPI", "WebSockets"] },
  { group: "Data", items: ["PostgreSQL", "Redis", "MySQL"] },
  { group: "Cloud & DevOps", items: ["AWS (ECS, EC2, RDS, S3, CloudFront, WAF)", "Terraform", "Docker", "GitHub Actions", "DigitalOcean"] },
  { group: "Integrations", items: ["Sage Intacct", "Gilbarco POS", "Stripe", "Plaid", "Carrier APIs", "Notion", "Slack"] },
  { group: "AI", items: ["MCP servers", "LLM agents", "RAG", "Rasa"] },
];

export const incidents = [
  {
    severity: "HIGH",
    symptom: "Carrier delivery updates stopped arriving after a server migration",
    cause: "An AWS WAF rule silently dropping webhook calls",
    fix: "Rule fixed; 531 events replayed, 40 order statuses corrected",
  },
  {
    severity: "HIGH",
    symptom: "Background worker killed every few hours",
    cause: "Worker processes grew in memory and were never recycled",
    fix: "Per-child memory limits plus a memory alarm",
  },
  {
    severity: "MED",
    symptom: "Merges waited 107 minutes on CI",
    cause: "Test fixtures rebuilding schemas before every test",
    fix: "Fixture scoping and parallel workers: ~40 min",
  },
  {
    severity: "MED",
    symptom: "Sign-ins failing across a client portal after a security release",
    cause: "Login/CSRF configuration conflict",
    fix: "Config fixed; sessions extended from 8 hours to 10 days",
  },
];
