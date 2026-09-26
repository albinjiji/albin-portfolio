"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Section from "./Section";
import { siteDetails } from "../lib/site";
import { contactValues } from "../constants/constants";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${siteDetails.email}?subject=Let's%20Connect&body=Hi%20Albin%20Jiji,%0D%0A%0D%0AI%27d%20like%20to%20connect%20with%20you.%0D%0A%0D%0ARegards,%0D%0A`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable; ignore
    }
  };

  return (
    <Section id="contact" title="Contact">
      <p className="text-base text-muted">{contactValues.contactMe}</p>

      <div className="mt-5 flex items-center gap-2">
        <a href={mailto} className="text-lg font-medium link-accent">
          {siteDetails.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
          className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-control)] border border-soft transition-colors duration-150 hover:bg-[var(--surface)]"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>

      <p className="mt-4 text-sm text-muted">
        <a href={`tel:${siteDetails.phone.replace(/[\s-]/g, "")}`} className="link-accent">
          {siteDetails.phone}
        </a>
        {" · "}
        <a href={siteDetails.linkedin} target="_blank" rel="noreferrer" className="link-accent">
          {contactValues.linkedIn}
        </a>
        {" · "}
        <a href={siteDetails.gitHub} target="_blank" rel="noreferrer" className="link-accent">
          {contactValues.gitHub}
        </a>
      </p>
    </Section>
  );
}
