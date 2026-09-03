// Zone média des cartes et des bandeaux de la maquette : aplat vert texturé au ratio indiqué.
// Aucune photo n'a été livrée (.agency/mockup ne contient aucun visuel, image_plan.json décrit
// des images encore à produire) : l'aplat est ici le rendu de la maquette, pas un placeholder gris.
// Il est purement décoratif et ne porte aucune information (aio_rules).
export function MediaZone({ ratio = "4/3", className = "" }: { ratio?: string; className?: string }) {
  return <div aria-hidden="true" className={`bg-primary texture-soft ${className}`} style={{ aspectRatio: ratio }} />;
}
