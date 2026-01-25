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
      "90-day and 6-month execution plan (business-owned)
