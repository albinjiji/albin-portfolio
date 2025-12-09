import { contactValues } from '../constants/constants';
import { siteDetails } from '../lib/site';
import Section from './Section';

export default function Contact() {
	const mailto = `mailto:${siteDetails.email}?subject=Let's%20Connect&body=Hi%20Albin%20Jiji,%0D%0A%0D%0AI%27d%20like%20to%20connect%20with%20you.%0D%0A%0D%0ARegards,%0D%0A`;
	const tel = `tel:${siteDetails.phone.replaceAll(" ", "").replaceAll("-", "")}`;
	return (
		<Section id="contact" title="Contact">
			<div className="card p-6 md:p-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h3 className="text-lg font-semibold">Let&apos;s connect</h3>
					<p className="mt-1 text-sm text-muted max-w-md sm:whitespace-nowrap">
						{contactValues.contactMe}
					</p>
				</div>
				<div className="flex flex-wrap gap-3">
					<a className="btn-secondary" href={mailto}>
						{contactValues.email}
					</a>
					<a className="btn-secondary" href={tel}>
						{contactValues.call}
					</a>
					<a
						className="btn-secondary"
						target="_blank"
						rel="noreferrer"
						href={siteDetails.linkedin}
					>
						{contactValues.linkedIn}
					</a>
                    <a
						className="btn-secondary"
						target="_blank"
						rel="noreferrer"
						href={siteDetails.gitHub}
					>
						{contactValues.gitHub}
					</a>
				</div>
			</div>
		</Section>
	);
}
