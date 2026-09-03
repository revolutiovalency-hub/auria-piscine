import { OptionList, type Option } from "./OptionList";

// « Matériel que nous installons et critères de choix » : formulation factuelle, sans logo,
// sans le mot partenaire ni agréé (décision D1, point 13).
export function MaterielCriteres({
  title,
  intro,
  marques,
  criteres,
}: {
  title: string;
  intro: string;
  marques: string[];
  criteres: Option[];
}) {
  return (
    <div className="grid gap-[clamp(30px,4vw,72px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(290px,100%),1fr))" }}>
      <div>
        <h2 className="h2-md max-w-[18ch]">{title}</h2>
        <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.7] text-muted">{intro}</p>
        <ul className="mt-6 flex list-none flex-wrap gap-2.5 p-0">
          {marques.map((m) => (
            <li key={m} className="pill">{m}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-6 h3-sans">Nos critères de choix</h3>
        <OptionList options={criteres} />
      </div>
    </div>
  );
}
