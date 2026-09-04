import Link from "next/link";
import { site } from "@/site.config";
import { navItems, services, zonePage, contactPage } from "@/lib/nav";
import { communesCourantes } from "@/lib/site-content";

// Pied de page de la maquette : 5 colonnes sur fond #0F2B2D, empilées sur mobile par auto-fit.
// Coordonnées identiques sur toutes les pages et mentions légales en clair (geo_rules).
export function Footer() {
  const b = site.business;
  const l = site.legal;
  return (
    <footer className="gutter mt-auto bg-primary-darker pb-[34px] pt-[clamp(52px,6vw,90px)] text-on-dark-78">
      <div className="shell">
        <div
          className="grid gap-[clamp(28px,3vw,48px)] border-b border-on-dark pb-[clamp(34px,4vw,56px)]"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(190px,100%),1fr))" }}
        >
          <div>
            <div className="mb-[18px] flex flex-col leading-none">
              <span className="font-heading text-[26px] font-semibold tracking-[0.12em] text-on-dark">AUREA</span>
              <span className="mt-[5px] text-[9.5px] tracking-[0.42em] text-on-dark-72">PISCINES</span>
            </div>
            <p className="max-w-[32ch] text-[14.5px] leading-[1.7]">
              Construction, rénovation, équipements et entretien de piscines en béton armé projeté dans l’Hérault depuis {b.foundingYear}.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-body text-[11.5px] font-medium uppercase leading-[1.7] tracking-[0.22em] text-on-dark">Navigation</h2>
            <div className="flex flex-col">
              {navItems.map((n) => (
                <Link key={n.href} href={n.href} className="tap text-[14.5px] text-on-dark-78 hover:text-accent">{n.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-body text-[11.5px] font-medium uppercase leading-[1.7] tracking-[0.22em] text-on-dark">Prestations</h2>
            <div className="flex flex-col">
              {services.map((s) => (
                <Link key={s.href} href={s.href} title={s.label} className="tap text-[14.5px] text-on-dark-78 hover:text-accent">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-body text-[11.5px] font-medium uppercase leading-[1.7] tracking-[0.22em] text-on-dark">Zones d’intervention</h2>
            <p className="text-[14.5px] leading-[1.9]">{communesCourantes.join(" · ")}</p>
            <p className="mt-3 text-[14.5px] leading-[1.9]">
              <Link href={zonePage.href} className="text-on-dark-78 underline hover:text-accent">{zonePage.label}</Link>
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-body text-[11.5px] font-medium uppercase leading-[1.7] tracking-[0.22em] text-on-dark">Contact</h2>
            <address className="not-italic">
              <p className="mb-2.5 text-[14.5px] leading-[1.7]">
                {b.address.street}
                <br />
                {b.address.postalCode} {b.address.city}
              </p>
              <a href={`tel:${b.telephoneE164}`} className="tap mb-1.5 text-[14.5px] text-on-dark hover:text-accent">{b.telephone}</a>
              <a href={`mailto:${b.email}`} className="tap mb-3.5 text-[14.5px] text-on-dark-78 hover:text-accent">{b.email}</a>
            </address>
            <p className="text-[13.5px] leading-[1.7] text-on-dark-72">{b.openingHours}</p>
            <p className="mt-2 text-[13.5px] leading-[1.7] text-on-dark-72">
              <Link href={contactPage.href} className="text-on-dark-78 underline hover:text-accent">{contactPage.label}</Link>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-[22px] text-[12.5px] text-on-dark-72">
          <span>
            © {new Date().getFullYear()} {site.name} — {l.legalForm} · SIREN {l.siren} · {l.rcs} · TVA {l.vatNumber} · APE {l.ape} · {l.insurance}
          </span>
          <span className="flex flex-wrap gap-[18px]">
            <Link href="/mentions-legales" className="tap text-on-dark-55 hover:text-accent">Mentions légales</Link>
            <Link href="/confidentialite" className="tap text-on-dark-55 hover:text-accent">Politique de confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
