import { assets } from "../assets";
import type {
  NavLink,
  Testimonial,
  Feature,
  Project,
  NichePill,
  Stat,
  ProcessStep,
  FaqItem,
  Plan,
  SocialLink,
} from "../types";

export const brand = {
  name: "Sol Studio",
  tagline: "Pretty good design agency.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

export const hero = {
  badge: "Now booking for Q3",
  titleLead: "Design so good, ",
  titleRest: "it should come with a warning label",
  subtitle:
    "From concept to launch, we create seamless digital experiences that resonate with your audience.",
  cta: "Say Hello",
  trusted: "Trusted by 20+ startups",
  avatars: [assets.avatarC, assets.avatarA, assets.avatarD, assets.avatarB],
  location: "Riga, Latvia",
  tagPhone: { label: "Lead designer", image: assets.mockPhoneNormal },
  tagLaptop: { label: "Craftwork.design", note: "Perhaps you?", image: assets.mockCraftwork },
};

export const testimonialsSection = {
  eyebrow: "They trust us",
  title: "Real feedback, real results.",
  subtitle:
    "Hear from the brands we've partnered with and discover the impact our designs have made.",
  cta: "Book a call",
  companies: ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"],
  companiesHeading: "These companies trust us",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I am beyond impressed with the results and would highly recommend Design Studio to anyone looking to elevate their brand and online presence.",
    name: "Justin H.",
    role: "Head of Product | Apex",
    avatar: assets.tJustin,
  },
  {
    quote:
      "Design studio makes me more productive and gets the job done in a fraction of the time. I'm glad I found Design studio.",
    name: "Alex",
    role: "CEO | Copy Hero",
    avatar: assets.tAlex,
  },
  {
    quote:
      "Design studio has helped my team and I stay on the same page. Previously, we were all over the board. Using Design studio has definitely saved us time and money.",
    name: "Maria A.",
    role: "Marketing Lead | Cars International",
    avatar: assets.tMaria,
  },
  {
    quote:
      "Design studio is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!",
    name: "Mario W.",
    role: "God Emperor | Earth",
    avatar: assets.tMario,
  },
];

export const about = {
  eyebrow: "Why choose us",
  title: "Design that delivers",
  subtitle:
    "Experience the magic that happens when creativity meets strategy—these are the perks of working with us.",
  ctaPrimary: "Book a call",
  ctaSecondary: "How does it work?",
  videoLabel: "Watch an intro",
  video: assets.introVideo,
  videoPoster: assets.heroClouds,
};

export const features: Feature[] = [
  {
    title: "Crafted just for You",
    body: "We don't do cookie-cutter. Every design is tailored to reflect the heartbeat of your brand.",
  },
  {
    title: "Fast turnaround",
    body: "We know how to work fast. You can expect to reveive updates from every two days.",
  },
  {
    title: "Results > pretty pictures",
    body: "We create designs that don't just look good but drive real, measurable results.",
  },
];

export const projectsSection = {
  eyebrow: "Portfolio",
  title: "A glimpse into our creative journey—projects that make us proud",
};

export const projects: Project[] = [
  { category: "Web design", year: "2024", title: "Mango Analytics", image: assets.projMango, tint: "#1c1c1c" },
  { category: "Branding", year: "2024", title: "Apex Tools", image: assets.projApex, tint: "#e9c46a" },
  { category: "Product Design", year: "2023", title: "Klara Analytics", image: assets.projKlara, tint: "#cdd3da" },
];

export const nichesSection = {
  eyebrow: "Niches",
  title: "Each specialty is distinct. We speak your industry's language.",
  subtitle:
    "No matter your field, our experience spans multiple niches, ensuring we understand your specific needs and challenges.",
};

export const nicheRows: NichePill[][] = [
  [
    { label: "Restaurants" },
    { label: "Homebuilders" },
    { label: "Medical tech" },
    { label: "SaaS" },
    { label: "Automotive", active: true },
  ],
  [
    { label: "Influencers" },
    { label: "Real estate", active: true },
    { label: "Web3 / Crypto" },
    { label: "Micro SaaS" },
    { label: "Hardwaare" },
  ],
  [
    { label: "Agencies" },
    { label: "Agriculture" },
    { label: "Courses", active: true },
    { label: "Developer tools" },
    { label: "Legal" },
  ],
];

export const servicesSection = {
  eyebrow: "Services",
  title: "Your vision, perfected by design",
  subtitle:
    "Experience end-to-end design services that help you stand out and achieve your business goals.",
  cta: "Book a call",
  panelTitle: "Your end-to-end creative partner.",
  panelBody:
    "From ideation to execution, we cover every aspect of your brand's journey. Our team delivers all the services you need to build and grow.",
  bullets: [
    "Branding & visual identity",
    "User experience analysis",
    "Digital product design",
    "Cross platform mobile apps",
    "Responsive development",
    "Component libraries",
    "Creative copywriting",
  ],
};

export const stats: Stat[] = [
  { value: "$15m+", label: "Our clients raised", body: "Empowering startups and enterprises to secure over 15 million dollars in funding." },
  { value: "97%", label: "Success Rate", body: "Consistently delivering exceptional results that exceed client expectations." },
  { value: "5 Years", label: "In business", body: "Half a decade of shaping digital experiences and driving business growth." },
];

export const processSection = {
  eyebrow: "Process",
  title: "How we bring your ideas to life",
  subtitle:
    "Discover how our step-by-step process guides you from the initial idea to the final, polished product.",
  cta: "Book a call",
};

export const processSteps: ProcessStep[] = [
  { title: "Book a free call", body: "Begin by filling out the brief form, giving the details we need to start crafting the project.", media: assets.procCall, kind: "call" },
  { title: "Add and prioritize tasks", body: "Begin by filling out the brief form, giving the details we need to start crafting the project.", media: assets.procTasks, kind: "tasks" },
  { title: "Get designs delivered 🎉", body: "Begin by filling out the brief form, giving the details we need to start crafting the project.", media: assets.procDelivered, kind: "delivered" },
];

export const faqSection = {
  eyebrow: "Questions",
  title: "Got questions? We've got answers",
  subtitle:
    "Explore our frequently asked questions to find the information you need about our services and process.",
};

export const faqItems: FaqItem[] = [
  { q: "Restrictions (Please read)", a: "This template is licensed for a single end product. Please don't redistribute or resell the source files. Reach out if you need an extended license for your team." },
  { q: "How can I get started?", a: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more." },
  { q: "What services do you offer?", a: "Branding, UX/UI, product design, responsive development, component libraries and creative copywriting — end to end." },
  { q: "How long does it take?", a: "Most landing pages ship within 1–2 weeks. Larger products are scoped on our intro call and delivered in prioritized milestones." },
  { q: "Do you offer support?", a: "Yes — every plan includes ongoing support, and Premium adds priority email & phone support plus bi-weekly progress meetings." },
  { q: "What tools do you use?", a: "Figma for design, Framer for sites, and a modern React/TypeScript stack for production builds." },
];

export const pricingSection = {
  eyebrow: "Pricing",
  title: "Tailored plans for every stage of your project",
  subtitle:
    "Whether you're just starting or scaling up, our flexible pricing models ensure you get the best value for your investment.",
  toggle: { monthly: "Monthly", annual: "Annual", save: "20% off" },
  priceSuffix: "/ per month",
};

export const plans: Plan[] = [
  {
    name: "Standard",
    icon: assets.iconBolt,
    tagline: "Essential design services",
    monthly: 2800,
    annual: 2240,
    cta: "Contact us",
    features: [
      "1 Dedicated senior designer",
      "Custom landing page design",
      "Monthly design review",
      "Email support",
      "Access to design resources library",
    ],
    reviews: [
      { name: "Andrei", org: "CEO", quote: "Coordination of activities improved tremendously with Copy hero", avatar: assets.tAlex },
    ],
  },
  {
    name: "Premium",
    icon: assets.iconFlame,
    tagline: "For projects that demand the best",
    monthly: 4000,
    annual: 3200,
    cta: "Contact us",
    highlight: true,
    badge: "Max value",
    features: [
      "2 dedicated senior designers",
      "Complete website design & development",
      "Bi-Weekly strategy & progress meetings",
      "Priority email & phone support",
      "Full access to design resources",
    ],
    reviews: [
      { name: "Laura", org: "Company", quote: "This is an amazing service and it has saved me and my small business so much time.", avatar: assets.pricingAvatar },
      { name: "Andrei", org: "CEO", quote: "Coordination of activities improved tremendously with Sol", avatar: assets.tJustin },
    ],
  },
];

export const cta = {
  lead: "Why wait? Take the leap.",
  rest: "Make your design process stress-free today.",
  button: "Say Hello",
};

export const footer = {
  brand: brand.name,
  tagline: brand.tagline,
  cta: "Book a call",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],
  contacts: [
    { label: "+371-20-90-00-00", href: "tel:+37120900000" },
    { label: "Hello@framer.com", href: "mailto:hello@framer.com" },
    { label: "Affiliate Program", href: "#affiliate" },
  ] as NavLink[],
  watermark: "SOL STUDIO",
  copyright: "© 2024 All rights reserved",
  peace: assets.peaceMark,
};

export const socials: SocialLink[] = [
  { label: "X", href: "#", icon: "x" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Dribbble", href: "#", icon: "dribbble" },
];
