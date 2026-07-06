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
export const CONTACT_EMAIL = "businessbydata.rema@gmail.com";
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/rema-vaish/";

/* =========================
   SERVICES
========================= */
export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "business-performance-diagnostic",
    title: "01 Business Performance Diagnostic™",
    whoItIsFor:
      "Leadership teams who want a clear, trusted view of business performance and improvement priorities.",
    whatWeDeliver: [
      "Business context review",
      "Current-state assessment",
      "Reporting, KPI and process review",
      "Data and AI opportunity scan",
      "Priority improvement roadmap",
          ],
    outcomes: [
      "Clear view of current business performance",
      "Priority gaps identified",
      "Practical improvement opportunities",
      "Stronger leadership alignment",
      "Clear roadmap for action",
    ],
  },
  {
    id: "executive-reporting",
    title: "02 Executive Reporting",
    whoItIsFor:
      "CEOs, COOs, CFOs and leadership teams who need better visibility and decision-ready reporting.",
    whatWeDeliver: [
 
"Review of current reports and dashboards",
"Executive reporting requirements",
"KPI and metric alignment",
"Dashboard structure and mockups",
"Reporting governance recommendations",

    ],
    outcomes: [
           "Faster, better executive decisions",
"Less reporting noise",
"Clearer performance visibility",
"Stronger trust in numbers",
"Better reporting cadence",
    ],
  },
  
  {
    id: "performance-management",
    title: "03 Performance Management",
    whoItIsFor:
      "Businesses that want KPIs, scorecards and review rhythms that drive accountability.",
    whatWeDeliver: [
      "KPI framework design",
"KPI definitions and ownership",
"Performance scorecards",
"Target-setting logic",
"Performance review cadence",

    ],
    outcomes: [
      "Stronger accountability",
"KPIs linked to business goals",
"Better performance conversations",
"Clear ownership of metrics",
"More disciplined reviews",

    ],
  },
  {
    id: "process-performance-improvement",
    title: "04 Process Performance Improvement",
    whoItIsFor:
      "Teams dealing with manual work, duplicated effort, delays and inconsistent processes.",
    whatWeDeliver: [
      "Current process review",
"Bottleneck and manual work assessment",
"Process improvement opportunities",
"Automation opportunity scan",
"Practical improvement roadmap",

    ],
    outcomes: [
      ""Reduced manual effort",
"Faster workflows",
"Improved efficiency",
"Better process visibility",
"Practical automation opportunities",

    ],
  },
  {
    id: "ai-readiness",
    title: "05 AI Readiness & Opportunity Assessment",
    whoItIsFor:
      "Leadership teams unsure where AI can create measurable business value.",
    whatWeDeliver: [
      ""AI readiness assessment",
"Business use-case identification",
"Data readiness review",
"AI opportunity prioritisation",
"Practical AI adoption roadmap",

    ],
    outcomes: [
      "Clear AI priorities",
"Practical use cases",
"Reduced AI confusion",
"Better investment decisions",
"Safer, business-led AI adoption",

    ],
  },
  {
    id: "data-ai-capability",
    title: "06 Data & AI Capability Building",
    whoItIsFor:
      "Leaders, managers and teams who need practical Data & AI confidence.",
    whatWeDeliver: [
      "Data literacy workshops",
"AI literacy workshops",
"Business use-case training",
"Dashboard and reporting interpretation",
"Practical playbooks and templates",

    ],
    outcomes: [
     "Data-confident teams",
"Better use of reports and dashboards",
"Practical AI adoption",
"Stronger decision-making culture",
"Reduced dependency on a few “Excel heroes",

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
    title: "Data-Driven Allocation, Inventory and Master Data Modernisation",
    industry: "Retail",
    context:
      'A multi-brand sportswear wholesale and retail operator managing "X" wholesale accounts and "Y" retail outlets with fragmented planning and low-trust product data.',
    problem:
      "Allocation and buying decisions were manual and inconsistent, while poor master data reduced trust in reporting and blocked ERP readiness, creating stock imbalances and tying up working capital.",
    approach:
      "Built a disciplined allocation plus Open-to-Buy (OTB) model, standardized product master data for ERP readiness, and implemented decision dashboards to track performance across accounts and outlets.",
    deliverables: [
      "Allocation and OTB Model",
      "Master Data Standards and Governance",
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
    title: "Standardising Demand, Margin and Pricing Decisions Across Markets",
    industry: "FMCG",
    context:
      "A regional FMCG business struggling with forecast volatility, margin leakage, and inconsistent pricing decisions across markets.",
    problem:
      "Different markets and sales teams used different assumptions for demand, margins, and pricing. Forecasts changed monthly without clear drivers, low-margin SKUs went unnoticed, and leadership time was spent reconciling numbers instead of making decisions.",
    approach:
      "Established a single commercial logic for forecasting, margin, and pricing decisions. Standardized demand reviews, introduced structured profitability analysis, and shifted leadership discussions from reporting to decision-focused reviews.",
    deliverables: [
      "Unified Demand Forecasting Model (Actuals, Open Orders, YTG)",
      "Margin and Profitability Diagnostic (Product, Category, Market)",
      "Pricing Impact and Scenario Analysis Framework",
      "Executive-ready Performance Review Structure",
      "Forecast Accuracy and Performance Tracking KPIs",
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
