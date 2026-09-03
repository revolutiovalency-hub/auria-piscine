// Encadré « information générale, ne vaut pas garantie d'obtention » (décision D1, point 11).
export function EncadreInformationGenerale({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside aria-label={title} className="rounded border border-primary/30 bg-surface p-6">
      <h2 className="text-xl font-heading text-primary">{title}</h2>
      <div className="mt-3 text-secondary max-w-content">{children}</div>
    </aside>
  );
}
