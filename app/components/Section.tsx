"use client";

import { motion } from "framer-motion";
import { duration, ease, viewportOnce } from "../lib/motion";

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, eyebrow, subtitle, children, className }: Props) {
  return (
    <section id={id} className={`section relative ${className ?? ""}`}>
      <header className="mb-12 md:mb-16">
        {eyebrow && (
          <motion.div
            className="mono-label mb-3 flex items-center gap-3"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: duration.md, ease: ease.outSoft }}
          >
            <span
              className="h-px w-8"
              style={{
                background: "linear-gradient(90deg, var(--accent), transparent)",
              }}
            />
            {eyebrow}
          </motion.div>
        )}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.lg, ease: ease.outExpo }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="mt-4 max-w-2xl text-muted"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: duration.lg, ease: ease.outExpo, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
      </header>
      {children}
    </section>
  );
}
