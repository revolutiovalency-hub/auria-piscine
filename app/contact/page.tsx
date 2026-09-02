import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/site.config";

export const generateMetadata = () => buildMetadata({ title: `Contact ${site.name}`, description: `Demande de devis ou question : ${site.name} vous répond sous 24 h.`, path: "/contact" });

export default function Contact() {
  const b = site.business;
  return (
    <Section>
      <h1 className="text-4xl font-heading text-primary">Demander un devis</h1>
      <p className="mt-4 text-secondary max-w-content">Décrivez votre projet, nous vous rappelons sous 24 h ouvrées.</p>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <div className="text-secondary">
          {b.telephone && <p><a href={`tel:${b.telephone}`} className="text-primary underline">{b.telephone}</a></p>}
          {b.email && <p className="mt-2"><a href={`mailto:${b.email}`} className="underline">{b.email}</a></p>}
          {b.address.city && <p className="mt-2">{b.address.street}<br />{b.address.postalCode} {b.address.city}</p>}
          {b.areaServed && <p className="mt-4">Zone d'intervention : {b.areaServed}</p>}
        </div>
      </div>
    </Section>
  );
}
