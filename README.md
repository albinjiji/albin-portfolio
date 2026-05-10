# 🌐 Albin Jiji — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

A dark, modern, futuristic single-page portfolio. Built as a portfolio piece in itself — every interaction, animation, and surface is meant to be a hiring signal.

🌐 Live: https://albin-one.vercel.app/

---

## 🚀 Run / Build

```bash
# install
npm install

# dev (Turbopack)
npm run dev          # http://localhost:3000

# production build
npm run build
npm run start

# lint
npm run lint
```

Requires Node 18.18+ (Next 16).

---

## 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + CSS variables for design tokens
- **Motion**: [Framer Motion](https://www.framer.com/motion/) (component motion + shared layout) and [Lenis](https://github.com/darkroomengineering/lenis) (smooth scroll)
- **Icons**: [lucide-react](https://lucide.dev/) + inline brand SVGs
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (mono) — served via `next/font`

---

## 📁 Project Structure

```
app/
  layout.tsx              # Fonts, smooth scroll, scroll progress, noise, cursor, page intro
  page.tsx                # Section composition
  globals.css             # Design tokens + utility classes
  lib/
    site.tsx              # 🔒 All real content lives here (single source of truth)
    motion.ts              # Motion tokens (durations, easings, variants)
  constants/constants.tsx # UI labels (nav, contact, footer, skills group titles)
  components/
    Navbar.tsx            # Floating glass pill nav, animated active indicator
    Hero.tsx              # Asymmetric hero with split-text, magnetic CTAs, animated orb
    About.tsx             # Monogram tile + word-stagger bio
    Skills.tsx            # Dual-direction marquees + categorized chip groups
    Experience.tsx        # Vertical tabs ↔ animated detail panel
    Projects.tsx          # Bento card with parallax preview tile
    Education.tsx         # Scroll-drawn vertical timeline
    Contact.tsx           # Conic-gradient panel + channel list
    Footer.tsx
    Section.tsx           # Eyebrow + title shell
    SmoothScroll.tsx      # Lenis wrapper
    ScrollProgress.tsx    # Top progress bar
    Noise.tsx             # Fixed grain overlay
    Cursor.tsx            # Magnetic custom cursor (toggles off on touch / reduced-motion)
    PageIntro.tsx         # First-load AJ logo intro (sessionStorage flag)
    GradientMesh.tsx      # Animated radial blobs
    TextReveal.tsx        # Split-by-word/char reveal helper
    BrandIcons.tsx        # Inline GitHub / LinkedIn marks
public/
  Albin-Jiji-Resume.pdf
  hero-illustration.svg
  favicon.svg
```

> All site copy (name, title, tagline, bio, skills, experience, projects, education, contact info) lives in `app/lib/site.tsx`. Edit content there — components never hardcode text.

---

## ♿ Accessibility
- Semantic landmarks (`header`, `main`, `section`, `footer`).
- Visible focus ring in the cyan accent.
- `prefers-reduced-motion: reduce` zeros all motion-token durations and disables Lenis, custom cursor, and the page intro.
- Custom cursor never hides for keyboard users (it only renders on hover-capable pointers).

## ⚡ Performance
- Animations are limited to `transform` / `opacity` / `filter`.
- Fonts loaded with `next/font` (no external CDN, swap-on-fallback).
- No 3D libraries, no heavy bundles.
- `next build` outputs the page as a fully static prerendered route.

---

## 📬 Contact
- 📧 albinjiji3@gmail.com
- 💼 https://linkedin.com/in/albinjiji
- 💻 https://github.com/albinjiji
