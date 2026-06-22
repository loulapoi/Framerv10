import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { brand, navLinks } from "../data/content";
import { ArrowUpRight, Sparkle } from "../components/ui/Icons";
import "./Navbar.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="nav__bar">
        <a className="nav__brand" href="#home">
          <span className="nav__mark"><Sparkle size={15} /></span>
          {brand.name}
        </a>
        <ul className="nav__links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a className="nav__cta" href="#contact">
          <ArrowUpRight size={15} />
          Say hi
        </a>
      </nav>
    </motion.header>
  );
}
