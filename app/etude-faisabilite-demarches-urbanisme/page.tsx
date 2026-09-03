import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Faq } from "@/components/Faq";
import { EncadreInformationGenerale } from "@/components/EncadreInformationGenerale";
import { EtapesSuivantes } from "@/components/EtapesSuivantes";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { relatedLinks, zonePage } from "@/lib/nav";

const PATH = "/etude-faisabilite-demarches-urbanisme";
const NOM = "Étude de faisabilité et démarches d’urbanisme pour une piscine";

export const generateMetadata = () =>
  buildMetadata({
    title: "Étude de faisabilité et urbanisme piscine à Montpellier",
    description:
      "Faisabilité, plans d’implantation, étude de sol et dossier d’urbanisme : Aurea Piscines prépare votre piscine à Montpellier. Demandez une étude chiffrée.",
    path: PATH,
  });

const faq = [
  {
    q: "Combien de temps durent les démarches d’urbanisme pour une piscine ?",
    a: "Le délai d’instruction de droit commun est d’un mois pour une déclaration préalable et de deux mois pour un permis de construire portant sur une maison individuelle et ses annexes (article R.423-23 du code de l’urbanisme). Ce délai peut être majoré, notamment aux abords d’un monument historique ou en site protégé, et il ne court qu’à partir d’un dossier complet.",
  },
  {
    q: "Que se passe-t-il si la mairie refuse le dossier ?",
    a: "Une décision de refus doit être motivée. Vous pouvez demander à la commune de la réexaminer par un recours gracieux dans les deux mois, ou saisir le tribunal administratif dans le même délai (article R.421-1 du code de justice administrative). Souvent, le motif porte sur un point précis, implantation, recul ou emprise, et un projet corrigé peut être redéposé.",
  },
  {
    q: "Que change un terrain situé en zone contrainte ?",
    a: "Le règlement du plan local d’urbanisme fixe les règles d’implantation, de recul et d’emprise applicables à la parcelle (articles L.151-8 et suivants du code de l’urbanisme). Aux abords d’un monument historique ou en site patrimonial remarquable, l’avis de l’architecte des Bâtiments de France est requis et le délai d’instruction est allongé. Ces règles se vérifient parcelle par parcelle, avant tout dessin.",
  },
];

export default function EtudeFaisabilite() {
  return (
    <>
      <Hero
        breadcrumb="Étude et démarches d’urbanisme"
        title="Étude de faisabilité et démarches d’urbanisme pour votre piscine"
        lead="Avant de construire, Aurea Piscines vérifie que le projet tient sur votre terrain : accès, sol, exposition, réseaux et règles d’urbanisme de la commune. Nous établissons les plans d’implantation, faisons réaliser l’étude de sol quand elle est nécessaire, puis montons et déposons le dossier d’urbanisme."
        cta={{ label: "Demander une étude", href: "/contact" }}
      />

      <Section tone="surface">
        <h2 className="h2-md">Ce que la faisabilité vérifie</h2>
        <div className="prose mt-4">
          <ul>
            <li>
              <strong>L’accès</strong> : largeur de passage, portail, pente, sol portant, présence d’un mur mitoyen. C’est le
              point qui décide du matériel de terrassement, donc du chantier.
            </li>
            <li>
              <strong>Le sol</strong> : nature du terrain, remblai, roche, argile, nappe. Il commande le dimensionnement de la
              structure et le mode de terrassement.
            </li>
            <li>
              <strong>L’exposition</strong> : ensoleillement, vent dominant, arbres à proximité, ombres portées par le bâti.
            </li>
            <li>
              <strong>Les réseaux</strong> : eau, électricité, évacuation, assainissement et réseaux enterrés existants, dont la
              position conditionne l’implantation du bassin et du local technique.
            </li>
            <li>
              <strong>Les règles locales</strong> : règlement du plan local d’urbanisme applicable à la parcelle, reculs par
              rapport aux limites séparatives, emprise au sol, servitudes et éventuelles protections patrimoniales.
            </li>
          </ul>
          <p>
            À l’issue de l’étude, vous savez si le bassin envisagé est réalisable à l’endroit voulu, ce qu’il faut modifier pour
            qu’il le devienne, et à quelles conditions.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="h2-md">Déclaration préalable ou permis de construire</h2>
        <div className="prose mt-4">
          <p>Le régime applicable dépend de la surface du bassin et de la présence d’une couverture.</p>
          <ul>
            <li>
              <strong>Bassin de 10 m² ou moins</strong> : dispensé de toute formalité, sauf en secteur protégé où une
              déclaration préalable reste exigée (article R.421-2 du code de l’urbanisme).
            </li>
            <li>
              <strong>Bassin de plus de 10 m² et jusqu’à 100 m², non couvert ou dont la couverture fait moins de 1,80 m de
              hauteur</strong> : déclaration préalable (article R.421-9 du code de l’urbanisme).
            </li>
            <li>
              <strong>Bassin de plus de 100 m², ou couverture d’une hauteur de 1,80 m ou plus</strong> : permis de construire
              (articles R.421-1 et R.421-9 du code de l’urbanisme).
            </li>
          </ul>
          <p>
            Le délai d’instruction de droit commun est d’un mois pour une déclaration préalable et de deux mois pour un permis
            de construire portant sur une maison individuelle et ses annexes (article R.423-23 du code de l’urbanisme). Ce délai
            court à compter de la réception d’un dossier complet et peut être majoré, notamment lorsque l’avis de l’architecte
            des Bâtiments de France est requis.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <EncadreInformationGenerale title="Information générale, ne vaut pas garantie d’obtention">
          <p>
            Les règles rappelées sur cette page sont une information générale, issue du code de l’urbanisme à la date de
            rédaction. Elles ne constituent pas un conseil juridique et ne valent pas garantie d’obtention d’une autorisation.
          </p>
          <p className="mt-3">
            Chaque parcelle est soumise au règlement d’urbanisme de sa commune, qui peut être plus restrictif, et la décision
            appartient à l’autorité compétente. Nous montons et déposons le dossier, nous suivons l’instruction et nous
            répondons aux demandes de pièces, sans pouvoir nous engager sur son issue.
          </p>
        </EncadreInformationGenerale>
      </Section>

      <Section>
        <h2 className="h2-md">L’étude de sol</h2>
        <div className="prose mt-4">
          <p>
            L’étude de sol est une reconnaissance du terrain menée par un bureau d’études géotechnique. Elle devient nécessaire
            lorsque des indices laissent penser que le sol ne se comportera pas comme prévu : terrain en pente, remblai récent,
            argile sujette au retrait-gonflement, nappe proche, roche affleurante, ou désordres visibles sur le bâti voisin.
          </p>
          <h3>Ce qu’elle change au chiffrage</h3>
          <ul>
            <li>Le dimensionnement du ferraillage et l’épaisseur de la structure.</li>
            <li>Le mode de terrassement, l’étaiement et le blindage éventuel de la fouille.</li>
            <li>Le drainage périphérique et la gestion des eaux autour du bassin.</li>
            <li>Le volume de terres à évacuer, en particulier en présence de roche.</li>
          </ul>
          <p>
            Une étude de sol commandée avant le devis évite les mauvaises surprises au terrassement. C’est le seul moment où
            elle coûte moins cher qu’un aléa.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="h2-md">Ce qui est payant, dit avant de commencer</h2>
        <div className="prose mt-4">
          <p>
            L’étude de faisabilité, les plans d’implantation et le montage du dossier d’urbanisme représentent du temps de
            conducteur de travaux et de dessin. Nous vous disons avant de commencer ce qui est facturé et à quelles conditions.
          </p>
          <ul>
            <li>Si le projet se concrétise par un chantier signé, ces prestations sont intégrées au devis de travaux.</li>
            <li>
              Si le projet ne se concrétise pas, l’étude, les plans et le dossier d’urbanisme restent dus, au montant annoncé
              avant leur lancement.
            </li>
            <li>
              L’étude de sol est réalisée par un bureau d’études indépendant et vous est facturée par lui, ou refacturée à
              l’identique si nous la commandons pour vous.
            </li>
          </ul>
          <p>
            Ce point est écrit dans la proposition d’étude, avant signature. Vous savez donc ce que coûte un projet qui
            s’arrête.
          </p>
        </div>
      </Section>

      <Section>
        <Faq items={faq} />
      </Section>

      <Section tone="surface">
        <EtapesSuivantes
          points={[
            "Vous nous indiquez la commune, la parcelle et le bassin envisagé.",
            "Nous relevons le terrain, vérifions les règles applicables et vous remettons la proposition d’étude chiffrée.",
            "Nous établissons les plans, montons le dossier, le déposons et suivons l’instruction jusqu’à la décision.",
          ]}
          cta={{ label: "Demander une étude", href: "/contact" }}
          links={[
            { label: zonePage.label, href: zonePage.href },
            ...relatedLinks(PATH).filter((l) => l.href !== zonePage.href),
          ]}
        />
      </Section>

      <JsonLd
        data={[
          serviceJsonLd({
            name: NOM,
            description:
              "Étude de faisabilité, plans d’implantation, étude de sol et montage du dossier de déclaration préalable ou de permis de construire pour une piscine à Montpellier et dans un rayon d’environ 30 km.",
            path: PATH,
          }),
          breadcrumbJsonLd([{ name: "Étude de faisabilité et urbanisme", path: PATH }]),
        ]}
      />
    </>
  );
}
