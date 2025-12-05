import { site } from '../lib/site';
import Section from './Section';

export default function Contact() {
	const mailto = `mailto:${site.email}?subject=Let's%20Connect&body=Hi%20Varsha%20Anna%20George,%0D%0A%0D%0AI%27d%20like%20to%20connect%20with%20you.%0D%0A%0D%0ARegards,%0D%0A`;
	const tel = `tel:${site.phone.replaceAll(" ", "").replaceAll("-", "")}`;
	return (
		<Section id="contact" title="Contact">
			<div className="card p-6 md:p-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h3 className="text-lg font-semibold">Let&apos;s connect</h3>
					<p className="mt-1 text-sm text-muted max-w-md sm:whitespace-nowrap">
						Email, call, or connect on LinkedIn to explore opportunities and collaborations.
					</p>
				</div>
				<div className="flex flex-wrap gap-3">
					<a className="btn-primary" href={mailto}>
						Email me
					</a>
					<a className="btn-secondary" href={tel}>
						Call
					</a>
					<a
						className="btn-secondary"
						target="_blank"
						rel="noreferrer"
						href={site.linkedin}
					>
						LinkedIn
					</a>
                    <a
						className="btn-secondary"
						target="_blank"
						rel="noreferrer"
						href={site.gitHub}
					>
						GitHub
					</a>
				</div>
			</div>
		</Section>
	);
}
