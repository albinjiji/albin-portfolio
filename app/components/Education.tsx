"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import { siteDetails } from "../lib/site";
import { duration, ease, viewportOnce } from "../lib/motion";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="education" eyebrow="05 — Education" title="Education">
      <div ref={ref} className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
          style={{ background: "var(--border)" }}
        />
        <motion.div
          className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 md:block"
          style={{
            height: lineHeight,
            background:
              "linear-gradient(180deg, var(--accent), var(--accent-2))",
            boxShadow: "0 0 14px var(--accent)",
          }}
        />

        <ol className="space-y-12">
          {siteDetails.education.map((ed, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li
                key={i}
                className="relative grid md:grid-cols-2 md:gap-12"
              >
                <motion.span
                  aria-hidden
                  className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full md:block"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    boxShadow: "0 0 0 4px var(--bg), 0 0 20px var(--accent)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: duration.md,
                    ease: ease.outExpo,
                    delay: 0.1,
                  }}
                />
                <motion.div
                  className={`card card-gradient-border p-6 md:p-7 ${
                    isLeft ? "md:col-start-1" : "md:col-start-2"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, rotateY: isLeft ? 6 : -6 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: duration.lg, ease: ease.outExpo }}
                  whileHover={{ y: -4 }}
                  style={{ transformStyle: "preserve-3d", perspective: 800 }}
                >
                  <h3 className="text-xl font-semibold">{ed.degree}</h3>
                  <p className="mt-2 text-sm text-muted">{ed.university}</p>
                  <p className="mono-label mt-3" style={{ color: "var(--accent)" }}>
                    {ed.period}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
