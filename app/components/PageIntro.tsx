"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { duration, ease } from "../lib/motion";

const KEY = "aj-intro-shown";

export default function PageIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      sessionStorage.setItem(KEY, "1");
      return;
    }
    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(KEY, "1");
      document.body.style.overflow = "";
    }, 1100);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          aria-hidden
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--bg)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: duration.md, ease: ease.outSoft } }}
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: duration.lg, ease: ease.outExpo }}
            className="relative h-20 w-20"
          >
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, var(--accent-soft), transparent 65%)",
              }}
              animate={{ scale: [0.8, 1.4], opacity: [0.7, 0] }}
              transition={{ duration: 1, ease: ease.outExpo, repeat: 1 }}
            />
            <svg viewBox="0 0 80 80" className="relative h-full w-full">
              <defs>
                <linearGradient id="introG" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--accent-2)" />
                </linearGradient>
              </defs>
              <motion.text
                x="40"
                y="52"
                textAnchor="middle"
                fontSize="34"
                fontWeight="700"
                fill="url(#introG)"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration.md, delay: 0.1 }}
              >
                AJ
              </motion.text>
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke="url(#introG)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: ease.outExpo }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
