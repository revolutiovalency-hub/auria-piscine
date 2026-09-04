export type Option = { titre: string; texte: string };

// Liste de personnalisations de la maquette : titre court souligné puis texte, en grille auto-fit.
export function OptionList({ options }: { options: Option[] }) {
  return (
    <div className="grid gap-[26px]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(220px,100%),1fr))" }}>
      {options.map((o) => (
        <div key={o.titre}>
          <h3 className="mb-2 border-b border-line-alt pb-2 text-[16px] font-semibold">{o.titre}</h3>
          <p className="text-[14.5px] leading-[1.65] text-muted">{o.texte}</p>
        </div>
      ))}
    </div>
  );
}
