import Section from "./Section";
import { siteDetails } from "../lib/site";
import { skillValues } from "../constants/constants";

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr] sm:gap-4 py-3">
      <div className="text-sm text-muted">{label}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = siteDetails;

  return (
    <Section id="skills" title="Skills">
      <div className="divide-y divide-[var(--border)]">
        <Row label={skillValues.frontend} items={skills.frontend} />
        <Row label={skillValues.backend} items={skills.backend} />
        <Row label={skillValues.coreCompetencies} items={skills.core} />
        <Row label={skillValues.softwareAndTools} items={skills.tools} />
      </div>
    </Section>
  );
}
