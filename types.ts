
export interface ServicePillar {
  id: string;
  title: string;
  whoItIsFor: string;
  whatWeDeliver: string[];
  outcomes: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  context: string;
  problem: string;
  approach: string;
  deliverables: string[];
  outcomes: string[];
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
