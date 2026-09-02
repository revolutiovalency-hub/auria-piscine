import { NextResponse } from "next/server";
import { site } from "@/site.config";

// Envoi via Resend (RESEND_API_KEY et CONTACT_TO dans les variables Vercel du site).
export async function POST(req: Request) {
  const data = await req.formData();
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  if (data.get("website")) return NextResponse.json({ ok: true }); // honeypot anti-spam
  if (!name || !email || !message) return NextResponse.json({ ok: false, error: "Nom, email et message sont requis." }, { status: 400 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `${site.name} <contact@${new URL(site.url).hostname}>`,
      to: [process.env.CONTACT_TO ?? site.business.email],
      reply_to: email,
      subject: `Demande depuis ${site.name} : ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\n\n${message}`,
    }),
  });
  if (!res.ok) return NextResponse.json({ ok: false, error: "L'envoi a échoué, réessayez ou appelez-nous." }, { status: 500 });
  return NextResponse.json({ ok: true });
}
