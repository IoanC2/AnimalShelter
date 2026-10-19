const SPECIES_LABELS = {
  dog: "Câine",
  cat: "Pisică",
  rabbit: "Iepure"
};

export default function AnimalCard({ animal }) {
  const speciesLabel = SPECIES_LABELS[animal.species] ?? animal.species;

  return (
    <li className={animal.adopted ? "item-card done" : "item-card"}>
      <div>
        <h3>{animal.name}</h3>
        <span className={`badge badge-${animal.species}`}>
          {speciesLabel}
        </span>
      </div>
      <span
        className={
          animal.adopted
            ? "status status-adopted"
            : "status status-available"
        }
      >
        {animal.adopted ? "Adoptat" : "Disponibil"}
      </span>
    </li>
  );
}