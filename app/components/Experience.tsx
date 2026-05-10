"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { siteDetails } from "../lib/site";
import Section from "./Section";
import { duration, ease, viewportOnce } from "../lib/motion";

function Bullet({ text }: { text: string }) {
  if (text.startsWith("Technologies Used:")) {
    const [prefix, rest] = text.split(":");
    return (
      <li className="text-sm leading-relaxed text-muted">
        <strong className="text-[color:var(--text)]">{prefix}:</strong>
        {rest}
      </li>
    );
  }
  return <li className="text-sm leading-relaxed text-muted">{text}</li>;
}

export default function Experience() {
  const items = siteDetails.experience;
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I've worked">
      <div className="grid w-full gap-8 md:grid-cols-[260px_1fr]">
        <motion.div
          className="md:sticky md:top-28 md:self-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.lg, ease: ease.outExpo }}
        >
          <ul className="relative flex w-full md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-1 md:pb-0">
            <span
              className="absolute left-0 top-0 hidden h-full w-px md:block"
              style={{ background: "var(--border)" }}
            />
            {items.map((it, i) => {
              const isActive = i === active;
              return (
                <li key={i} className="relative">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="relative w-full md:whitespace-nowrap px-3 py-2 sm:px-4 sm:py-3 text-left transition-colors"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--muted)",
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="exp-tab-indicator"
                        className="absolute left-0 top-0 hidden h-full w-[2px] md:block"
                        style={{ background: "var(--accent)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <div className="text-sm font-semibold">{it.company}</div>
                    <div className="mono-label mt-1">{it.period}</div>
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <div className="card card-gradient-border p-5 sm:p-7 md:p-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: duration.md, ease: ease.outExpo }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {current.role}{" "}
                  <span style={{ color: "var(--accent)" }}>@ {current.company}</span>
                </h3>
              </div>
              <div className="mono-label mt-2">
                {current.period}
                {current.location ? ` · ${current.location}` : ""}
              </div>
              <motion.ul
                className="mt-6 space-y-3"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                }}
              >
                {current.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: duration.md, ease: ease.outExpo },
                      },
                    }}
                    className="flex gap-3"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-3 flex-shrink-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--accent), var(--accent-2))",
                      }}
                    />
                    <Bullet text={h} />
                  </motion.div>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
