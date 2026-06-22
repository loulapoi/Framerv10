import { motion } from "framer-motion";
import type { ReactNode } from "react";
import "./Button.css";

type Variant = "dark" | "white" | "light";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  block?: boolean;
}

export function Button({ children, href = "#contact", variant = "dark", icon, iconRight, className = "", block }: ButtonProps) {
  return (
    <motion.a
      href={href}
      className={`btn btn--${variant} ${block ? "btn--block" : ""} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__label">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </motion.a>
  );
}
