import type { ReactNode } from "react";

// Conteneur de section : gère le rythme vertical et la largeur. Tout bloc de page est une Section.
export function Section({ children, id, tone = "default", className = "" }: { children: ReactNode; id?: string; tone?: "default" | "surface" | "primary"; className?: string }) {
  const tones = { default: "", surface: "bg-surface", primary: "bg-primary text-background" };
  return (
    <section id={id} className={`${tones[tone]} ${className}`} style={{ paddingBlock: "var(--space-section)" }}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
