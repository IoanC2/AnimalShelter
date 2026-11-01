import { useState } from "react";
import AnimalList from "./components/AnimalList.jsx";

const INITIAL_ANIMALS = [
  { id: 1, name: "Luna", adopted: false, species: "dog", age_category: "Adult", user: "Ana" },
  { id: 2, name: "Bella", adopted: true, species: "cat", age_category: "Senior", user: "Mihai" },
  { id: 3, name: "Daisy", adopted: false, species: "rabbit", age_category: "Young", user: "Ioana" }
];

const FILTERS = [
  { value: "all", label: "Toate" },
  { value: "available", label: "Disponibile" },
  { value: "adopted", label: "Adoptate" },
  { value: "dog", label: "Câini" },
  { value: "cat", label: "Pisici" },
  { value: "rabbit", label: "Iepuri" }
];

function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [animals, setAnimals] = useState(INITIAL_ANIMALS);
  const [theme, setTheme] = useState(initialTheme);
  const [filter, setFilter] = useState("all");
  const available = animals.filter((animal) => !animal.adopted).length;
  const visibleAnimals = animals.filter((animal) => {
    if (filter === "available") return !animal.adopted;
    if (filter === "adopted") return animal.adopted;
    if (filter === "dog" || filter === "cat" || filter === "rabbit") {
      return animal.species === filter;
    }
    return true;
  });

  function handleToggle(id) {
    setAnimals((previousAnimals) =>
      previousAnimals.map((animal) =>
        animal.id === id
          ? { ...animal, adopted: !animal.adopted }
          : animal
      )
    );
  }

  function handleDelete(id) {
    setAnimals((previousAnimals) =>
      previousAnimals.filter((animal) => animal.id !== id)
    );
  }

  function handleAdd(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const species = formData.get("species");
    const ageCategory = formData.get("age_category");
    const user = formData.get("user").trim();

    if (!name || !user) {
      return;
    }

    setAnimals((previousAnimals) => {
      const nextId = previousAnimals.reduce(
        (maximumId, animal) => Math.max(maximumId, animal.id),
        0
      ) + 1;

      return [
        ...previousAnimals,
        {
          id: nextId,
          name,
          adopted: false,
          species,
          age_category: ageCategory,
          user
        }
      ];
    });

    event.currentTarget.reset();
  }

  function handleThemeToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div>
            <button
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? "Mod luminos" : "Mod întunecat"}
            </button>
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
          <h2>Adaugă un animal</h2>
          <p className="panel-intro">
            Completează datele pentru a adăuga un animal disponibil.
          </p>
          <form className="item-form" onSubmit={handleAdd}>
            <label htmlFor="animal-name">
              Nume
              <input
                id="animal-name"
                name="name"
                type="text"
                maxLength="100"
                placeholder="Ex: Max"
                required
              />
            </label>
            <label htmlFor="animal-species">
              Specie
              <select id="animal-species" name="species" defaultValue="dog">
                <option value="dog">Câine</option>
                <option value="cat">Pisică</option>
                <option value="rabbit">Iepure</option>
              </select>
            </label>
            <label htmlFor="animal-age-category">
              Categorie de vârstă
              <select
                id="animal-age-category"
                name="age_category"
                defaultValue="Young"
              >
                <option value="Young">Tânăr</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </label>
            <label htmlFor="animal-user">
              Persoană responsabilă
              <input
                id="animal-user"
                name="user"
                type="text"
                maxLength="100"
                placeholder="Ex: Ana"
                required
              />
            </label>
            <button type="submit">Adaugă animal</button>
          </form>
        </section>

        <section className="panel">
          <div className="list-heading">
            <div>
              <p className="eyebrow panel-eyebrow">Adăpostul nostru</p>
              <h2>Animalele din adăpost</h2>
            </div>
            <span className="list-count">{visibleAnimals.length} afișate</span>
          </div>
          <p className="panel-intro">
            Găsește un companion folosind filtrele de mai jos.
          </p>
          <div className="filter-bar" aria-label="Filtre animale">
            {FILTERS.map((option) => (
              <button
                className={filter === option.value ? "filter-button active" : "filter-button"}
                key={option.value}
                type="button"
                aria-pressed={filter === option.value}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <AnimalList
            animals={visibleAnimals}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </>
  );
}
