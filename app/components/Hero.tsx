"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { siteDetails } from "../lib/site";
import { contactValues } from "../constants/constants";
import { duration, ease } from "../lib/motion";
import GradientMesh from "./GradientMesh";
import TextReveal from "./TextReveal";

function MagneticButton({
  href,
  target,
  rel,
  children,
  variant = "primary",
}: {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={variant === "primary" ? "btn-primary" : "btn-secondary"}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
    >
      {children}
    </motion.a>
  );
}

function HeroOrb() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-1, 1], [10, -10]);
  const ry = useTransform(mx, [-1, 1], [-12, 12]);
  const srx = useSpring(rx, { stiffness: 80, damping: 14 });
  const sry = useSpring(ry, { stiffness: 80, damping: 14 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mx.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width * 0.8))));
      my.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height * 0.8))));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="relative flex aspect-square w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] items-center justify-center" style={{ perspective: 800 }}>
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(34,211,238,0.35), transparent 55%), radial-gradient(circle at 70% 70%, rgba(167,139,250,0.35), transparent 60%)",
            filter: "blur(20px)",
          }}
        />
        <motion.div
          className="absolute inset-6 rounded-full border"
          style={{ borderColor: "var(--border-strong)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-12 rounded-full border"
          style={{ borderColor: "var(--border)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-20 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(167,139,250,0.12))",
            border: "1px solid var(--border-strong)",
            backdropFilter: "blur(8px)",
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-6 flex items-center justify-center">
            <img
              src="/hero-illustration.svg"
              alt=""
              aria-hidden
              className="h-full w-full object-contain opacity-90"
            />
          </div>
        </motion.div>
        <motion.span
          className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full"
          style={{ background: "var(--accent)", boxShadow: "0 0 18px var(--accent)" }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute right-[12%] bottom-[18%] h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--accent-2)", boxShadow: "0 0 14px var(--accent-2)" }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-16"
    >
      <div className="grid-bg absolute inset-0" aria-hidden />
      <GradientMesh />

      <div className="container-page relative z-10 grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center">
        <div>
          <motion.div
            className="mono-label mb-5 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.md, ease: ease.outSoft, delay: 0.2 }}
          >
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            >
              <span
                className="absolute inset-0 animate-ping rounded-full"
                style={{ background: "var(--accent)", opacity: 0.6 }}
              />
            </span>
            Available for opportunities
          </motion.div>

          <motion.p
            className="text-base text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.md, ease: ease.outSoft, delay: 0.3 }}
          >
            I&apos;m {siteDetails.name}
          </motion.p>

          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
            <TextReveal
              text="Senior Software"
              mode="char"
              as="span"
              className="block"
              delay={0.1}
            />
            <TextReveal
              text="Engineer"
              mode="char"
              as="span"
              className="block"
              delay={0.3}
            />
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base sm:text-lg text-muted"
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: duration.lg, ease: ease.outExpo, delay: 0.9 }}
          >
            {siteDetails.tagline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.md, ease: ease.outSoft, delay: 1.05 }}
          >
            <MagneticButton href={`mailto:${siteDetails.email}`} variant="primary">
              {contactValues.emailMe}
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href={siteDetails.resumeUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <Download size={16} />
              {contactValues.resume}
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: duration.xl, ease: ease.outExpo, delay: 0.4 }}
        >
          <HeroOrb />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.md, delay: 1.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="mono-label">Scroll</span>
          <span
            className="h-8 w-px"
            style={{
              background: "linear-gradient(180deg, var(--accent), transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
