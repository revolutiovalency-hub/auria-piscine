import type { Config } from "tailwindcss";
// Les valeurs viennent des variables CSS de app/globals.css. On ne met pas de couleur ici.
export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
      },
      fontFamily: { heading: "var(--font-heading)", body: "var(--font-body)" },
      borderRadius: { DEFAULT: "var(--radius)" },
      maxWidth: { content: "72ch" },
    },
  },
  plugins: [],
} satisfies Config;
