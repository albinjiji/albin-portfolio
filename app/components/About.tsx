import { siteDetails } from "../lib/site";
import Section from "./Section";

export default function About() {
  const paragraphs = siteDetails.about
    .split(/\n\s*\n/)
    .map((p) => p.trim().replace(/\s+/g, " "));

  return (
    <Section id="about" title="About">
      {paragraphs.map((para, i) => (
        <p key={i} className="text-base leading-relaxed text-muted" style={{ marginTop: i === 0 ? 0 : "1rem" }}>
          {para}
        </p>
      ))}
    </Section>
  );
}
