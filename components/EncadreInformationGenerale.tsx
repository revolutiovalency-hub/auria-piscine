// Encadré « information générale, ne vaut pas garantie d'obtention » (décision D1, point 11).
export function EncadreInformationGenerale({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside aria-label={title} className="rounded-card border-l-2 border-primary bg-surface p-6 sm:p-8">
      <h2 className="h3-sans text-primary">{title}</h2>
      <div className="prose mt-3">{children}</div>
    </aside>
  );
}
