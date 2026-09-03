import Link from "next/link";
import { site } from "@/site.config";
import { services, zonePage, aboutPage, contactPage } from "@/lib/nav";

// Coordonnées identiques sur toutes les pages et mentions légales en clair (geo_rules).
export function Footer() {
  const b = site.business;
  const l = site.legal;
  return (
    <footer className="bg-surface mt-auto">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 text-sm text-secondary">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-heading text-primary">{site.name}</p>
            <address className="not-italic mt-2">
              {b.address.street}<br />
              {b.address.postalCode} {b.address.city}<br />
              <a href={`tel:${b.telephoneE164}`} className="tap underline">{b.telephone}</a><br />
              <a href={`mailto:${b.email}`} className="tap underline">{b.email}</a>
            </address>
            <p className="mt-2">{b.openingHours}</p>
          </div>
          <div>
            <p className="font-heading text-primary">Nos prestations</p>
            <ul className="mt-2 grid gap-1">
              {services.map((s) => (
                <li key={s.href}><Link href={s.href} className="tap hover:text-primary">{s.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-primary">L’entreprise</p>
            <ul className="mt-2 grid gap-1">
              <li><Link href={zonePage.href} className="tap hover:text-primary">{zonePage.label}</Link></li>
              <li><Link href={aboutPage.href} className="tap hover:text-primary">{aboutPage.label}</Link></li>
              <li><Link href={contactPage.href} className="tap hover:text-primary">{contactPage.label}</Link></li>
            </ul>
            <p className="mt-3">Zone d’intervention : {b.areaServed}.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-muted/30 pt-6 flex flex-col sm:flex-row justify-between gap-4">
          <p>
            {l.legalName} {l.legalForm} · SIREN {l.siren} · {l.rcs} · TVA {l.vatNumber} · APE {l.ape}<br />
            {l.insurance}
          </p>
          <p className="sm:text-right">
            © {new Date().getFullYear()} {site.name}<br />
            <Link href="/mentions-legales" className="tap underline">Mentions légales</Link>{" · "}
            <Link href="/confidentialite" className="tap underline">Confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
