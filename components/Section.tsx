import type { ReactNode } from "react";

// Conteneur de section : rythme vertical, gouttière et largeur de contenu de la maquette.
// Les aplats sombres (primary, dark) portent la texture rayée relevée dans le HTML.
export function Section({
  children,
  id,
  tone = "default",
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "default" | "surface" | "dark" | "primary";
  size?: "lg" | "sm";
  className?: string;
}) {
  const tones = {
    default: "",
    surface: "bg-surface",
    dark: "bg-primary-dark text-on-dark",
    primary: "bg-primary text-on-dark texture",
  };
  const pad = size === "lg" ? "var(--space-section)" : "var(--space-section-sm)";
  return (
    <section id={id} className={`gutter ${tones[tone]} ${className}`} style={{ paddingBlock: pad }}>
      <div className="shell">{children}</div>
    </section>
  );
}

// En-tête de section : surtitre, H2 et, à droite, un texte ou un lien (maquette, sections
// « Nos expertises », « Réalisations », « Conseils »).
export function SectionHead({
  eyebrow,
  title,
  intro,
  aside,
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  aside?: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="mb-[clamp(30px,4vw,58px)] flex flex-wrap items-end justify-between gap-6">
      <div>
        {eyebrow && <p className={`${onDark ? "eyebrow-on-dark" : "eyebrow"} mb-[18px]`}>{eyebrow}</p>}
        <h2 className={`h2-lg max-w-[20ch] ${onDark ? "text-on-dark" : ""}`}>{title}</h2>
        {intro && <p className={`mt-4 max-w-[60ch] text-[16.5px] ${onDark ? "text-on-dark-78" : "text-muted"}`}>{intro}</p>}
      </div>
      {aside}
    </div>
  );
}
