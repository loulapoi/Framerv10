import { projectsSection as s, projects } from "../data/content";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ArrowUpRight } from "../components/ui/Icons";
import "./Projects.css";

function isDark(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16), g = parseInt(c.slice(2, 4), 16), b = parseInt(c.slice(4, 6), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 130;
}

export function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} align="left" />
        <div className="projects__stack">
          {projects.map((p, i) => {
            const dark = isDark(p.tint);
            return (
              <article
                key={p.title}
                className={`projects__card ${dark ? "is-dark" : "is-light"}`}
                style={{ background: p.tint, top: `calc(96px + ${i * 22}px)` }}
              >
                <div className="projects__meta">
                  <span className="projects__tag">{p.category}</span>
                  <span className="projects__year">{p.year}</span>
                </div>
                <h3 className="projects__title">{p.title}</h3>
                <a className="projects__view" href="#work"><ArrowUpRight size={18} /></a>
                <div className="projects__shot">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
