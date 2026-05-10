"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { GithubMark, LinkedinMark } from "./BrandIcons";
import Section from "./Section";
import { siteDetails } from "../lib/site";
import { contactValues } from "../constants/constants";
import { duration, ease, viewportOnce } from "../lib/motion";

export default function Contact() {
  const tel = `tel:${siteDetails.phone.replace(/[\s-]/g, "")}`;
  const mailto = `mailto:${siteDetails.email}?subject=Let's%20Connect&body=Hi%20Albin%20Jiji,%0D%0A%0D%0AI%27d%20like%20to%20connect%20with%20you.%0D%0A%0D%0ARegards,%0D%0A`;

  const channels = [
    { Icon: Mail, label: contactValues.email, value: siteDetails.email, href: mailto },
    { Icon: Phone, label: contactValues.call, value: siteDetails.phone, href: tel },
    { Icon: LinkedinMark, label: contactValues.linkedIn, value: "linkedin.com/in/albinjiji", href: siteDetails.linkedin, external: true },
    { Icon: GithubMark, label: contactValues.gitHub, value: "github.com/albinjiji", href: siteDetails.gitHub, external: true },
  ];

  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's connect">
      <div className="relative overflow-hidden rounded-[var(--radius-xl)] card card-gradient-border">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-1/4"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(34,211,238,0.18), rgba(167,139,250,0.18), rgba(34,211,238,0.18))",
            filter: "blur(60px)",
            opacity: 0.5,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative grid gap-10 p-8 md:grid-cols-2 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: duration.lg, ease: ease.outExpo }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
              Let&apos;s build something
              <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                worth shipping.
              </span>
            </h3>
            <p className="mt-4 max-w-md text-sm md:text-base text-muted">
              {contactValues.contactMe}
            </p>
            <a
              href={mailto}
              className="btn-primary mt-7"
              data-cursor="hover"
            >
              {contactValues.emailMe}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.ul
            className="flex flex-col gap-2"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {channels.map(({ Icon, label, value, href, external }) => (
              <motion.li
                key={label}
                variants={{
                  hidden: { opacity: 0, x: 16 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: duration.md, ease: ease.outExpo },
                  },
                }}
              >
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 transition-all"
                  style={{
                    borderColor: "var(--border)",
                    background: "rgba(255,255,255,0.015)",
                  }}
                  data-cursor="hover"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full transition-colors group-hover:[background:var(--accent-soft)]"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="flex flex-col">
                      <span className="mono-label">{label}</span>
                      <span className="text-sm">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="translate-x-0 opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    style={{ color: "var(--accent)" }}
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}
