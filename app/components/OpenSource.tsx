import Section from "./Section";
import { siteDetails } from "../lib/site";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "link-accent" } as const;

export default function OpenSource() {
  return (
    <Section id="open-source" title="Open Source" subtitle="I contribute to open source projects. Merged contributions:">
      <ul className="space-y-6">
        {siteDetails.openSource.map((c) => (
          <li key={c.contribution.url}>
            <p className="text-base">
              <a href={c.project.url} {...ext}>{c.project.label}</a>
              {" — "}
              <a href={c.contribution.url} {...ext}>{c.contribution.label}</a>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{c.description}</p>
            <p className="mt-1 text-sm text-muted font-mono">{c.tech}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
