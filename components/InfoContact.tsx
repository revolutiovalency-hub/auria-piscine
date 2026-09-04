import { site } from "@/site.config";
import { communesCourantes } from "@/lib/site-content";

// Colonne latérale de la page contact (maquette) : coordonnées, horaires en table clé/valeur et
// encart zone d'intervention. L'encart carte de la maquette n'a pas de visuel livré : les communes
// sont listées en clair, l'information ne dépend d'aucune image (aio_rules).
function Bloc({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line-alt pt-[22px]">
      <h2 className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-primary">{title}</h2>
      {children}
    </div>
  );
}

export function InfoContact() {
  const b = site.business;
  return (
    <div className="flex flex-col gap-[30px]">
      <Bloc title="Coordonnées">
        <address className="not-italic">
          <a href={`tel:${b.telephoneE164}`} className="mb-2.5 block font-heading text-[34px] leading-none text-text hover:text-primary">
            {b.telephone}
          </a>
          <p className="mb-1.5 text-[15.5px]">
            <a href={`mailto:${b.email}`}>{b.email}</a>
          </p>
          <p className="text-[15.5px] leading-[1.7] text-body">
            {b.address.street}
            <br />
            {b.address.postalCode} {b.address.city}
          </p>
        </address>
      </Bloc>

      <Bloc title="Horaires">
        <dl className="m-0">
          <div className="flex justify-between border-b border-row py-[7px] text-[15px] text-body">
            <dt>Du lundi au vendredi</dt>
            <dd className="m-0">8h – 18h, sur rendez-vous</dd>
          </div>
          <div className="flex justify-between border-b border-row py-[7px] text-[15px] text-body">
            <dt>Samedi et dimanche</dt>
            <dd className="m-0">Fermé</dd>
          </div>
          <div className="flex justify-between py-[7px] text-[15px] text-faint">
            <dt>Mi-août</dt>
            <dd className="m-0">Fermeture deux semaines</dd>
          </div>
        </dl>
        <p className="mt-4 text-[14.5px] leading-[1.7] text-muted">
          Une astreinte de dépannage est assurée pendant la fermeture pour les clients sous contrat d’entretien.
          Nous n’avons pas de show-room : les rendez-vous se tiennent sur votre terrain, ou au dépôt.
        </p>
      </Bloc>

      <Bloc title="Zone d’intervention">
        <p className="mb-4 text-[15px] leading-[1.7] text-body">
          Montpellier et sa première couronne, dans un rayon d’environ 30 km autour du dépôt de la Pompignane.
        </p>
        <ul className="flex list-none flex-wrap gap-2 p-0">
          {communesCourantes.map((z) => (
            <li key={z} className="pill" style={{ padding: "7px 14px" }}>{z}</li>
          ))}
        </ul>
      </Bloc>
    </div>
  );
}
