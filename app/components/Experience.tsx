import Section from "./Section";
import { siteDetails } from "../lib/site";

function Bullet({ text }: { text: string }) {
  if (text.startsWith("Technologies Used:")) {
    const [prefix, rest] = text.split(":");
    return (
      <li className="text-sm leading-relaxed text-muted">
        <strong className="text-[color:var(--text)]">{prefix}:</strong>
        {rest}
      </li>
    );
  }
  return <li className="text-sm leading-relaxed text-muted">{text}</li>;
}

export default function Experience() {
  const items = siteDetails.experience;

  return (
    <Section id="experience" title="Experience">
      <div className="divide-y divide-[var(--border)]">
        {items.map((it, i) => (
          <article key={i} className="py-6 first:pt-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold">
                {it.role} — {it.company}
                {it.location ? <span className="text-muted"> · {it.location}</span> : null}
              </h3>
              <span className="text-sm text-muted whitespace-nowrap">{it.period}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {it.highlights.map((h, j) => (
                <Bullet key={j} text={h} />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
