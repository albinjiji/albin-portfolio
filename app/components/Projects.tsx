import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { siteDetails } from "../lib/site";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="divide-y divide-[var(--border)]">
        {siteDetails.projects.map((p, i) => {
          const techLine = p.description[p.description.length - 1];
          const bullets = p.description.slice(0, -1);
          return (
            <article key={i} className="py-6 first:pt-0">
              <h3 className="text-base font-semibold">{p.name}</h3>
              <ul className="mt-2 space-y-2">
                {bullets.map((d, j) => (
                  <li key={j} className="text-sm leading-relaxed text-muted">
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-muted font-mono">{techLine}</p>
              {p.links.length > 0 && (
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 link-accent"
                    >
                      {l.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
