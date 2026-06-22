import { motion } from "framer-motion";
import { servicesSection as s, stats } from "../data/content";
import { assets } from "../assets";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Calendar, Sparkle } from "../components/ui/Icons";
import { Reveal } from "../components/ui/Reveal";
import "./Services.css";

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} align="center">
          <Button variant="dark" icon={<Calendar size={16} />}>{s.cta}</Button>
        </SectionHeader>

        <Reveal className="services__panel-wrap">
          <div className="services__panel">
            <div className="services__panel-bg" style={{ backgroundImage: `url(${assets.heroClouds})` }} aria-hidden />
            <div className="services__panel-content">
              <h3 className="services__panel-title">{s.panelTitle}</h3>
              <p className="services__panel-body">{s.panelBody}</p>
              <ul className="services__bullets">
                {s.bullets.map((b) => (
                  <li key={b}><Sparkle size={15} /> {b}</li>
                ))}
              </ul>
              <Button variant="white" icon={<Calendar size={16} />}>{s.cta}</Button>
            </div>
          </div>
        </Reveal>

        <div className="services__stats">
          {stats.map((st, i) => (
            <motion.div
              key={st.label}
              className="services__stat"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="services__stat-value">{st.value}</div>
              <div className="services__stat-label">{st.label}</div>
              <p className="services__stat-body">{st.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
