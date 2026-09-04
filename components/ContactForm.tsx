"use client";
import { useState } from "react";

// Formulaire de la maquette : Nom, Prénom, Email, Téléphone, Type de projet, Message, mention RGPD,
// bouton d'envoi et message de confirmation conditionnel. La mécanique d'envoi (POST /api/contact,
// honeypot, Resend) est celle du template : seuls les champs de la maquette ont été ajoutés.
const TYPES = [
  "Construction d’une piscine sur mesure",
  "Rénovation d’une piscine existante",
  "Équipements : filtration, chauffage, traitement, sécurité",
  "Entretien ponctuel ou contrat annuel",
  "Étude de faisabilité et démarches d’urbanisme",
  "Autre demande",
];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const res = await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) });
    const json = await res.json();
    if (json.ok) setState("sent");
    else {
      setError(json.error ?? "Erreur");
      setState("error");
    }
  }

  if (state === "sent")
    return (
      <p className="rounded-card border-l-2 border-primary bg-form p-6 text-[15px] text-primary">
        Merci, votre demande est bien enregistrée. Nous vous rappelons sous 24 h ouvrées.
      </p>
    );

  return (
    <form onSubmit={submit} className="flex flex-col gap-5 rounded-card border border-line bg-form p-[clamp(24px,3vw,40px)]">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))" }}>
        <label className="field-label">
          Nom *
          <input name="name" type="text" required autoComplete="family-name" placeholder="Martin" className="field" />
        </label>
        <label className="field-label">
          Prénom *
          <input name="firstname" type="text" required autoComplete="given-name" placeholder="Claire" className="field" />
        </label>
      </div>

      <div className="grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))" }}>
        <label className="field-label">
          Email *
          <input name="email" type="email" required autoComplete="email" placeholder="claire.martin@email.fr" className="field" />
        </label>
        <label className="field-label">
          Téléphone *
          <input name="phone" type="tel" required autoComplete="tel" placeholder="06 12 34 56 78" className="field" />
        </label>
      </div>

      <label className="field-label">
        Type de projet *
        <select name="project" required defaultValue={TYPES[0]} className="field">
          {TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className="field-label">
        Message
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Commune, surface du terrain, dimensions envisagées, budget approximatif, échéance souhaitée…"
          className="field resize-y"
        />
      </label>

      <p className="text-[12.5px] leading-[1.6] text-faint">
        Vos données sont utilisées uniquement pour répondre à votre demande. Voir la{" "}
        <a href="/confidentialite" className="underline">politique de confidentialité</a>.
      </p>

      <button type="submit" disabled={state === "sending"} className="btn btn-primary self-start disabled:opacity-60">
        {state === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      {state === "error" && (
        <p role="alert" className="text-[14.5px]" style={{ color: "var(--color-accent)" }}>{error}</p>
      )}
    </form>
  );
}
