"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteDetails } from "../lib/site";
import { navValues } from "../constants/constants";
import { duration, ease } from "../lib/motion";

const links = [
  { href: "#home", label: navValues.home, id: "home" },
  { href: "#about", label: navValues.about, id: "about" },
  { href: "#skills", label: navValues.skills, id: "skills" },
  { href: "#experience", label: navValues.experience, id: "experience" },
  { href: "#projects", label: navValues.projects, id: "projects" },
  { href: "#education", label: navValues.education, id: "education" },
  { href: "#contact", label: navValues.contact, id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: duration.lg, ease: ease.outExpo, delay: 0.2 }}
      >
        <nav
          className="glass flex items-center gap-1 rounded-full border px-2 py-2"
          style={{ borderColor: "var(--border)" }}
        >
          <a
            href="#home"
            className="mr-2 rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AJ
          </a>
          <ul className="hidden items-center gap-0.5 md:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    className="relative z-10 inline-block rounded-full px-3.5 py-1.5 text-[12px] font-medium tracking-wide transition-colors"
                    style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
                  >
                    {l.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "var(--accent-soft)",
                        border: "1px solid var(--border-strong)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href={siteDetails.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden rounded-full px-4 py-1.5 text-[12px] font-medium md:inline-block"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              color: "#050510",
            }}
          >
            Resume
          </a>
          <button
            className="ml-1 inline-flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span
              className={`h-[2px] w-5 transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              style={{ background: "var(--text)" }}
            />
            <span
              className={`h-[2px] w-5 transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              style={{ background: "var(--text)" }}
            />
            <span
              className={`h-[2px] w-5 transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              style={{ background: "var(--text)" }}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.md }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "rgba(7,7,10,0.92)", backdropFilter: "blur(20px)" }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="relative flex h-full flex-col justify-center px-5 sm:px-8"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl sm:text-3xl font-semibold"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    show: { opacity: 1, x: 0, transition: { duration: duration.md, ease: ease.outExpo } },
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={siteDetails.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 w-fit"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  show: { opacity: 1, x: 0, transition: { duration: duration.md, ease: ease.outExpo } },
                }}
                onClick={() => setOpen(false)}
              >
                Resume
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
