
export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

export interface Certificate {
  title: string;
  issuer: string;
}

export interface Award {
  title: string;
  description: string;
}

export interface Course {
  title: string;
  subtitle: string;
  issuer: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  company: string;
  period: string;
  description: string[];
  licenses?: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
  note?: string;
}

export interface PersonalSkill {
  title: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SectionLabels {
  coverLetter: string;
  summary: string;
  careerObjective: string;
  education: string;
  certificates: string;
  awards: string;
  courses: string;
  experience: string;
  specializedSkills: string;
  personalSkills: string;
  languages: string;
}

export interface CVData {
  name: string;
  jobTitle: string;
  secondaryTitles: string[];
  contact: ContactInfo;
  certificates: Certificate[];
  awards: Award[];
  courses: Course[];
  coverLetter: string;
  summary: string;
  careerObjective: string;
  experience: Experience[];
  specializedSkills: SkillCategory[];
  personalSkills: PersonalSkill[];
  languages: Language[];
  education: string;
  labels: SectionLabels;
}