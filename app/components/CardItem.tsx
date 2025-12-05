type Props = {
	title: string;
	subtitle?: string;
	metaData?: string;
	extra?: string;
	points?: string[];
    isProject?: boolean;
    links?: { label: string; url: string }[];
};

export default function CardItem({
	title,
	subtitle,
	metaData,
	extra,
	points = [],
    isProject = false,
    links = [],
}: Props) {
	return (
		<li className="relative pl-8">
			{!isProject && <span className="absolute left-1 top-3 h-3 w-3 rounded-full bg-[color:var(--accent)] shadow-glow" />}
			<div className="card p-5">
				<h3 className="text-base md:text-lg font-semibold">{title}</h3>
				<p className="mt-1 text-xs md:text-sm text-muted">
					{subtitle}{extra ? ` — ${extra}` : ''}
				</p>
				<p className="mt-1 text-[10px] md:text-xs text-muted uppercase tracking-wide">
					{metaData}
				</p>
				{points.length ? (
					<ul className="mt-3 list-disc space-y-1.5 pl-4 text-xs md:text-sm text-muted">
						{points.map((h, i) => {
                            // If the highlight begins with "Technologies Used:"
                            if (h.startsWith('Technologies Used:')) {
                                const [prefix, rest] = h.split(':');
                                return <li key={i}>
                                    <strong>{prefix}:</strong>{rest}
                                </li>;
                            }

                            return <li key={i}>{h}</li>
                        }
                        )}
					</ul>
				) : null}
                {links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                        {link.label}: {' '}
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-(--accent) hover:underline"
                                            >{link.url}</a>
                                    </li>
                            ))}
                        </ul>
                    </div>
                )}
			</div>
		</li>
	);
}
