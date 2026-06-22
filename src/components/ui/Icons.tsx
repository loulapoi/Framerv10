import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export const ArrowUpRight = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Calendar = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="3" y="4.5" width="18" height="16" rx="3" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></svg>
);
export const Play = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p} fill="currentColor" stroke="none"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
);
export const Wave = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M7 11V6.5a1.5 1.5 0 0 1 3 0V10m0 0V5a1.5 1.5 0 0 1 3 0v5m0-.5V6.5a1.5 1.5 0 0 1 3 0V13a6 6 0 0 1-6 6h-1a6 6 0 0 1-5.2-3l-2-3.4a1.5 1.5 0 0 1 2.4-1.8L7 12" /></svg>
);
export const Check = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="m5 12.5 4.5 4.5L19 7" /></svg>
);
export const Sparkle = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p} fill="currentColor" stroke="none"><path d="M12 2c.6 4.8 2.2 6.4 7 7-4.8.6-6.4 2.2-7 7-.6-4.8-2.2-6.4-7-7 4.8-.6 6.4-2.2 7-7Z" /></svg>
);

/* Feature / pricing icons */
export const PenNib = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M12 3 5 10l-2 8 8-2 7-7-6-6Z" /><circle cx="11" cy="11" r="2" /><path d="m3 21 4.5-4.5" /></svg>);
export const Layout = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M9 9v11" /></svg>);
export const CalCheck = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="3" y="4.5" width="18" height="16" rx="3" /><path d="M3 9h18M8 2.5v4M16 2.5v4M9 14.5l2 2 4-4" /></svg>);
export const Mail = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>);
export const Folder = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h6a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /></svg>);
export const Users = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M21 19a5.5 5.5 0 0 0-4-5.3" /></svg>);
export const Browser = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 8.5h18M6.5 6.3h.01M9 6.3h.01" /></svg>);
export const Headset = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm16 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Zm-2 6a4 4 0 0 1-4 3h-2" /></svg>);

/* Niche icons */
export const Fork = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M6 3v7a2 2 0 0 0 4 0V3M8 12v9M16 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4m0 0v9" /></svg>);
export const House = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M4 11 12 4l8 7M6 10v9h12v-9" /></svg>);
export const Heart = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M3 11h3l2-4 3 8 2-5 1.5 3H21" /></svg>);
export const Cloud = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M7 18a4 4 0 0 1-.5-7.96A5 5 0 0 1 16 9a3.5 3.5 0 0 1 1 6.9" /><path d="M7 18h10" /></svg>);
export const Car = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M3 13l2-5a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 5v5h-3M3 13v5h3M3 13h18M7 18a1.5 1.5 0 1 0 0-.01M17 18a1.5 1.5 0 1 0 0-.01" /></svg>);
export const Megaphone = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M4 10v4l11 5V5L4 10ZM4 10H3v4h1M9 16v3" /></svg>);
export const Building = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></svg>);
export const Coins = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><ellipse cx="12" cy="7" rx="7" ry="3" /><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" /></svg>);
export const Cube = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M12 3 4 7v10l8 4 8-4V7l-8-4ZM4 7l8 4 8-4M12 11v10" /></svg>);
export const Chip = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" /></svg>);
export const Briefcase = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>);
export const Plant = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M12 21v-7M12 14c0-3-2-5-6-5 0 3 2 5 6 5ZM12 12c0-3 2-6 6-6 0 3-2 6-6 6Z" /></svg>);
export const Cap = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="m2 9 10-4 10 4-10 4L2 9Z" /><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M22 9v5" /></svg>);
export const Code = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" /></svg>);
export const Scale = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><path d="M12 4v16M7 20h10M5 7h14M9 4l-4 8a3 3 0 0 0 6 0L7 7m10 0-4 8a3 3 0 0 0 6 0l-4-8" /></svg>);

/* Socials */
export const XLogo = ({ size, ...p }: P) => (<svg {...base(size)} {...p} strokeWidth={0} fill="currentColor"><path d="M17.5 3h2.6l-5.7 6.5L21 21h-5.3l-4.1-5.4L6.8 21H4.2l6.1-7L3.5 3h5.4l3.7 4.9L17.5 3Zm-.9 16h1.4L8.5 4.4H7L16.6 19Z" /></svg>);
export const InstagramLogo = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></svg>);
export const LinkedinLogo = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10v6M8 7v.01M12 16v-3.5a1.5 1.5 0 0 1 3 0V16M12 12.5V10" /></svg>);
export const DribbbleLogo = ({ size, ...p }: P) => (<svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="M5 8c4 1 9 1.5 13.5-.5M3.5 13c5-1.5 9 .5 11 5M9 3.5c4 4.5 6 9.5 6.5 16.5" /></svg>);

export const nicheIcon: Record<string, (p: P) => JSX.Element> = {
  Restaurants: Fork, Homebuilders: House, "Medical tech": Heart, SaaS: Cloud, Automotive: Car,
  Influencers: Megaphone, "Real estate": Building, "Web3 / Crypto": Coins, "Micro SaaS": Cube, Hardwaare: Chip,
  Agencies: Briefcase, Agriculture: Plant, Courses: Cap, "Developer tools": Code, Legal: Scale,
};

export const featureIcon = [PenNib, Layout, CalCheck, Mail, Folder];
export const featureIconPremium = [Users, Browser, CalCheck, Headset, Folder];
