import Link from "next/link";
import { site } from "@/site.config";

type Cta = { label: string; href: string };

// Le seul composant qui porte le H1 d'une page. Le lead porte la réponse directe de 40 à 60 mots (aeo_rules).
// Trois variantes relevées dans la maquette :
//  - "home"  : aplat sombre texturé plein cadre, min-height clamp(520px,80svh,760px), surtitre, 2 CTA, ligne de confiance
//  - "page"  : même aplat, min-height clamp(400px,58svh,560px), fil d'Ariane
//  - "plain" : bandeau clair sans aplat sombre (pages /contact et listing de la maquette)
export function Hero({
  variant = "page",
  eyebrow,
  breadcrumb,
  title,
  lead,
  cta,
  secondary,
  trust,
}: {
  variant?: "home" | "page" | "plain";
  eyebrow?: string;
  breadcrumb?: string;
  title: string;
  lead: string;
  cta?: Cta;
  secondary?: Cta;
  trust?: string;
}) {
  const b = site.business;

  if (variant === "plain") {
    return (
      <section className="gutter border-b border-line pb-[clamp(24px,3vw,40px)] pt-[clamp(48px,7vw,96px)]">
        <div className="shell">
          {breadcrumb && (
            <p className="breadcrumb mb-[18px] text-faint">
              <Link href="/" className="text-faint">Accueil</Link> / {breadcrumb}
            </p>
          )}
          <h1 className="h1-plain max-w-[18ch]">{title}</h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-[1.7] text-muted">{lead}</p>
          {(cta || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3.5">
              {cta && <Link href={cta.href} className="btn btn-primary">{cta.label}</Link>}
              {secondary && <Link href={secondary.href} className="btn btn-sm link-underline">{secondary.label}</Link>}
            </div>
          )}
        </div>
      </section>
    );
  }

  const isHome = variant === "home";
  return (
    <section
      className="relative flex items-end overflow-hidden bg-primary-dark texture"
      style={{ minHeight: isHome ? "clamp(520px,80svh,760px)" : "clamp(400px,58svh,560px)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: isHome
            ? "linear-gradient(to top,rgba(10,32,34,0.72),rgba(10,32,34,0.18) 55%,rgba(10,32,34,0.32))"
            : "linear-gradient(to top,rgba(9,30,32,0.78),rgba(9,30,32,0.2))",
        }}
      />
      <div className="shell gutter relative pb-[clamp(44px,7vw,92px)]">
        {eyebrow && <p className="eyebrow-dark mb-[22px]">{eyebrow}</p>}
        {breadcrumb && (
          <p className="breadcrumb mb-[18px] text-on-dark-72">
            <Link href="/" className="text-on-dark-72 hover:text-accent">Accueil</Link> / {breadcrumb}
          </p>
        )}
        <h1 className={`${isHome ? "h1-home max-w-[15ch]" : "h1-page max-w-[17ch]"} text-on-dark`}>{title}</h1>
        <p className="mt-6 max-w-[60ch] text-[clamp(16px,1.5vw,19px)] leading-[1.65] text-on-dark-86">{lead}</p>
        {(cta || secondary) && (
          <div className="mt-[30px] flex flex-wrap gap-3.5">
            {cta && <Link href={cta.href} className="btn btn-light">{cta.label}</Link>}
            {secondary && <Link href={secondary.href} className="btn btn-outline-light">{secondary.label}</Link>}
          </div>
        )}
        {/* Ligne de confiance de la maquette. Sur les pages internes elle porte le téléphone et
            l'engagement de rappel sous 24 h ouvrées, visibles dès le premier écran (conversion_rules). */}
        <p className="mt-9 text-[13px] tracking-[0.06em] text-on-dark-72">
          {trust ?? (
            <>
              <a href={`tel:${b.telephoneE164}`} className="text-on-dark hover:text-accent">{b.telephone}</a>
              {" · Rappel sous 24 h ouvrées · Intervention autour de Montpellier"}
            </>
          )}
        </p>
      </div>
    </section>
  );
}
