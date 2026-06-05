export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  description: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  email: string;
  location: string;
  summary: string;
  experiences: Experience[];
  certifications: Certification[];
}