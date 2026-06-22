import { motion } from "framer-motion";
import { about, features } from "../data/content";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ArrowUpRight, Calendar, Play, Sparkle } from "../components/ui/Icons";
import { Reveal } from "../components/ui/Reveal";
import "./About.css";

const featIcons = [
  <svg key="a" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 10l-2 8 8-2 7-7-6-6Z" /><circle cx="11" cy="11" r="2" /></svg>,
  <svg key="b" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>,
  <svg key="c" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" /></svg>,
];

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeader eyebrow={about.eyebrow} title={about.title} subtitle={about.subtitle} align="center" icon={<Sparkle size={13} />}>
          <Button variant="dark" icon={<Calendar size={16} />}>{about.ctaPrimary}</Button>
          <Button variant="light" href="#process" iconRight={<ArrowUpRight size={15} />}>{about.ctaSecondary}</Button>
        </SectionHeader>

        <Reveal className="about__video-wrap">
          <div className="about__video">
            <video src={about.video} poster={about.videoPoster} autoPlay muted loop playsInline />
            <div className="about__video-overlay">
              <span className="about__play"><Play size={18} /></span>
              <span className="about__video-label">{about.videoLabel}</span>
            </div>
          </div>
        </Reveal>

        <div className="about__features">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="about__feature"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="about__feature-icon">{featIcons[i]}</span>
              <h4 className="about__feature-title">{f.title}</h4>
              <p className="about__feature-body">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
