import { siteDetails } from '../lib/site';

export default function Hero() {
	return (
		<section id="home" className="section pt-12 md:pt-16">
			<div className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(260px,1.2fr)] md:items-center">
				<div>
					<div className="flex items-center gap-2">
						<span className="text-accent text-base font-semibold">Hello.</span>
						<span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
					</div>
					<p className="mt-3 text-xl text-muted">I&apos;m {siteDetails.name}</p>
					<h1 className="mt-1 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
						{siteDetails.title}
					</h1>
					<p className="mt-3 text-lg sm:text-xl text-muted max-w-xl">
						{siteDetails.tagline}
					</p>
					<div className="mt-7 flex flex-wrap gap-4">
						<a href={`mailto:${siteDetails.email}`} className="btn-primary">
							Email me
						</a>
						<a
							href={siteDetails.resumeUrl}
							target="_blank"
							rel="noreferrer"
							className="btn-secondary"
						>
							My resume
						</a>
					</div>
				</div>

				<div className="relative flex items-center justify-center">
					<div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_70%)] shadow-glow">
						<div className="absolute inset-4 rounded-full border border-[color:var(--accent)]/40" />
						<div className="absolute -left-7 top-1/2 -translate-y-1/2 w-8 h-8 border border-[color:var(--accent)]/40 rounded-full" />
						<div className="absolute -right-7 top-1/2 -translate-y-1/2 w-8 h-8 border border-[color:var(--accent)]/40 rounded-full" />

						{/* Center SVG */}
						<div className="absolute inset-10 flex items-center justify-center">
							<img
								src="/hero-illustration.svg"
								alt="Developer illustration"
								className="w-full h-full object-contain"
							/>
						</div>
					</div>
</div>

			</div>
		</section>
	);
}
