import Link from "next/link";
import { site } from "@/site.config";

// Bandeau de conversion plein cadre de la maquette : aplat vert texturé, H2, texte, deux CTA,
// téléphone en grand et horaires. Il porte sa propre section, il ne se place pas dans <Section>.
export function CtaBand({
  title,
  text,
  cta,
  secondary,
}: {
  title: string;
  text?: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const b = site.business;
  return (
    <section className="gutter bg-primary texture text-on-dark" style={{ paddingBlock: "clamp(66px,9vw,132px)" }}>
      <div
        className="shell grid items-center gap-[clamp(30px,4vw,70px)]"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}
      >
        <div>
          <h2 className="h2-cta text-on-dark">{title}</h2>
          {text && <p className="mt-[18px] max-w-[50ch] text-[17px] leading-[1.7] text-on-dark-86">{text}</p>}
        </div>
        <div className="flex flex-col items-start gap-[18px]">
          <div className="flex flex-wrap gap-3.5">
            <Link href={cta.href} className="btn btn-light">{cta.label}</Link>
            {secondary && <Link href={secondary.href} className="btn btn-outline-light">{secondary.label}</Link>}
          </div>
          <a href={`tel:${b.telephoneE164}`} className="font-heading text-[30px] text-on-dark hover:text-accent">{b.telephone}</a>
          <p className="text-[13.5px] text-on-dark-72">{b.openingHours}. Rappel sous 24 h ouvrées.</p>
        </div>
      </div>
    </section>
  );
}

// Carte promotionnelle qui remplace une carte projet en fin de grille (maquette, page sur mesure).
export function CtaCard({ title, cta }: { title: string; cta: { label: string; href: string } }) {
  return (
    <article className="flex min-h-[220px] flex-col justify-between gap-[18px] rounded-card border border-line bg-surface p-[26px]">
      <h3 className="max-w-[16ch] font-heading text-[26px] font-medium leading-tight">{title}</h3>
      <Link href={cta.href} className="btn btn-sm btn-primary self-start">{cta.label}</Link>
    </article>
  );
}
