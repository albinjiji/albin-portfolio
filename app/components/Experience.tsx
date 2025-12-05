import { site } from '../lib/site';
import Section from './Section';
import CardItem from './CardItem';

export default function Experience() {
	return (
		<Section id="experience" title="Experience">
			<div className="relative">
				<div className="absolute left-3 top-0 h-full w-px bg-[color:var(--border)]" />
				<ol className="space-y-5 pl-2">
					{site.experience.map((e, idx) => (
						<CardItem
							key={idx}
							title={e.role}
							subtitle={e.company}
							metaData={e.period}
							extra={e.location}
							points={e.highlights}
						/>
					))}
				</ol>
			</div>
		</Section>
	);
}
