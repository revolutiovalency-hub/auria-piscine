import Link from "next/link";

// Le seul composant qui porte le H1 d'une page.
export function Hero({ title, lead, cta, secondary }: { title: string; lead: string; cta: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 sm:px-8" style={{ paddingBlock: "var(--space-section)" }}>
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary">{title}</h1>
        <p className="mt-6 text-lg sm:text-xl text-secondary max-w-content">{lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={cta.href} className="inline-flex items-center rounded bg-accent px-5 py-3 text-background font-medium">{cta.label}</Link>
          {secondary && <Link href={secondary.href} className="inline-flex items-center rounded border border-primary px-5 py-3 text-primary">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  );
}
