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
export const SERVICE_PILLARS = [
  {
    id: "decision-kpi-design",
    title: "Decision-Centric Measurement & KPI Design (Flagship)",
    whoItIsFor:
      "CEOs, COOs, and Heads of Ops/Commercial/Finance who want clarity on what to measure, why it matters, and what to do when performance shifts.",
    whatWeDeliver: [
      "Decision-to-metric mapping (decisions, actions, owners)",
      "Custom KPI catalogue with definitions, thresholds, and ownership",
      "Metric calculation logic (clear, auditable rules)",
      "Performance frameworks (S&OP, margin, growth, cost, service)",
      "Scenario and what-if models for planning and trade-offs",
    ],
    outcomes: [
      "Alignment on what success looks like",
      "Clarity on performance drivers",
      "Faster decision cycles with less debate",
      "KPIs that lead to action, not noise",
    ],
  },
  {
    id: "data-flows-readiness",
    title: "Decision-Aligned Data Flows & Analytics Readiness",
    whoItIsFor:
      "Leaders and teams seeing mismatched numbers across CRM, ERP, POS, finance, and digital tools, and need to establish what’s reliable and why.",
    whatWeDeliver: [
      "Current-state data flow mapping (CRM → ERP → digital → reporting)",
      "Source-of-truth assessment for priority metrics",
      "Gap analysis (missing fields, breakpoints, delays, duplicates)",
      "Minimum viable data requirements for decision-grade reporting",
      "Recommendations for fixes (without owning engineering delivery)",
    ],
    outcomes: [
      "Reduced reporting discrepancies",
      "Clear traceability of numbers end-to-end",
      "Fewer manual reconciliations",
      "A practical plan to make data decision-ready",
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
    id: "analytics-strategy",
    title: "Analytics Strategy & Business Roadmapping",
    whoItIsFor:
      "Leadership teams who want to prioritise analytics initiatives based on business value and define what to build next — without vendor bias.",
    whatWeDeliver: [
      "Analytics roadmap aligned to business goals",
      "Use case prioritisation by value and feasibility",
      "Reporting and measurement operating model recommendations",
      "Tool-fit assessment (BI, ERP, CRM) from a business lens",
      "90-day and 6-month execution plan (business-owned)",
    ],
    outcomes: [
      "A clear, sequenced analytics roadmap",
      "Reduced wasted effort on low-value reporting",
      "Improved alignment between business and tech teams",
      "Faster time-to-value for analytics investments",
    ],
  },
  {
    id: "definitions-foundations",
    title: "Data Readiness, Definitions & Measurement Foundations",
    whoItIsFor:
      "Finance, ops, and analytics teams that need consistent definitions for entities, hierarchies, and metrics — without heavy governance bureaucracy.",
    whatWeDeliver: [
      "KPI glossary and metric definitions",
      "Entity and hierarchy definitions (products, customers, channels, locations)",
      "Key field mapping requirements for reporting",
      "Data quality rules tied to business meaning",
      "Documentation that supports consistent reporting at scale",
    ],
    outcomes: [
      "Single version of metric definitions",
      "Less ambiguity and fewer “number wars”",
      "Cleaner requirements for implementation teams",
      "Faster onboarding for analysts and managers",
    ],
  },
  {
    id: "decision-rhythm",
    title: "Decision Operating Rhythm & Performance Cadence",
    whoItIsFor:
      "Leadership teams who have reports but lack a consistent rhythm to review performance, assign actions, and follow through (weekly/monthly/S&OP/QBR).",
    whatWeDeliver: [
      "Performance review cadence design (weekly, monthly, S&OP, QBR)",
      "Decision forums and pack structure (what gets reviewed, when, by whom)",
      "Escalation and exception logic for KPI movements",
      "Accountability loops (owners, actions, timelines)",
      "Operational playbooks for performance management",
    ],
    outcomes: [
      "Decisions translate into execution",
      "Clear ownership and follow-through",
      "Reduced firefighting through early visibility",
      "Stronger performance culture and discipline",
    ],
  },
  {
    id: "training-enablement",
    title: "Capability Building: Analytics, Excel, AI & Business Enablement",
    whoItIsFor:
      "Business teams who need practical skills in analysis, product thinking, reporting, and AI literacy — designed for managers and decision-makers.",
    whatWeDeliver: [
      "Excel training (business modelling, scenario analysis, controls)",
      "Business analysis training (problem framing, requirements, decision logic)",
      "Product thinking for business teams (prioritisation, outcomes vs outputs)",
      "Data literacy programs (how to interpret and challenge numbers)",
      "AI literacy programs (use cases, value, risks, adoption)",
    ],
    outcomes: [
      "Better decisions from business teams",
      "Stronger analytics adoption and usage",
      "Reduced dependence on a few ‘Excel heroes’",
      "More credible, consistent reporting culture",
    ],
  },
] as const;

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
      "A multi-brand sportswear wholesale and retail operator managing "X" wholesale accounts and "Y" retail outlets with fragmented planning and low-trust product data.",
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


