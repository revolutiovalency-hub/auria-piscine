import Link from "next/link";
import { MediaZone } from "./MediaZone";

// Carte de prestation de la maquette : zone média 4/3, titre serif, texte, lien « Découvrir ».
export function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col overflow-hidden rounded-card border border-line bg-background text-text hover:border-primary"
    >
      <MediaZone ratio="4/3" />
      <div className="flex flex-1 flex-col gap-3 px-6 pb-7 pt-[26px]">
        <h3 className="font-heading text-[25px] font-semibold leading-tight">{title}</h3>
        <p className="flex-1 text-[15px] leading-[1.65] text-muted">{description}</p>
        <span className="link-underline mt-1.5 self-start text-[13.5px] tracking-[0.04em]">Découvrir</span>
      </div>
    </Link>
  );
}
