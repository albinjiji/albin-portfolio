import { siteDetails } from '../lib/site';
import Section from './Section';

export default function About() {
	return (
		<Section id="about" title="About me">
			<div className="card p-6 md:p-7 leading-relaxed text-sm sm:text-base text-muted whitespace-pre-line">
			{siteDetails.about}
			</div>
		</Section>
	);
}
