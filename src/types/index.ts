export interface Command {
  name: string;
  description: string;
  execute: (args: string[], cmdHistory?: string[], setTheme?: (theme: 'green' | 'blue' | 'amber') => void) => string | JSX.Element;
}

export interface HistoryItem {
  command: string;
  output: string | JSX.Element;
  timestamp: Date;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  skillDetails: Skill[];
  projects: Project[];
  contact: ContactInfo;
  experience: Experience[];
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement';
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  details?: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  experience: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin?: string;
  twitter?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}
