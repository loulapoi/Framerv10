import { nichesSection as s, nicheRows } from "../data/content";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Marquee } from "../components/ui/Marquee";
import { nicheIcon } from "../components/ui/Icons";
import "./Niches.css";

export function Niches() {
  return (
    <section className="section niches" id="niches">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} align="center" />
      </div>

      <div className="niches__rows">
        {nicheRows.map((row, ri) => {
          const Pills = (
            <>
              {row.map((pill) => {
                const Ico = nicheIcon[pill.label];
                return (
                  <span key={pill.label} className={`niche-pill ${pill.active ? "is-active" : ""}`}>
                    {Ico && <Ico size={18} />}
                    {pill.label}
                  </span>
                );
              })}
            </>
          );
          return (
            <Marquee key={ri} reverse={ri % 2 === 1} duration={34 + ri * 6}>
              {Pills}
            </Marquee>
          );
        })}
      </div>
    </section>
  );
}
