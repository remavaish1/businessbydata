
import React from 'react';
import { ServicePillar, CaseStudy, ProcessStep } from './types';

export const PRIMARY_CTA_TEXT = "Book a Discovery Call";
export const DISCOVERY_CALL_LINK = "#/contact";

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "decision-support",
    title: "Decision Support & KPI Design",
    whoItIsFor: "CEOs and COOs who feel overwhelmed by noise and need clear indicators of business performance.",
    whatWeDeliver: ["Custom KPI Catalogue", "Metric Calculation Logic", "Decision Review Frameworks"],
    outcomes: ["Alignment on what success looks like", "Clarity on performance drivers", "Faster decision-making cycles"]
  },
  {
    id: "measurement-foundations",
    title: "Business Data Definition & Measurement Foundations",
    whoItIsFor: "Finance and Ops leaders needing consistency in how business entities are defined across the organization.",
    whatWeDeliver: ["Data Dictionary", "Entity Definitions", "Field Mapping Requirements"],
    outcomes: ["Single source of truth for metrics", "Elimination of reporting discrepancies", "Ready-to-implement technical specs"]
  },
  {
    id: "diagnostics",
    title: "Data Diagnostics & Assessments",
    whoItIsFor: "Organizations with existing reporting that doesn't feel 'right' or lacks trust from leadership.",
    whatWeDeliver: ["Data Quality Audit", "Dashboard Utility Review", "Maturity Roadmap"],
    outcomes: ["Identification of data gaps", "Restored trust in reporting", "Clear path to improvement"]
  },
  {
    id: "analytics-strategy",
    title: "Analytics Strategy & Roadmapping",
    whoItIsFor: "SME Founders and Leadership teams planning for growth and needing a data plan that scales.",
    whatWeDeliver: ["3-Phase Data Strategy", "Tooling Recommendations (Business Focus)", "Priority Matrix"],
    outcomes: ["Strategic clarity", "Avoidance of expensive technical debt", "Sequential ROI-focused execution"]
  },
  {
    id: "governance",
    title: "Governance, Standards & Data Discipline",
    whoItIsFor: "Heads of Operations and Finance who want to ensure data quality is maintained by teams.",
    whatWeDeliver: ["Governance Policy Manual", "Data Stewardship Roles", "Input Standard Procedures"],
    outcomes: ["Sustainable data quality", "Clear accountability", "Reduced manual data cleanup"]
  },
  {
    id: "fractional-leadership",
    title: "Fractional Advisory & Leadership Support",
    whoItIsFor: "High-growth companies needing senior data direction without the cost of a full-time Head of Data.",
    whatWeDeliver: ["Ongoing Strategic Guidance", "Implementation Oversight", "Technical Team Liaison"],
    outcomes: ["Executive-level data advocacy", "Correct technical execution by partners", "Consistent data strategy adherence"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnose",
    description: "We audit your current data landscape, identifying gaps between business goals and available data."
  },
  {
    number: "02",
    title: "Define",
    description: "We establish the measurement logic, KPI definitions, and governance models required for clarity."
  },
  {
    number: "03",
    title: "Enable Execution",
    description: "We provide implementation-ready documentation for your technical teams or partners to build against."
  },
  {
    number: "04",
    title: "Embed",
    description: "We help you integrate data-driven decision reviews into your operational cadence."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "retail-measurement",
    title: "Standardizing Retail Performance Measurement",
    industry: "Retail",
    context: "A multi-store retailer struggling with inconsistent sales reporting across regions.",
    problem: "Different managers used different definitions for 'Net Revenue' and 'Customer Acquisition', leading to boardroom disputes.",
    approach: "Defined a unified metric catalogue and business data fields. Audited existing POS data quality.",
    deliverables: ["KPI Catalogue", "Standard Operating Procedures for Data Entry"],
    outcomes: ["100% agreement on regional performance", "15% reduction in weekly reporting effort"],
    tags: ["Retail", "Strategy"]
  },
  {
    id: "banking-governance",
    title: "Data Governance for Strategic Reporting",
    industry: "Banking",
    context: "A mid-sized commercial bank undergoing digital transformation.",
    problem: "Technical teams were building dashboards that leadership found irrelevant to strategic goals.",
    approach: "Acted as a bridge to translate executive requirements into clear technical requirements.",
    deliverables: ["Governance Model", "Reporting Requirements Pack"],
    outcomes: ["Dashboards aligned with 5-year growth goals", "Technical team building with 100% clarity"],
    tags: ["Banking", "Governance"]
  },
  {
    id: "fmcg-kpi",
    title: "FMCG Supply Chain Decision Framework",
    industry: "FMCG",
    context: "A fast-moving consumer goods company with complex logistics data.",
    problem: "Data was stuck in silos; leadership couldn't see the impact of supply delays on sales margin.",
    approach: "Designed a cross-functional KPI framework connecting logistics and finance data.",
    deliverables: ["Measurement Foundation Doc", "Decision Review Cadence"],
    outcomes: ["Faster reaction to supply disruptions", "Margin clarity at the SKU level"],
    tags: ["FMCG", "Decision Support"]
  }
];
