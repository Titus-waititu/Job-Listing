export interface JobData {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export type FilterType =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "Junior"
  | "Midweight"
  | "Senior"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "Python"
  | "React"
  | "Sass";
