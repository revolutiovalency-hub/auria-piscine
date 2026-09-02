import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/site.config";

export const generateMetadata = () => buildMetadata({ title: site.name, description: site.description, path: "/" });

// Page d'exemple. L'agent Dev la remplace à partir de design_spec.json et page_matrix.
export default function Home() {
  return (
    <>
      <Hero
        title="Titre qui répond à l'intention principale du site"
        lead="Deux phrases qui disent ce que vous faites, pour qui, et où."
        cta={{ label: "Demander un devis", href: "/contact" }}
        secondary={{ label: "Voir les services", href: "/services" }}
      />
      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Nos services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Service 1" description="Ce que le client obtient concrètement." href="/services/service-1" />
          <ServiceCard title="Service 2" description="Ce que le client obtient concrètement." href="/services/service-2" />
          <ServiceCard title="Service 3" description="Ce que le client obtient concrètement." href="/services/service-3" />
        </div>
      </Section>
      <Section>
        <Faq items={[{ q: "Question fréquente ?", a: "Réponse directe de 40 à 80 mots." }]} />
      </Section>
      <Section>
        <CtaBand title="Prêt à démarrer ?" text="Réponse sous 24 h." cta={{ label: "Demander un devis", href: "/contact" }} />
      </Section>
    </>
  );
}
