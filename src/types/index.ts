export interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => string | JSX.Element;
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
  projects: Project[];
  contact: ContactInfo;
  experience: Experience[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
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
