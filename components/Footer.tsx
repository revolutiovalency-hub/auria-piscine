import { site } from "@/site.config";

export function Footer() {
  const b = site.business;
  return (
    <footer className="bg-surface mt-auto">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 text-sm text-secondary flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <p className="font-heading text-primary">{site.name}</p>
          {b.address.city && <p>{b.address.street}, {b.address.postalCode} {b.address.city}</p>}
          {b.telephone && <p><a href={`tel:${b.telephone}`}>{b.telephone}</a></p>}
        </div>
        <div className="sm:text-right">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p className="mt-1"><a href="/mentions-legales" className="underline">Mentions légales</a> · <a href="/confidentialite" className="underline">Confidentialité</a></p>
        </div>
      </div>
    </footer>
  );
}
