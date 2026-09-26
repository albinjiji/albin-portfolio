type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
};

export default function Section({ id, title, subtitle, children, wide, className }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${wide ? "container-wide py-16 md:py-24" : "section"} relative ${className ?? ""}`}
    >
      <header className="mb-8">
        <h2 id={`${id}-heading`} className="text-[22px] md:text-2xl font-semibold">
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-muted">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
