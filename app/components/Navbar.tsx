"use client";

import { useState } from "react";
import Link from "next/link";
import { siteDetails } from "../lib/site";
import { navValues } from "../constants/constants";

const links = [
  { href: "#home", label: navValues.home },
  { href: "#about", label: navValues.about },
  { href: "#skills", label: navValues.skills },
  { href: "#experience", label: navValues.experience },
  { href: "#projects", label: navValues.projects },
  { href: "#education", label: navValues.education },
  { href: "#contact", label: navValues.contact },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-[rgba(5,8,20,0.96)] backdrop-blur-md">
        <nav className="container-page flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="#home"
            className="text-sm font-semibold tracking-[0.16em] leading-tight uppercase"
          >
            <div>{siteDetails.name}</div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden inline-flex flex-col justify-center gap-[5px]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`h-[2px] w-6 bg-neutral-200 transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-neutral-200 transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-neutral-200 transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeMenu}
          />
          {/* Slide-in menu */}
          <aside className="absolute right-0 top-0 h-full w-64 bg-[rgb(5,8,20)] border-l border-neutral-800 p-6 flex flex-col gap-6">
            <div className="text-sm font-semibold tracking-[0.16em] leading-tight uppercase text-[color:var(--accent)]">
              <div>{siteDetails.name}</div>
            </div>

            <nav className="flex flex-col gap-4 mt-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

          </aside>
        </div>
      )}
    </>
  );
}
