"use client";

import { useEffect, useState } from "react";
import { siteDetails } from "../lib/site";
import { navValues, contactValues } from "../constants/constants";

const links = [
  { href: "#about", label: navValues.about, id: "about" },
  { href: "#experience", label: navValues.experience, id: "experience" },
  { href: "#projects", label: navValues.projects, id: "projects" },
  { href: "#contact", label: navValues.contact, id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 bg-[var(--bg)] transition-colors duration-150 ${
        scrolled ? "border-b border-soft" : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-14 items-center justify-between">
        <a href="#home" className="text-sm font-semibold">
          {siteDetails.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm transition-colors duration-150"
                style={{ color: active === l.id ? "var(--accent)" : "var(--text)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href={siteDetails.resumeUrl} target="_blank" rel="noreferrer" className="text-sm link-accent">
            {contactValues.resume}
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className={`h-[2px] w-5 bg-[var(--text)] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-5 bg-[var(--text)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 bg-[var(--text)] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-soft bg-[var(--bg)] md:hidden">
          <ul className="container-page flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm"
                  style={{ color: active === l.id ? "var(--accent)" : "var(--text)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteDetails.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block py-3 text-sm link-accent"
              >
                {contactValues.resume}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
