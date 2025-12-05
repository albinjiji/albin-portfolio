type Props = {
	id: string;
	title: string;
	subtitle?: string;
	children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
	return (
		<section id={id} className="section">
			<header className="mb-8">
				<h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
				{subtitle ? (
					<p className="mt-2 text-muted max-w-2xl">{subtitle}</p>
				) : null}
			</header>
			{children}
		</section>
	);
}
