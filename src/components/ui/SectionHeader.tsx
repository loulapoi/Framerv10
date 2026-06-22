import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import "./SectionHeader.css";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  icon?: ReactNode;
  children?: ReactNode; // actions (buttons)
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center", tone = "light", icon, children }: SectionHeaderProps) {
  return (
    <div className={`sec-head sec-head--${align} sec-head--${tone}`}>
      <Reveal>
        <span className="sec-head__eyebrow">
          {icon}
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="sec-head__title h3">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="sec-head__subtitle">{subtitle}</p>
        </Reveal>
      )}
      {children && (
        <Reveal delay={0.18}>
          <div className="sec-head__actions">{children}</div>
        </Reveal>
      )}
    </div>
  );
}
