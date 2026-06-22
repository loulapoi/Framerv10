import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  /** vertical offset to animate from */
  y?: number;
  className?: string;
  once?: boolean;
  duration?: number;
}

/**
 * Scroll-triggered entrance — fade + rise. Re-implements Framer's
 * "appear / layer in view" effect with framer-motion (no Framer runtime).
 */
export function Reveal({ children, delay = 0, y = 26, className, once = true, duration = 0.7 }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}
