"use client";

import { motion } from "framer-motion";
import { siteDetails } from "../lib/site";
import Section from "./Section";
import { duration, ease, stagger, viewportOnce } from "../lib/motion";

export default function About() {
  const paragraphs = siteDetails.about.split(/\n\s*\n/).map((p) => p.trim());

  return (
    <Section id="about" eyebrow="01 — About" title="About me">
      <div className="grid gap-10 md:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] md:items-start">
        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-[220px] sm:max-w-[280px] overflow-hidden rounded-[var(--radius-xl)]"
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          viewport={viewportOnce}
          transition={{ duration: 1.0, ease: ease.outExpo }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--radius-xl)",
            }}
          />
          <motion.div
            className="absolute -left-10 -top-10 h-40 w-40 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.45), transparent 70%)",
              filter: "blur(20px)",
            }}
            animate={{ x: [0, 14, 0], y: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(167,139,250,0.45), transparent 70%)",
              filter: "blur(24px)",
            }}
            animate={{ x: [0, -16, 0], y: [0, -12, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] font-semibold leading-none"
              style={{
                fontFamily: "var(--font-display), sans-serif",
                backgroundImage:
                  "linear-gradient(135deg, var(--accent), var(--accent-2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              aria-hidden
            >
              AJ
            </span>
          </div>
        </motion.div>

        <motion.div
          className="card card-gradient-border p-5 sm:p-7 md:p-9"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: stagger.word } },
          }}
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-[15px] sm:text-base leading-relaxed text-muted"
              style={{ marginTop: i === 0 ? 0 : "1.25rem" }}
            >
              {para.split(/(\s+)/).map((tok, j) => {
                if (/^\s+$/.test(tok)) return <span key={j}>{tok}</span>;
                return (
                  <motion.span
                    key={j}
                    style={{ display: "inline-block" }}
                    variants={{
                      hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: duration.md, ease: ease.outExpo },
                      },
                    }}
                  >
                    {tok}
                  </motion.span>
                );
              })}
            </p>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
