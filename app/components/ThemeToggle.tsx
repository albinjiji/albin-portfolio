"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const subscribe = (cb: () => void) => {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
};
const getTheme = (): Theme | null =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";
const getServerTheme = (): Theme | null => null;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const dark = theme === "dark";

  const toggle = () => {
    const next: Theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={toggle}
      aria-label="Dark theme"
      className="relative mx-1 inline-flex h-7 w-[52px] shrink-0 items-center rounded-full border border-[var(--border)] bg-[var(--surface)]"
    >
      <span
        className={`absolute left-[2px] top-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] transition-transform duration-150 ${
          dark ? "translate-x-6" : ""
        }`}
      >
        {theme && (dark ? <Moon size={12} /> : <Sun size={12} />)}
      </span>
    </button>
  );
}
