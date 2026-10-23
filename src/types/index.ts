export type ProjectStatus = 'In Progress' | 'Learning Project' | 'Completed';

export type ProjectCategory = 'All' | 'Featured' | 'Systems & Web' | 'Algorithms & CS' | 'Academic Labs';

export interface ProjectDetail {
  id: string;
  title: string;
  category: ProjectCategory;
  isFeatured?: boolean;
  status: ProjectStatus;
  summary: string;
  problemStatement: string;
  keyFeatures: string[];
  plannedFeatures?: string[];
  technologies: string[];
  technicalHighlights?: string[];
  codeSnippet?: {
    language: string;
    description: string;
    code: string;
  };
  githubUrl?: string;
  demoUrl?: string;
  repoNote?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description?: string;
    badge?: string;
    isCore?: boolean;
  }[];
}

export interface EducationItem {
  institution: string;
  shortName: string;
  degree: string;
  periodOrYear: string;
  location: string;
  statusNote: string;
  highlights: string[];
  coursework: string[];
}

export interface PersonalProfile {
  name: string;
  title: string;
  typedTitles: string[];
  college: string;
  educationNote: string;
  location: string;
  email: string;
  linkedInUrl: string;
  resumeUrl: string;
  bioSummary: string;
  aboutDetails: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  corePillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}
