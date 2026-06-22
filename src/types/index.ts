export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface Project {
  category: string;
  year: string;
  title: string;
  image: string;
  /** background tint behind the device mockup */
  tint: string;
}

export interface NichePill {
  label: string;
  active?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  body: string;
}

export interface ProcessStep {
  title: string;
  body: string;
  media: string;
  kind: "call" | "tasks" | "delivered";
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface MiniTestimonial {
  name: string;
  org: string;
  quote: string;
  avatar?: string;
}

export interface Plan {
  name: string;
  icon: string;
  tagline: string;
  monthly: number;
  annual: number;
  cta: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  reviews: MiniTestimonial[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "x" | "instagram" | "linkedin" | "dribbble";
}
