"use client";
import { useEffect, useState } from "react";
import { site } from "@/site.config";

// Affiché uniquement si site.legal.analytics est true. Le script de mesure ne doit être chargé qu'après consentement.
export function CookieBanner({ onAccept }: { onAccept?: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => { if (site.legal.analytics && !document.cookie.includes("consent=")) setShow(true); }, []);
  if (!show) return null;
  const set = (v: string) => { document.cookie = `consent=${v}; max-age=15552000; path=/; samesite=lax`; setShow(false); if (v === "yes") onAccept?.(); };
  return (
    <div role="dialog" aria-label="Cookies" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-md rounded bg-primary text-background p-5 shadow-none">
      <p className="text-sm">Nous mesurons l'audience de ce site pour l'améliorer. Acceptez-vous les cookies de mesure ?</p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => set("yes")} className="rounded bg-accent px-4 py-2 text-sm">Accepter</button>
        <button onClick={() => set("no")} className="rounded border border-background/40 px-4 py-2 text-sm">Refuser</button>
      </div>
    </div>
  );
}
