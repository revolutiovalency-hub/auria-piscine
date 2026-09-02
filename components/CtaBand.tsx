import Link from "next/link";

export function CtaBand({ title, text, cta }: { title: string; text?: string; cta: { label: string; href: string } }) {
  return (
    <div className="rounded bg-primary text-background p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-heading">{title}</h2>
        {text && <p className="mt-2 opacity-80 max-w-content">{text}</p>}
      </div>
      <Link href={cta.href} className="inline-flex items-center rounded bg-accent px-5 py-3 font-medium text-background shrink-0">{cta.label}</Link>
    </div>
  );
}
