import { chromium } from "playwright";

const titles = [
  "Un projet de piscine ne commence pas par un bassin.",
  "Cinq métiers, une même exigence.",
  "Des bassins dessinés pour un lieu précis.",
  "Cinq étapes, aucune zone d’ombre.",
  "Une entreprise que l’on peut appeler en août.",
  "Ce qu’en disent nos clients.",
  "Où nous intervenons.",
  "Les réponses que l’on nous demande le plus.",
  "Parlons de votre projet.",
];

const browser = await chromium.launch();
for (const width of [1440, 390]) {
  const page = await browser.newPage();
  await page.setViewportSize({ width, height: 900 });
  await page.goto("http://localhost:3401/", { waitUntil: "networkidle" });
  const found = await page.evaluate((titles) => {
    return titles.map((t) => {
      const el = Array.from(document.querySelectorAll("h1,h2,h3")).find((e) => e.textContent?.trim() === t);
      if (!el) return { t, found: false };
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return { t, found: true, visible: cs.display !== "none" && cs.visibility !== "hidden" && r.width > 0, rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) } };
    });
  }, titles);
  console.log("width", width, JSON.stringify(found, null, 1));
  await page.close();
}
await browser.close();
