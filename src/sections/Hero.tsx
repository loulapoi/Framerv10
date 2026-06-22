import { motion } from "framer-motion";
import { hero } from "../data/content";
import { assets } from "../assets";
import { Button } from "../components/ui/Button";
import { ArrowUpRight } from "../components/ui/Icons";
import { useLiveClock } from "../hooks/useLiveClock";
import "./Hero.css";

const ease = [0.16, 1, 0.3, 1] as const;

function Cursor({ label, color, className }: { label: string; color: string; className: string }) {
  return (
    <div className={`hero__cursor ${className}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <path d="M5 3l14 7-6 1.6L9.5 19 5 3z" stroke="#fff" strokeWidth="1.2" />
      </svg>
      <span className="hero__cursor-label" style={{ background: color }}>{label}</span>
    </div>
  );
}

export function Hero() {
  const time = useLiveClock();
  return (
    <section id="home" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${assets.heroClouds})` }} aria-hidden />
      <div className="hero__dots" aria-hidden />

      <div className="hero__stage">
        {/* Floating mockups */}
        <motion.div
          className="hero__mock hero__mock--left"
          initial={{ opacity: 0, y: 40, rotate: -8 }}
          animate={{ opacity: 1, y: [0, -14, 0], rotate: -8 }}
          transition={{ opacity: { duration: 0.8, delay: 0.5 }, y: { duration: 7.9, repeat: Infinity, ease: "easeInOut" } }}
        >
          <img src={assets.mockPhoneNormal} alt="" />
          <Cursor label="Lead designer" color="#5b5bef" className="hero__cursor--phone" />
        </motion.div>

        <motion.div
          className="hero__mock hero__mock--right"
          initial={{ opacity: 0, y: 40, rotate: 7 }}
          animate={{ opacity: 1, y: [0, -18, 0], rotate: 7 }}
          transition={{ opacity: { duration: 0.8, delay: 0.6 }, y: { duration: 5.3, repeat: Infinity, ease: "easeInOut" } }}
        >
          <img src={assets.mockCraftwork} alt="" />
          <span className="hero__chip">Craftwork.design</span>
          <Cursor label="Perhaps you?" color="#34c759" className="hero__cursor--laptop" />
        </motion.div>

        {/* Center content */}
        <div className="hero__inner rail">
          <motion.span className="hero__badge" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <span className="hero__badge-dot" /> {hero.badge}
          </motion.span>

          <motion.h1 className="hero__title display" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease }}>
            <span className="hero__title-muted">{hero.titleLead}</span>
            {hero.titleRest}
          </motion.h1>

          <motion.p className="hero__sub" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease }}>
            {hero.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24, ease }}>
            <Button variant="dark" href="#contact" iconRight={<ArrowUpRight size={16} />}>{hero.cta}</Button>
          </motion.div>

          <motion.div className="hero__trust" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32, ease }}>
            <div className="hero__avatars">
              {hero.avatars.map((a, i) => (
                <img key={i} src={a} alt="" style={{ zIndex: hero.avatars.length - i }} />
              ))}
            </div>
            <span>{hero.trusted}</span>
          </motion.div>
        </div>
      </div>

      <div className="hero__bottombar">
        <div className="container hero__bottombar-inner">
          <span>{hero.location}</span>
          <span className="hero__time">{time}</span>
        </div>
      </div>
    </section>
  );
}
