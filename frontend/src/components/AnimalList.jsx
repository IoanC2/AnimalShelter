import AnimalCard from "./AnimalCard.jsx";

export default function AnimalList({ animals, onToggle, onDelete }) {
  if (animals.length === 0) {
    return <p className="empty">Nu există animale în adăpost.</p>;
  }

  return (
    <ul className="item-list">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}