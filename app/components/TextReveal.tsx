"use client";

import { motion } from "framer-motion";
import { charReveal, ease, stagger, viewportOnce, wordReveal } from "../lib/motion";

type Mode = "word" | "char";

type Props = {
  text: string;
  mode?: Mode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  once?: boolean;
};

export default function TextReveal({
  text,
  mode = "word",
  className,
  as: Tag = "span",
  delay = 0,
  once = true,
}: Props) {
  const tokens = mode === "char" ? Array.from(text) : text.split(/(\s+)/);
  const variants = mode === "char" ? charReveal : wordReveal;
  const gap = mode === "char" ? stagger.char : stagger.word;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };

  const MotionTag = motion[Tag] as typeof motion.span;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={once ? viewportOnce : { amount: 0.25 }}
      aria-label={text}
    >
      {tokens.map((t, i) => {
        if (/^\s+$/.test(t)) return <span key={i}>{t}</span>;
        return (
          <motion.span
            key={i}
            aria-hidden
            variants={variants}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            transition={{ ease: ease.outExpo }}
          >
            {t}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}
