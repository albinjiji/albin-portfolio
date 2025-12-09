import Section from './Section';
import { siteDetails } from '../lib/site';

function SkillGroup({ title, items }: { title: string; items: string[] }) {
	return (
		<div className="card p-5">
			<h3 className="text-sm font-semibold tracking-wide text-[color:var(--accent)]">
				{title}
			</h3>
			<div className="mt-4 flex flex-wrap gap-2">
				{items.map((s) => (
					<span key={s} className="badge">{s}</span>
				))}
			</div>
		</div>
	);
}

export default function Skills() {
	const { skills } = siteDetails;
	return (
		<Section id="skills" title="Skills">
			<div className="grid gap-4 sm:gap-5 md:grid-cols-2">
				<SkillGroup title="Frontend" items={skills.frontend} />
				<SkillGroup title="Backend" items={skills.backend} />
				<SkillGroup title="Core Competencies" items={skills.core} />
				<SkillGroup title="Software & Tools" items={skills.tools} />
			</div>
		</Section>
	);
}
