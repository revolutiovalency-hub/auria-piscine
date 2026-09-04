import { chromium } from "playwright";

const pages = [
  "/",
  "/construction-piscine-beton-montpellier",
  "/renovation-piscine-montpellier",
  "/equipements-piscine-montpellier",
  "/entretien-piscine-montpellier",
  "/etude-faisabilite-demarches-urbanisme",
  "/zone-intervention-montpellier",
  "/a-propos",
  "/contact",
];

const base = "http://localhost:3401";

const browser = await chromium.launch();
for (const path of pages) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto(base + path, { waitUntil: "networkidle" });

  const result = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const viewportWidth = document.documentElement.clientWidth;
    const overflowing = [];
    if (docWidth > viewportWidth) {
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > viewportWidth + 1 || r.left < -1) {
          overflowing.push({
            tag: el.tagName,
            cls: el.className && el.className.toString().slice(0, 80),
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
          });
        }
      });
    }
    return { docWidth, viewportWidth, overflowing: overflowing.slice(0, 15) };
  });
  console.log(path, JSON.stringify(result));
  await page.close();
}
await browser.close();
