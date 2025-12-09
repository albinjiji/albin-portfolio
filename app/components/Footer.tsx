import { siteDetails } from '../lib/site';

export default function Footer() {
	return (
		<footer className="mt-8 border-t border-border/60 bg-[color:var(--bg-soft)]">
			<div className="container-page py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-[10px] sm:text-xs text-muted">
					{new Date().getFullYear()} {siteDetails.name}. All rights reserved.
				</p>
				<div className="flex gap-4 text-[10px] sm:text-xs text-muted">
					<a
						className="hover:text-[color:var(--accent)] transition"
						href={`mailto:${siteDetails.email}`}
					>
						Email
					</a>
					<a
						className="hover:text-[color:var(--accent)] transition"
						href={`tel:${siteDetails.phone.replaceAll(' ', '').replaceAll('-', '')}`}
					>
						Phone
					</a>
					<a
						className="hover:text-[color:var(--accent)] transition"
						target="_blank"
						rel="noreferrer"
						href={siteDetails.linkedin}
					>
						LinkedIn
					</a>
                    <a
						className="hover:text-[color:var(--accent)] transition"
						target="_blank"
						rel="noreferrer"
						href={siteDetails.gitHub}
					>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
}
