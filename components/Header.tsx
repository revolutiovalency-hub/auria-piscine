import Link from "next/link";
import { site } from "@/site.config";
import { services, zonePage, aboutPage, contactPage } from "@/lib/nav";

// Navigation : les 5 pages service (design_spec, section Header). Téléphone et rappel sous 24 h ouvrées
// visibles en haut de chaque page (conversion_rules). Menu replié en accordéon sans JS sous le seuil sm.
export function Header() {
  const b = site.business;
  return (
    <header className="border-b border-muted/20">
      <div className="bg-primary text-background text-sm">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-2 flex flex-wrap items-center gap-x-4 gap-y-1 justify-between">
          <p>
            <a href={`tel:${b.telephoneE164}`} className="tap underline font-medium">{b.telephone}</a>
          </p>
          <p className="opacity-90">Demande de devis détaillé : rappel sous 24 h ouvrées</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="tap font-heading text-lg text-primary">{site.name}</Link>
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex flex-wrap gap-5 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} title={s.label} className="tap text-secondary hover:text-primary">{s.short}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href={contactPage.href} className="hidden md:inline-flex tap rounded bg-accent px-4 py-2 text-sm font-medium text-background">
          Demander un devis détaillé
        </Link>
        <details className="md:hidden relative">
          <summary className="tap cursor-pointer list-none rounded border border-primary px-4 py-2 text-sm text-primary">Menu</summary>
          <nav aria-label="Navigation principale mobile" className="absolute right-0 z-10 mt-2 w-72 rounded border border-muted/30 bg-background p-3 shadow-none">
            <ul className="grid gap-1 text-sm">
              {services.map((s) => (
                <li key={s.href}><Link href={s.href} className="tap w-full px-2 text-secondary">{s.label}</Link></li>
              ))}
              <li><Link href={zonePage.href} className="tap w-full px-2 text-secondary">{zonePage.short}</Link></li>
              <li><Link href={aboutPage.href} className="tap w-full px-2 text-secondary">{aboutPage.short}</Link></li>
              <li>
                <Link href={contactPage.href} className="tap w-full justify-center rounded bg-accent px-4 py-2 font-medium text-background">
                  Demander un devis détaillé
                </Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
