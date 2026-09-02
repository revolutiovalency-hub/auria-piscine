"use client";
import { useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const res = await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) });
    const json = await res.json();
    if (json.ok) setState("sent"); else { setError(json.error ?? "Erreur"); setState("error"); }
  }
  if (state === "sent") return <p className="rounded bg-surface p-6 text-primary">Message envoyé. Nous vous répondons sous 24 h ouvrées.</p>;
  return (
    <form onSubmit={submit} className="grid gap-4 max-w-xl">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="grid gap-1 text-sm">Nom<input name="name" required className="rounded border border-muted/40 px-3 py-2" /></label>
      <label className="grid gap-1 text-sm">Email<input name="email" type="email" required className="rounded border border-muted/40 px-3 py-2" /></label>
      <label className="grid gap-1 text-sm">Téléphone<input name="phone" type="tel" className="rounded border border-muted/40 px-3 py-2" /></label>
      <label className="grid gap-1 text-sm">Votre besoin<textarea name="message" rows={5} required className="rounded border border-muted/40 px-3 py-2" /></label>
      <p className="text-xs text-muted">Vos données servent uniquement à répondre à votre demande. Voir la <a href="/confidentialite" className="underline">politique de confidentialité</a>.</p>
      <button disabled={state === "sending"} className="rounded bg-accent px-5 py-3 text-background font-medium disabled:opacity-60">{state === "sending" ? "Envoi..." : "Envoyer la demande"}</button>
      {state === "error" && <p className="text-sm" style={{ color: "#a32d2d" }}>{error}</p>}
    </form>
  );
}
