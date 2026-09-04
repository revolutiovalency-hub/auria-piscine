import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 360, height: 800 });
await page.goto("http://localhost:3401/", { waitUntil: "networkidle" });

const result = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const out = [];
  document.querySelectorAll("body *").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 || r.left < -1) {
      const cs = getComputedStyle(el);
      out.push({
        tag: el.tagName,
        cls: el.className && el.className.toString().slice(0, 100),
        rect: { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) },
        display: cs.display,
        position: cs.position,
        text: el.textContent?.slice(0, 40),
      });
    }
  });
  return out;
});
console.log(JSON.stringify(result, null, 2));
await browser.close();
