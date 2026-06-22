import { motion } from "framer-motion";
import { processSection as s, processSteps } from "../data/content";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Calendar } from "../components/ui/Icons";
import { Reveal } from "../components/ui/Reveal";
import "./Process.css";

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} align="center" />

        <div className="process__grid">
          {processSteps.map((step, i) => (
            <motion.article
              key={step.title}
              className="process__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`process__media process__media--${step.kind}`}>
                <img src={step.media} alt="" loading="lazy" />
              </div>
              <div className="process__step-no">Step {i + 1}</div>
              <h4 className="process__title">{step.title}</h4>
              <p className="process__body">{step.body}</p>
            </motion.article>
          ))}
        </div>

        <Reveal className="process__cta">
          <Button variant="dark" icon={<Calendar size={16} />}>{s.cta}</Button>
        </Reveal>
      </div>
    </section>
  );
}
