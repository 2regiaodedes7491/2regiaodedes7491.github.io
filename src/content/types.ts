export type ExternalLink = {
  label: string;
  href: string;
  type: "github" | "linkedin" | "team" | "blue-alliance" | "chief-delphi" | "website" | "email" | "instagram" | "facebook" | "x" | "youtube";
};

export type Metric = {
  value: string;
  label: string;
  context?: string;
};

export type Experience = {
  id: string;
  organization: string;
  role: string;
  start: string;
  end?: string;
  location?: string;
  type: "robotics" | "electrical" | "teaching" | "sanskrit" | "leadership" | "environmental";
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: Metric[];
  links?: ExternalLink[];
  image?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  year: string;
  categories: string[];
  summary: string;
  description: string;
  technologies: string[];
  problem?: string;
  solution?: string;
  impact?: string;
  links?: ExternalLink[];
  media?: {
    type: "image" | "video";
    src: string;
    alt: string;
  }[];
};

export type Achievement = {
  id: string;
  title: string;
  year: string;
  category: "robotics" | "academic" | "arts" | "environmental" | "leadership" | "teaching";
  description: string;
  metric?: string;
  links?: ExternalLink[];
};

export type TimelineEntry = {
  id: string;
  year: string;
  title: string;
  description: string;
  category: "robotics" | "electrical" | "teaching" | "sanskrit" | "arts" | "environmental" | "leadership" | "academic";
  links?: ExternalLink[];
};

export type Profile = {
  name: string;
  headline: string;
  thesis: string;
  location: string;
  currentRole: string;
  email: string;
  links: ExternalLink[];
};

export type EngineeringSystem = {
  id: string;
  name: string;
  description: string;
  category: "power" | "communication" | "actuation" | "sensing" | "control";
  details: string;
  connections: string[];
};