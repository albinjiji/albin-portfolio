import { siteDetails } from '../lib/site';
import Section from './Section';

export default function Education() {
	return (
		<Section id="education" title="Education">
			<div className="grid gap-4 sm:grid-cols-2">
				{siteDetails.education.map((ed, i) => (
					<div key={i} className="card p-5">
						<h3 className="text-base font-semibold">{ed.degree}</h3>
						<p className="mt-1 text-sm text-muted">{ed.university}</p>
						<p className="mt-1 text-xs text-muted uppercase tracking-wide">
							{ed.period}
						</p>
					</div>
				))}
			</div>
		</Section>
	);
}
