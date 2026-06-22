import { motion } from "framer-motion";
import { cta } from "../data/content";
import { Button } from "../components/ui/Button";
import { ArrowUpRight } from "../components/ui/Icons";
import "./Cta.css";

export function Cta() {
  return (
    <section className="section cta" id="contact">
      <div className="cta__glow" aria-hidden />
      <motion.div
        className="cta__orb"
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container cta__inner">
        <motion.h2
          className="cta__title"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {cta.lead} <span className="cta__muted">{cta.rest}</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Button variant="white" iconRight={<ArrowUpRight size={16} />}>{cta.button}</Button>
        </motion.div>
      </div>
    </section>
  );
}
