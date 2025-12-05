import Section from './Section';
import { site } from '../lib/site';

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
	const { skills } = site;
	return (
		<Section id="skills" title="Skills">
			<div className="grid gap-4 sm:gap-5 md:grid-cols-2">
				<SkillGroup title="Frontend" items={skills.frontend} />
				<SkillGroup title="Backend" items={skills.backend} />
				<SkillGroup title="Protocols" items={skills.core} />
				<SkillGroup title="Core Competencies" items={skills.tools} />
			</div>
		</Section>
	);
}
