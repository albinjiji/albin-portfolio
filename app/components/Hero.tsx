import { Download } from "lucide-react";
import { siteDetails } from "../lib/site";
import { contactValues } from "../constants/constants";

export default function Hero() {
  return (
    <section id="home" className="container-page pt-16 pb-8 md:pt-24 md:pb-12">
      <h1 className="text-[clamp(28px,5vw,40px)] font-semibold leading-tight">
        {siteDetails.name}
      </h1>
      <p className="mt-2 text-base text-muted">{siteDetails.title}</p>
      <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-muted">
        I build fast, reliable web and mobile interfaces with React, Next.js, and
        TypeScript — and I&apos;m looking for senior frontend engineer or solutions
        engineering roles where I can pair that depth with customer-facing ownership.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#projects" className="btn-primary w-full sm:w-auto">
          View projects
        </a>
        <a href={siteDetails.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
          <Download size={16} />
          {contactValues.resume}
        </a>
      </div>

      <p className="mt-5 text-sm text-muted">
        <a href={siteDetails.gitHub} target="_blank" rel="noreferrer" className="link-accent">
          {contactValues.gitHub}
        </a>
        {" · "}
        <a href={siteDetails.linkedin} target="_blank" rel="noreferrer" className="link-accent">
          {contactValues.linkedIn}
        </a>
        {" · "}
        <a href={`mailto:${siteDetails.email}`} className="link-accent">
          {contactValues.email}
        </a>
      </p>
    </section>
  );
}
