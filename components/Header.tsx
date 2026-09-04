import Link from "next/link";
import { site } from "@/site.config";
import { navItems, contactPage } from "@/lib/nav";

// Header sticky de la maquette : logo AUREA / PISCINES, navigation horizontale au-dessus de 1080px,
// téléphone puis CTA devis. Sous ce seuil, la navigation est repliée derrière un bouton 44x44px.
// La bascule du panneau mobile est un details/summary : même rendu conditionnel instantané que la
// maquette (aucune durée ni courbe déclarée dans le CSS fourni) et navigation présente sans JS.
export function Header() {
  const b = site.business;
  return (
    <header className="sticky top-0 z-50 border-b border-line" style={{ background: "rgba(251,248,244,0.93)", backdropFilter: "blur(10px)" }}>
      <div className="shell gutter flex items-center justify-between gap-6" style={{ height: "clamp(66px,8vw,86px)" }}>
        <Link href="/" className="flex flex-col leading-none text-text" aria-label={`${site.name}, accueil`}>
          <span className="font-heading text-[26px] font-semibold tracking-[0.12em]">AUREA</span>
          <span className="mt-[5px] text-[9.5px] tracking-[0.42em] text-muted-light">PISCINES</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden min-[1080px]:flex items-center gap-[clamp(14px,1.9vw,28px)]">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="tap whitespace-nowrap py-1.5 text-sm text-text hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a href={`tel:${b.telephoneE164}`} className="hidden min-h-11 items-center whitespace-nowrap text-sm tracking-[0.02em] text-text min-[1080px]:inline-flex">
            {b.telephone}
          </a>
          <Link href={contactPage.href} className="btn btn-sm btn-primary hidden whitespace-nowrap min-[1080px]:inline-flex">Demander un devis</Link>

          <details className="min-[1080px]:hidden">
            <summary
              aria-label="Ouvrir le menu"
              className="flex h-11 w-11 cursor-pointer list-none flex-col items-center justify-center gap-[5px] rounded border border-line-alt [&::-webkit-details-marker]:hidden"
            >
              <span aria-hidden="true" className="block h-[1.4px] w-[18px] bg-text" />
              <span aria-hidden="true" className="block h-[1.4px] w-[18px] bg-text" />
            </summary>
            <nav
              aria-label="Navigation mobile"
              className="absolute left-0 right-0 top-full flex flex-col border-t border-line bg-background px-[var(--gutter)] pb-[26px] pt-2.5"
            >
              {navItems.map((n) => (
                <Link key={n.href} href={n.href} className="tap border-b border-row py-3.5 text-[17px] text-text">
                  {n.label}
                </Link>
              ))}
              <a href={`tel:${b.telephoneE164}`} className="tap pt-[18px] text-[15px] text-primary">
                {b.telephone} · {b.openingHours}
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
