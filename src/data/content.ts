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
  currentRole: "Full Stack Developer",
  currentCompany: "Benmore Technologies",
  languages: "English · French · Yoruba",
  bio: "Backend engineer (Python, Django, AWS) who builds, ships and runs production systems for US clients: a fuel and car-wash rewards app, logistics and ERP integrations, and AI connectors (MCP) for Claude and ChatGPT.",
  email: "mdpeter28@gmail.com",
  github: "https://github.com/phlenfyl",
  githubHandle: "phlenfyl",
  linkedin: "https://www.linkedin.com/in/damilola-peter-meshe-4b2b26231/",
  cv: "/Damilola_Meshe_CV.pdf",
};

export const stats = [
  { value: "2,000", key: "Users in 2 weeks", label: "rewards-app users in the first two weeks", detail: "Fuel & car-wash loyalty app" },
  { value: "80K+", key: "Orders processed", label: "orders through the freight portal", detail: "Sole engineer, end to end" },
  { value: "107→40", key: "CI runtime", label: "minutes of CI time", detail: "Across 12,000+ tests" },
  { value: "4", key: "Platforms", label: "production platforms I build & run", detail: "Loyalty, logistics, ERP, operations" },
];

export const projects: Project[] = [
  {
    id: "SYS-01",
    title: "Noble Gas Rewards",
    shortTitle: "Noble Gas Rewards",
    category: "Mobile · Loyalty",
    tagline: "Fuel & car-wash loyalty app, live on iOS & Android",
    role: "Lead developer",
    dates: "2025, 2026 → Present",
    summary:
      "Loyalty app for a chain of fuel stations and car washes in Connecticut and Massachusetts, live on iOS and Android. It reached 2,000 users in its first two weeks. I built and launched it, run its cloud infrastructure, and handle production support.",
    highlights: [
      "Fuel POS and car-wash vendor integrations, so points post automatically at the pump",
      "Moved production onto AWS with infrastructure as code (Terraform)",
      "Cut CI from 107 to ~40 min across a 12,000+ test suite",
      "Employer rewards program with real-time tier updates over WebSockets",
      "AI connector (MCP) so staff run back-office tasks from Claude & ChatGPT, behind approvals and audit logs",
    ],
    tech: ["Django", "Celery", "Redis", "PostgreSQL", "Flutter", "WebSockets", "AWS", "Terraform", "MCP"],
    link: { label: "noble-portal.com", href: "https://www.noble-portal.com/" },
    flow: [
      [{ label: "Fuel POS", kind: "external" }, { label: "Django · Celery", kind: "core" }, { label: "Mobile app" }],
      [{ label: "Claude / ChatGPT", kind: "external" }, { label: "MCP server" }, { label: "AWS", kind: "core" }],
    ],
    metrics: [
      { value: "2,000", label: "users in 2 weeks" },
      { value: "−60%", label: "CI time" },
      { value: "12K+", label: "tests" },
    ],
  },
  {
    id: "SYS-02",
    title: "The 357 Company → ALG Worldwide Logistics",
    shortTitle: "357 Company → ALG",
    category: "Logistics · Web platform",
    tagline: "Orders, labels and carrier onboarding, 80,000+ orders processed",
    role: "Sole engineer",
    dates: "2024, 2026 → Present",
    summary:
      "Orders, shipping labels, carrier onboarding and customer tracking for a Chicago/Nashville freight broker. I've owned it end to end, including through the company's acquisition by ALG Worldwide Logistics (Feb 2025) and the move onto ALG's cloud.",
    highlights: [
      "Cloud-to-cloud migration with every table verified by row count",
      "Carrier API integrations with exactly-once booking, so freight is never double-booked",
      "Durable webhook intake with replay, so no delivery update is lost",
      "Tenant data isolation and access-control hardening; test suite grown 4×",
    ],
    tech: ["Django", "PostgreSQL", "AWS", "Carrier APIs", "Webhooks"],
    link: { label: "Case study", href: "https://benmore.tech/case-studies/the-357-company/" },
    flow: [
      [{ label: "Legacy host", kind: "external" }, { label: "AWS", kind: "core" }],
      [{ label: "Carrier APIs", kind: "external" }, { label: "Webhooks" }, { label: "Django portal", kind: "core" }],
    ],
    metrics: [
      { value: "80K+", label: "orders" },
      { value: "4×", label: "test suite" },
    ],
  },
  {
    id: "SYS-03",
    title: "Sun Theory",
    shortTitle: "Sun Theory",
    category: "Integrations · ERP",
    tagline: "POS, wholesale & payroll → ERP for a multi-location retailer",
    role: "Integration engineer",
    dates: "2024 → Present",
    summary:
      "Automated bookkeeping for a multi-location retailer. POS sales, wholesale orders and payroll post into the ERP by themselves, with an AI connector so the team can query their data from Claude and ChatGPT.",
    highlights: [
      "POS sales → daily balanced GL journal batches, with automatic reversals for voids",
      "Wholesale orders → ERP customers and AR invoices, with payments synced back",
      "Payroll runs → ERP journal entries",
      "Every sync idempotent and retry-safe, with failure alerts",
    ],
    tech: ["Django", "ERP XML API", "POS API", "Wholesale API", "Payroll API", "MCP"],
    link: { label: "Case studies", href: "https://benmore.tech/case-studies/" },
    flow: [
      [{ label: "POS", kind: "external" }, { label: "Sync engine", kind: "core" }, { label: "ERP GL" }],
      [{ label: "Wholesale", kind: "external" }, { label: "Sync engine", kind: "core" }, { label: "ERP AR" }],
      [{ label: "Payroll", kind: "external" }, { label: "Sync engine", kind: "core" }, { label: "ERP JE" }],
    ],
    metrics: [{ value: "3", label: "systems synced" }],
  },
  {
    id: "SYS-04",
    title: "Benmore Client & Operations Portal",
    shortTitle: "Benmore Client Portal",
    category: "Internal platform",
    tagline: "Client portal, billing, finance and team tools in one app",
    role: "Core developer",
    dates: "2024 → Present",
    summary:
      "Co-built Benmore's client and operations portal with the founder, with ~1,000 commits from me: client portal, billing, finance and team tools in one Django app.",
    highlights: [
      "Client billing with Stripe: e-signature documents with payment links, installment invoices, and webhook-driven receipts",
      "Finance and reporting tools, including payment reconciliation and bank-data integration",
      "Security: 2FA and device trust, OWASP ZAP fixes and field-level encryption for sensitive data",
      "Extended sessions from 8 hours to 10 days",
    ],
    tech: ["Django", "PostgreSQL", "Redis", "Stripe", "Tailwind CSS"],
    link: { label: "client.benmore.tech", href: "https://client.benmore.tech/" },
    flow: [
      [{ label: "Stripe · Bank data", kind: "external" }, { label: "Django portal", kind: "core" }],
      [{ label: "Clients" }, { label: "Billing" }, { label: "Finance" }, { label: "Team tools" }],
    ],
    metrics: [
      { value: "~1,000", label: "commits" },
      { value: "8h→10d", label: "sessions" },
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "Sales CRM Automation",
    category: "Automation · 2024—2026",
    summary:
      "Automation that keeps a sales team's CRM current: scheduled reporting jobs plus webhooks that record hand-off and close dates automatically.",
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
  { group: "Integrations", items: ["Sage Intacct", "POS systems", "Stripe", "Plaid", "Carrier & shipping APIs", "Notion", "Slack"] },
  { group: "AI", items: ["MCP servers", "LLM agents", "RAG", "Rasa"] },
];

export const incidents = [
  {
    severity: "HIGH",
    symptom: "Delivery updates silently stopped arriving after a server migration",
    cause: "A firewall rule dropping incoming webhook calls",
    fix: "Rule fixed; missed events replayed from a durable intake log",
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
];
