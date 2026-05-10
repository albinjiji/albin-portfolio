import type { Transition, Variants } from "framer-motion";

export const duration = {
  xs: 0.15,
  sm: 0.25,
  md: 0.4,
  lg: 0.7,
  xl: 1.2,
} as const;

export const ease = {
  outSoft: [0.22, 1, 0.36, 1] as [number, number, number, number],
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOutQuart: [0.76, 0, 0.24, 1] as [number, number, number, number],
};

export const stagger = {
  char: 0.03,
  word: 0.04,
  item: 0.08,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.lg, ease: ease.outExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: duration.lg, ease: ease.outSoft } },
};

export const staggerContainer = (delay = 0, gap = stagger.item): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
});

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "0.4em", filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.lg, ease: ease.outExpo },
  },
};

export const charReveal: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.lg, ease: ease.outExpo },
  },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;

export const baseTransition: Transition = {
  duration: duration.md,
  ease: ease.outSoft,
};
