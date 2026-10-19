import AnimalList from "./components/AnimalList.jsx";

const animals = [
  { id: 1, name: "Luna", adopted: false, species: "dog" },
  { id: 2, name: "Bella", adopted: true, species: "cat" },
  { id: 3, name: "Daisy", adopted: false, species: "rabbit" }
];

export default function App() {
  const available = animals.filter((animal) => !animal.adopted).length;

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div>
            <p className="eyebrow">Administrare adăpost</p>
            <h1>Animal Shelter</h1>
            <p className="subtitle">
              Gestionează animalele și statusul adopțiilor.
            </p>
          </div>
          <p className="app-count">
            <strong>{animals.length}</strong> animale, dintre care{" "}
            <strong>{available}</strong> disponibile
          </p>
        </div>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Animalele din adăpost</h2>
          <p className="panel-intro">
            Animalele sunt afișate ca elemente generate din date.
          </p>
          <AnimalList animals={animals} />
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </>
  );
}
