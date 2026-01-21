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
    id: "decision-support",
    title: "Decision Support & KPI Design",
    whoItIsFor:
      "CEOs and COOs who feel overwhelmed by noise and need clear indicators of business performance.",
    whatWeDeliver: [
      "Custom KPI Catalogue",
      "Metric Calculation Logic",
      "Decision Review Frameworks",
    ],
    outcomes: [
      "Alignment on what success looks like",
      "Clarity on performance drivers",
      "Faster decision-making cycles",
    ],
  },
  {
    id: "measurement-foundations",
    title: "Business Data Definition & Measurement Foundations",
    whoItIsFor:
      "Finance and Ops leaders needing consistency in how business entities are defined across the organization.",
    whatWeDeliver: [
      "Data Dictionary",
      "Entity Definitions",
      "Field Mapping Requirements",
    ],
    outcomes: [
      "Single source of truth for metrics",
      "Elimination of reporting discrepancies",
      "Ready-to-implement technical specs",
    ],
  },
  {
    id: "diagnostics",
    title: "Data Diagnostics & Assessments",
    whoItIsFor:
      "Organizations with existing reporting that doesn't feel right or lacks trust from leadership.",
    whatWeDeliver: [
      "Data Quality Audit",
      "Dashboard Utility Review",
      "Maturity Roadmap",
    ],
    outcomes: [
      "Identification of data gaps",
      "Restored trust in reporting",
      "Clear path to improvement",
    ],
  },
  {
    id: "analytics-strategy",
    title: "Analytics Strategy & Roadmapping",
    whoItIsFor:
      "SME founders and leadership teams planning for growth and needing a data plan that scales.",
    whatWeDeliver: [
      "3-Phase Data Strategy",
      "Tooling Recommendations (Business Focus)",
      "Priority Matrix",
    ],
    outcomes: [
      "Strategic clarity",
      "Avoidance of expensive technical debt",
      "Sequential ROI-focused execution",
    ],
  },
  {
    id: "governance",
    title: "Governance, Standards & Data Discipline",
    whoItIsFor:
      "Heads of operations and finance who want to ensure data quality is maintained by teams.",
    whatWeDeliver: [
      "Governance Policy Manual",
      "Data Stewardship Roles",
      "Input Standard Procedures",
    ],
    outcomes: [
      "Sustainable data quality",
      "Clear accountability",
      "Reduced manual data cleanup",
    ],
  },
  {
    id: "fractional-leadership",
    title: "Fractional Advisory & Leadership Support",
    whoItIsFor:
      "High-growth companies needing senior data direction without the cost of a full-time Head of Data.",
    whatWeDeliver: [
      "Ongoing Strategic Guidance",
      "Implementation Oversight",
      "Technical Team Liaison",
    ],
    outcomes: [
      "Executive-level data advocacy",
      "Correct technical execution by partners",
      "Consistent data strategy adherence",
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
      "A multi-brand sportswear wholesale and retail operator managing 87 wholesale accounts and ~200 retail outlets with fragmented planning and low-trust product data.",
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


