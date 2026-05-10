"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubMark } from "./BrandIcons";
import Section from "./Section";
import { siteDetails } from "../lib/site";
import { duration, ease, viewportOnce } from "../lib/motion";

function ProjectCard({
  name,
  description,
  links,
}: {
  name: string;
  description: string[];
  links: { label: string; url: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [6, -6]);
  const ry = useTransform(mx, [-0.5, 0.5], [-8, 8]);
  const srx = useSpring(rx, { stiffness: 120, damping: 14 });
  const sry = useSpring(ry, { stiffness: 120, damping: 14 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) / r.width);
    my.set((e.clientY - (r.top + r.height / 2)) / r.height);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative overflow-hidden rounded-[var(--radius-xl)] card card-gradient-border"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: duration.lg, ease: ease.outExpo }}
    >
      <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="relative aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(167,139,250,0.18))",
            }}
          />
          <motion.div
            className="absolute -left-10 top-0 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.5), transparent 65%)",
              filter: "blur(30px)",
            }}
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 bottom-0 h-72 w-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(167,139,250,0.45), transparent 65%)",
              filter: "blur(34px)",
            }}
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 grid-bg opacity-50"
            aria-hidden
          />
          <div className="relative flex h-full items-center justify-center p-5 sm:p-10">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              <div className="mb-2">{`> npm run`}</div>
              <div
                className="text-2xl sm:text-3xl normal-case tracking-normal"
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                }}
              >
                {name.split(" - ")[0]}
              </div>
              <div
                className="mt-3 text-[10px] tracking-[0.3em]"
                style={{ color: "var(--accent)" }}
              >
                ✶ Featured project
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-5 sm:p-7 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold leading-tight">
            {name}
          </h3>
          <ul className="mt-5 space-y-3">
            {description.map((d, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1 w-3 flex-shrink-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent), var(--accent-2))",
                  }}
                />
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((l) => {
              const isGh = /github/i.test(l.label) || /github\.com/i.test(l.url);
              return (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition"
                  style={{
                    borderColor: "var(--border-strong)",
                    color: "var(--text)",
                  }}
                  data-cursor="hover"
                >
                  {isGh ? <GithubMark size={14} /> : <ArrowUpRight size={14} />}
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Projects" title="Selected work">
      <div className="grid gap-6">
        {siteDetails.projects.map((p, i) => (
          <ProjectCard
            key={i}
            name={p.name}
            description={p.description}
            links={p.links}
          />
        ))}
      </div>
    </Section>
  );
}
