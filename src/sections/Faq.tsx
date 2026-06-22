import { useState } from "react";
import { faqSection as s, faqItems } from "../data/content";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";
import "./Faq.css";

export function Faq() {
  const [open, setOpen] = useState<number>(1);

  return (
    <section className="section faq" id="faq">
      <div className="faq__glow faq__glow--l" aria-hidden />
      <div className="faq__glow faq__glow--r" aria-hidden />
      <div className="container faq__inner">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} align="center" />

        <Reveal className="faq__list">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <span className="faq__toggle" aria-hidden>
                    <span /><span />
                  </span>
                </button>
                <div className="faq__a-wrap">
                  <div className="faq__a">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
