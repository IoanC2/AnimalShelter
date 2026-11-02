import { useEffect, useState } from "react";
import AnimalList from "./components/AnimalList.jsx";
import { fetchAnimals } from "./api.js";

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
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    let ignore = false;

    async function loadAnimals() {
      try {
        const data = await fetchAnimals();
        if (!ignore) {
          setAnimals(data);
          setError(null);
        }
      } catch (requestError) {
        if (!ignore) {
          setError(requestError.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadAnimals();

    return () => {
      ignore = true;
    };
  }, []);

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
          <div className="list-heading">
            <div>
              <p className="eyebrow panel-eyebrow">Adăpostul nostru</p>
              <h2>Animalele din adăpost</h2>
            </div>
            <span className="list-count">{visibleAnimals.length} afișate</span>
          </div>
          <p className="panel-intro">
            Datele sunt încărcate de la API-ul adăpostului.
          </p>
          <div className="filter-bar" aria-label="Filtre animale">
            {FILTERS.map((option) => (
              <button
                className={
                  filter === option.value
                    ? "filter-button active"
                    : "filter-button"
                }
                key={option.value}
                type="button"
                aria-pressed={filter === option.value}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          {loading && <p className="info">Se încarcă animalele...</p>}
          {error && (
            <p className="error" role="alert">
              Nu am putut încărca animalele: {error}. Rulează{" "}
              <code>npm run api</code>?
            </p>
          )}
          {!loading && !error && (
            <AnimalList
              animals={visibleAnimals}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </>
  );
}
