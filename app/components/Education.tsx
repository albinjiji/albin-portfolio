import Section from "./Section";
import { siteDetails } from "../lib/site";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="divide-y divide-[var(--border)]">
        {siteDetails.education.map((ed, i) => (
          <div key={i} className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">{ed.degree}</h3>
              <p className="text-sm text-muted">{ed.university}</p>
            </div>
            <span className="text-sm text-muted whitespace-nowrap">{ed.period}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
