import "./styles/tokens.css";
import "./framer/_responsive-runtime.css";
import "./styles/global.css";
import "./framer/overrides.css";

import type { ComponentType } from "react";
import ResponsiveWrapper from "./framer/ResponsiveWrapper";
import LayoutIsland from "./framer/LayoutIsland";

// --- Sections (Framer code-export default components) ---
import Navbar from "./framer/navbar/Navigation.js";
import Hero from "./framer/hero/Hero.js";
import Testimonials from "./framer/testimonials/Intro.js";
import About from "./framer/about/About.js";
import Projects from "./framer/projects/Projects.js";
import Niches from "./framer/niches/Niches.js";
import Services from "./framer/services/Services.js";
import Process from "./framer/process/Process.js";
import Faq from "./framer/faq/Faq.js";
import Pricing from "./framer/pricing/Pricing.js";
import Cta from "./framer/cta/Cta.js";
import Footer from "./framer/footer/Navigation.js";

// --- Page-level runtime helpers ---
import SmoothScroll from "./framer/smoothscroll/SmoothscrollProd.js";

// --- Per-section animation drivers (WAAPI reimplementation of Framer FX) ---
import HeroEffects from "./framer/hero/FramerEffects";
import AboutEffects from "./framer/about/FramerEffects";
import ProjectsEffects from "./framer/projects/FramerEffects";
import PricingEffects from "./framer/pricing/FramerEffects";

type AnyComp = ComponentType<{ variant?: string; [k: string]: unknown }>;

// Viewport → Framer variant maps (ResponsiveWrapper breakpoints: base/sm/md/lg/xl/2xl)
const STD = { base: "Phone", md: "Tablet", lg: "Desktop | M", xl: "Desktop | L" };
const NAV = { base: "Mobile_Closed", lg: "Home" };
const FOOT = { base: "Mobile", md: "Tablet", lg: "Desktop" };

function Section({ Component, variants }: { Component: AnyComp; variants: Record<string, string> }) {
  return (
    <LayoutIsland>
      <ResponsiveWrapper Component={Component} variants={variants} />
    </LayoutIsland>
  );
}

export default function App() {
  return (
    <>
      {/* Lenis smooth scroll + anchor handling (renders nothing) */}
      <SmoothScroll intensity={10} />

      <Section Component={Navbar as AnyComp} variants={NAV} />
      <Section Component={Hero as AnyComp} variants={STD} />
      <Section Component={Testimonials as AnyComp} variants={STD} />
      <Section Component={About as AnyComp} variants={STD} />
      <Section Component={Projects as AnyComp} variants={STD} />
      <Section Component={Niches as AnyComp} variants={STD} />
      <Section Component={Services as AnyComp} variants={STD} />
      <Section Component={Process as AnyComp} variants={STD} />
      <Section Component={Faq as AnyComp} variants={STD} />
      <Section Component={Pricing as AnyComp} variants={STD} />
      <Section Component={Cta as AnyComp} variants={STD} />
      <Section Component={Footer as AnyComp} variants={FOOT} />

      {/* Animation drivers — mounted once, target their section selectors */}
      <HeroEffects />
      <AboutEffects />
      <ProjectsEffects />
      <PricingEffects />
    </>
  );
}
