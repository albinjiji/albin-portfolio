"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteDetails } from "../lib/site";
import { skillValues } from "../constants/constants";
import { duration, ease, stagger, viewportOnce } from "../lib/motion";

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items, ...items];
  return (
    <div
      className="group relative overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max gap-3 will-change-transform group-hover:[animation-play-state:paused]"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {row.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm whitespace-nowrap"
            style={{
              borderColor: "var(--border)",
              background: "rgba(255,255,255,0.02)",
              fontFamily: "var(--font-mono), monospace",
              color: "var(--muted)",
            }}
          >
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      className="card card-gradient-border p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: duration.lg, ease: ease.outExpo }}
    >
      <h3 className="mono-label" style={{ color: "var(--accent)" }}>
        {title}
      </h3>
      <motion.div
        className="mt-4 flex flex-wrap gap-2"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger.item / 2 } },
        }}
      >
        {items.map((s) => (
          <motion.span
            key={s}
            className="badge"
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: duration.md, ease: ease.outSoft },
              },
            }}
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = siteDetails;
  const allFlat = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools,
  ];
  const half = Math.ceil(allFlat.length / 2);
  const rowA = allFlat.slice(0, half);
  const rowB = allFlat.slice(half).concat(skills.core.slice(0, 4));

  return (
    <Section id="skills" eyebrow="02 — Skills" title="What I work with">
      <div className="mb-12 space-y-1">
        <Marquee items={rowA} />
        <Marquee items={rowB} reverse />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Group title={skillValues.frontend} items={skills.frontend} />
        <Group title={skillValues.backend} items={skills.backend} />
        <Group title={skillValues.coreCompetencies} items={skills.core} />
        <Group title={skillValues.softwareAndTools} items={skills.tools} />
      </div>
    </Section>
  );
}
