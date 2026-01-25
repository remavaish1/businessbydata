import { ServicePillar, CaseStudy, ProcessStep } from "./types";

export const PRIMARY_CTA_TEXT = "Book a Discovery Call";

/**
 * Because you are using HashRouter,
 * all routes should be normal paths (no # here).
 */
export const DISCOVERY_CALL_LINK = "/contact";

/**
 * Centralized contact details
 */
export const CONTACT_EMAIL = "connect@businessbydata.co";
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/rema-vaish/";

/* =========================
   SERVICES
========================= */
export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "measure-what-matters",
    title: "Measure What Matters",
    whoItIsFor:
      "CEOs, COOs, and Heads of Ops/Commercial/Finance who want clarity on what to measure, why it matters, and what to do when performance shifts.",
    whatWeDeliver: [
      "Decision-to-metric mapping (decisions, actions, owners)",
      "Custom KPI catalogue with definitions, thresholds, and ownership",
      "Metric calculation logic (clear, auditable rules)",
      "Entity and hierarchy definitions (products, customers, channels, locations)",
      "Data quality rules tied to business meaning",
      "Handoff to dashboards and performance cadence",
    ],
    outcomes: [
      "Single source of metric truth across the organization",
      "Clarity on performance drivers—what actually moves the needle",
      "Faster, less contentious decision cycles",
      "KPIs that lead to action, not noise",
      'Fewer "number wars" and cleaner accountability',
    ],
  },
  {
    id: "trusted-numbers-blueprint",
    title: "Trusted Numbers Blueprint",
    whoItIsFor:
      "Leaders seeing mismatched numbers across CRM, ERP, POS, and Finance—who need a trusted source of truth and end-to-end traceability.",
    whatWeDeliver: [
      "Current-state data flow mapping (CRM → ERP → digital → reporting)",
      "Source-of-truth assessment for priority metrics",
      "Field mapping and data specs per KPI",
      "Gap analysis (missing fields, breakpoints, delays, duplicates)",
      "Minimum viable data requirements for decision-grade reporting",
      "Practical fix recommendations and engineering-ready backlog",
    ],
    outcomes: [
      "Reduced reporting discrepancies and manual reconciliations",
      "End-to-end traceability—every number has a clear source",
      "Faster time-to-insight from sources to dashboards",
      "Single version of truth across teams and systems",
      "Clear, actionable roadmap to fix data gaps",
    ],
  },
  {
    id: "analytics-modelling",
    title: "Practical Analytics, Advanced Excel Models & Power BI Dashboards",
    whoItIsFor:
      "Teams that need usable models, dashboards, and automated reporting — especially where maturity is evolving or analysis is stuck in manual spreadsheets.",
    whatWeDeliver: [
      "Advanced Excel models (forecasting, pricing, inventory, OTB, P&L logic)",
      "Power BI dashboards designed for decision-making",
      "Automated reporting packs (weekly/monthly performance)",
      "Exception reporting and alert logic",
      "Rapid analytics solutions for low-maturity environments",
    ],
    outcomes: [
      "Faster insights with less manual effort",
      "Decision-ready dashboards and performance packs",
      "Better planning accuracy and control",
      "Improved productivity through automation",
    ],
  },
  {
    id: "analytics-roi-roadmap",
    title: "Analytics ROI Roadmap",
    whoItIsFor:
      "Leadership teams and PMO who want to prioritise analytics initiatives/investments based on business value and define what to build next — without vendor bias or tool hype.",
    whatWeDeliver: [
      "Business-aligned analytics roadmap (commercial + operational goals ranked by value)",
      "Use-case prioritization matrix (value, feasibility, time-to-impact)",
      "Reporting and measurement operating model recommendations",
      "Tool-fit assessment (BI, ERP, CRM) from a business lens",
      "90-day and 6-month execution plan (business-owned)",
    ],
    outcomes: [
      "Sequenced analytics plan that funds what actually matters",
      "Reduced spend on low-value reporting and tool sprawl",
      "Stronger alignment between business priorities and tech investments",
      "Faster time-to-value for analytics investments",
      "Clear visibility into value and timing of each initiative",
    ],
  },
  {
    id: "dashboards-models",
    title: "Decision Dashboards & Models",
    whoItIsFor:
      "Functional teams (Sales, Ops, Supply Chain, Finance) who need usable, action-ready dashboards and advanced models—especially where analysis is stuck in spreadsheets.",
    whatWeDeliver: [
      "Power BI dashboards designed for decisions (not just visuals)",
      "Advanced Excel models (forecasting, pricing, inventory, P&L, OTB)",
      "Automated weekly/monthly performance packs with exception alerts",
      "Input controls, scenarios, and what-if logic",
      "Documentation, lineage, and handover training",
    ],
    outcomes: [
      "Faster insights with less manual effort and spreadsheet rework",
      "Decision-ready dashboards that tell you what to do next",
      "Better planning accuracy and scenario modeling",
      'Reduced dependency on a few "Excel heroes"',
      "Higher adoption through intuitive design and training",
    ],
  },
  {
    id: "performance-rhythm",
    title: "Decision Operating Rhythm & Performance Cadence",
    whoItIsFor:
      "Leadership teams who have reports but lack a consistent rhythm to review performance, assign actions, and follow through (weekly/monthly/S&OP/QBR).",
    whatWeDeliver: [
      "Cadence design (weekly, monthly, S&OP, QBR) with clear charters",
      "Decision pack structure (what gets reviewed, when, by whom)",
      "Escalation and exception rules for KPI movements",
      "Accountability loops with action tracking and playbooks",
      "Facilitation support and change management for adoption",
    ],
    outcomes: [
      "Decisions translate into execution—not just discussion",
      "Clear ownership and follow-through on action items",
      "Early visibility into issues (reduces firefighting)",
      "Meetings that matter—focused, efficient, decisive",
      "Stronger performance culture and accountability",
    ],
  },
  {
    id: "team-enablement",
    title: "Team Enablement: Excel, BI & AI",
    whoItIsFor:
      "Managers and decision-makers who need practical skills in analysis, Excel modeling, BI storytelling, and AI literacy.",
    whatWeDeliver: [
      "Excel training (business modeling, scenario analysis, input controls)",
      "Data literacy programs (interpret, challenge, and communicate numbers)",
      "Power BI and analytics product thinking bootcamps",
      "AI literacy (use cases, value, risks, adoption playbooks)",
      "Office hours, SOPs, and quick-reference guides for ongoing support",
    ],
    outcomes: [
      "Better, faster decisions from business teams",
      "Higher adoption and usage of dashboards and reports",
      'Reduced dependency on a few "Excel heroes"',
      "Managers confident asking better questions of the data",
      "Sustainable, credible reporting culture",
    ],
  },
];

/* =========================
   PROCESS
========================= */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We audit your current data landscape, identifying gaps between business goals and available data.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We establish the measurement logic, KPI definitions, and governance models required for clarity.",
  },
  {
    number: "03",
    title: "Enable Execution",
    description:
      "We provide implementation-ready documentation for your technical teams or partners to build against.",
  },
  {
    number: "04",
    title: "Embed",
    description:
      "We help you integrate data-driven decision reviews into your operational cadence.",
  },
];

/* =========================
   CASE STUDIES
========================= */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "retail-measurement",
    title: "Data-Driven Allocation, Inventory & Master Data Modernisation",
    industry: "Retail",
    context:
      'A multi-brand sportswear wholesale and retail operator managing "X" wholesale accounts and "Y" retail outlets with fragmented planning and low-trust product data.',
    problem:
      "Allocation and buying decisions were manual and inconsistent, while poor master data reduced trust in reporting and blocked ERP readiness—creating stock imbalances and tying up working capital.",
    approach:
      "Built a disciplined allocation + Open-to-Buy (OTB) model, standardized product master data for ERP readiness, and implemented decision dashboards to track performance across accounts and outlets.",
    deliverables: [
      "Allocation & OTB Model",
      "Master Data Standards & Governance",
      "Free-to-Sell (FTS) Framework",
      "Multi-Season Article Master (8 seasons)",
      "Power BI Decision Dashboards",
    ],
    outcomes: [
      "Improved stock availability across accounts and outlets",
      "Reduced excess and ageing inventory through FTS",
      "ERP readiness enabled through clean master data",
      "Repeatable planning logic replaced ad-hoc decisions",
      "Leadership visibility into buying and allocation performance",
    ],
    tags: ["Retail", "Strategy"],
  },
  {
    id: "fmcg-decision-framework",
    title: "Standardising Demand, Margin & Pricing Decisions Across Markets",
    industry: "FMCG",
    context:
      "A regional FMCG business struggling with forecast volatility, margin leakage, and inconsistent pricing decisions across markets.",
    problem:
      "Different markets and sales teams used different assumptions for demand, margins, and pricing. Forecasts changed monthly without clear drivers, low-margin SKUs went unnoticed, and leadership time was spent reconciling numbers instead of making decisions.",
    approach:
      "Established a single commercial logic for forecasting, margin, and pricing decisions. Standardized demand reviews, introduced structured profitability analysis, and shifted leadership discussions from reporting to decision-focused reviews.",
    deliverables: [
      "Unified Demand Forecasting Model (Actuals, Open Orders, YTG)",
      "Margin & Profitability Diagnostic (Product, Category, Market)",
      "Pricing Impact & Scenario Analysis Framework",
      "Executive-ready Performance Review Structure",
      "Forecast Accuracy & Performance Tracking KPIs",
    ],
    outcomes: [
      "Improved forecast stability and confidence",
      "Early visibility of margin erosion and low-profit SKUs",
      "Stronger pricing discipline across markets",
      "Faster, clearer leadership decisions",
      "One version of commercial truth across Sales, Finance, and Supply Chain",
    ],
    tags: ["FMCG", "Decision Support"],
  },
];
