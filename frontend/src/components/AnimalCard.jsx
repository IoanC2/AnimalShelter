const SPECIES_LABELS = {
  dog: "Câine",
  cat: "Pisică",
  rabbit: "Iepure"
};

export default function AnimalCard({ animal, onToggle, onDelete }) {
  const speciesLabel = SPECIES_LABELS[animal.species] ?? animal.species;

  return (
    <li className={animal.adopted ? "item-card done" : "item-card"}>
      <label className="animal-main">
        <input
          type="checkbox"
          checked={animal.adopted}
          onChange={() => onToggle(animal.id)}
        />
        <div>
          <h3>{animal.name}</h3>
          <span className={`badge badge-${animal.species}`}>
            {speciesLabel}
          </span>
        </div>
      </label>
      <span
        className={
          animal.adopted
            ? "status status-adopted"
            : "status status-available"
        }
      >
        {animal.adopted ? "Adoptat" : "Disponibil"}
      </span>
      <button
        className="btn-danger"
        type="button"
        onClick={() => onDelete(animal.id)}
        aria-label={`Șterge ${animal.name}`}
      >
        Șterge
      </button>
    </li>
  );
}