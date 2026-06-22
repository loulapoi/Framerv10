import { motion } from "framer-motion";
import { testimonialsSection as s, testimonials } from "../data/content";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Calendar } from "../components/ui/Icons";
import { Reveal } from "../components/ui/Reveal";
import "./Testimonials.css";

export function Testimonials() {
  return (
    <section className="section testi" id="testimonials">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} align="center">
          <Button variant="dark" icon={<Calendar size={16} />} href="#contact">{s.cta}</Button>
        </SectionHeader>

        <div className="testi__grid">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              className="testi__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <p className="testi__quote hand">{t.quote}</p>
              <div className="testi__author">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <div className="testi__name">{t.name}</div>
                  <div className="testi__role">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal className="testi__companies">
          <p className="testi__companies-title">{s.companiesHeading}</p>
          <div className="testi__logos">
            {s.companies.map((c, i) => (
              <span key={i} className="testi__logo">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 3a7 7 0 0 1 6.7 9H5.3A7 7 0 0 1 12 5Z" />
                </svg>
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
