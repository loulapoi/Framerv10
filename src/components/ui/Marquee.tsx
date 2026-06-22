import type { ReactNode } from "react";
import "./Marquee.css";

interface MarqueeProps {
  children: ReactNode;
  /** seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/** Infinite, seamless horizontal marquee (CSS-driven, pauses on hover). */
export function Marquee({ children, duration = 38, reverse = false, className = "" }: MarqueeProps) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee__track ${reverse ? "marquee__track--rev" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
