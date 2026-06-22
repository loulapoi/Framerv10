import { useState } from "react";
import { motion } from "framer-motion";
import { pricingSection as s, plans } from "../data/content";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Wave } from "../components/ui/Icons";
import { featureIcon, featureIconPremium } from "../components/ui/Icons";
import { Reveal } from "../components/ui/Reveal";
import type { Plan } from "../types";
import "./Pricing.css";

function PlanCard({ plan, annual, index }: { plan: Plan; annual: boolean; index: number }) {
  const price = annual ? plan.annual : plan.monthly;
  const icons = plan.highlight ? featureIconPremium : featureIcon;
  return (
    <motion.article
      className={`plan ${plan.highlight ? "plan--premium" : "plan--standard"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="plan__head">
        <span className="plan__icon"><img src={plan.icon} alt="" /></span>
        {plan.badge && <span className="plan__badge">{plan.badge}</span>}
      </div>
      <h3 className="plan__name">{plan.name}</h3>
      <p className="plan__tagline">{plan.tagline}</p>
      <div className="plan__price">
        <span className="plan__amount">${price.toLocaleString()}</span>
        <span className="plan__suffix">{s.priceSuffix}</span>
      </div>
      <a className={`plan__cta ${plan.highlight ? "is-dark" : ""}`} href="#contact">
        <Wave size={16} /> {plan.cta}
      </a>
      <ul className="plan__features">
        {plan.features.map((f, i) => {
          const Ico = icons[i] ?? icons[0];
          return (
            <li key={f}>
              <span className="plan__feat-icon"><Ico size={16} /></span>
              {f}
            </li>
          );
        })}
      </ul>
      <div className="plan__reviews">
        {plan.reviews.map((r, i) => (
          <div className="plan__review" key={i}>
            {r.avatar && <img src={r.avatar} alt={r.name} />}
            <div>
              <div className="plan__review-name">{r.name}, {r.org}</div>
              <p className="plan__review-quote">"{r.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} align="center" tone="dark" />

        <Reveal className="pricing__toggle-wrap">
          <div className="pricing__toggle" role="tablist">
            <button className={!annual ? "is-on" : ""} onClick={() => setAnnual(false)}>{s.toggle.monthly}</button>
            <button className={annual ? "is-on" : ""} onClick={() => setAnnual(true)}>
              {s.toggle.annual} <em>{s.toggle.save}</em>
            </button>
          </div>
        </Reveal>

        <div className="pricing__grid">
          {plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} annual={annual} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
