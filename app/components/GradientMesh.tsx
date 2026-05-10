"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  intensity?: number;
};

export default function GradientMesh({ className, intensity = 1 }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        className="absolute -left-40 -top-40 h-[60vh] w-[60vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 60%)",
          filter: "blur(40px)",
          opacity: 0.7 * intensity,
        }}
        animate={{ x: [0, 60, -20, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-20 h-[55vh] w-[55vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 60%)",
          filter: "blur(60px)",
          opacity: 0.7 * intensity,
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[40vh] w-[40vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 65%)",
          filter: "blur(50px)",
          opacity: 0.6 * intensity,
        }}
        animate={{ x: [0, 30, -40, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
