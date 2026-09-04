import type { ReactNode } from "react";

// Section éditoriale deux colonnes de la maquette : surtitre + H2 à gauche, texte à droite.
// Variante avec badges pilules en bas (accueil) ou fiche technique à droite (page construction).
export function IntroSplit({
  eyebrow,
  title,
  children,
  aside,
  badges,
  gap = "clamp(32px,5vw,88px)",
  min = "320px",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  aside?: ReactNode;
  badges?: string[];
  gap?: string;
  min?: string;
}) {
  return (
    <div className="grid items-start" style={{ gridTemplateColumns: `repeat(auto-fit,minmax(min(${min},100%),1fr))`, gap }}>
      <div>
        {eyebrow && <p className="eyebrow mb-[22px]">{eyebrow}</p>}
        <h2 className="h2-lg max-w-[18ch]">{title}</h2>
      </div>
      <div className="flex max-w-[62ch] flex-col gap-[22px]">
        {children}
        {badges && (
          <ul className="mt-1.5 flex list-none flex-wrap gap-2.5 p-0">
            {badges.map((b) => (
              <li key={b} className="pill">{b}</li>
            ))}
          </ul>
        )}
        {aside}
      </div>
    </div>
  );
}
