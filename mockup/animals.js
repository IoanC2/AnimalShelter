const animals = [
  {
    id: 1,
    name: "Luna",
    adopted: false,
    species: "dog",
    age_category: "Adult",
    user: "Ana"
  },
  {
    id: 2,
    name: "Bella",
    adopted: true,
    species: "cat",
    age_category: "Senior",
    user: "Mihai"
  },
  {
    id: 3,
    name: "Daisy",
    adopted: false,
    species: "rabbit",
    age_category: "Young",
    user: "Ioana"
  }
];

const SPECIES = ["dog", "cat", "rabbit"];
const AGE_CATEGORIES = ["Young", "Adult", "Senior"];

function listSpecies(animals) {
  return animals.map((animal) => animal.species);
}

function listNames(animals) {
  return animals.map((animal) => animal.name);
}

function countAvailable(animals) {
  return animals.filter((animal) => !animal.adopted).length;
}

function findAnimalByName(animals, name) {
  const searchText = name.trim().toLowerCase();
  return animals.find((animal) => animal.name.toLowerCase().includes(searchText));
}

function addAnimal(animals, name, species, ageCategory = "Young", user = "Alex") {
  const cleanName = name.trim();

  if (!cleanName) {
    throw new Error("Animal name is required.");
  }

  if (cleanName.length > 100) {
    throw new Error("Animal name must not exceed 100 characters.");
  }

  if (!SPECIES.includes(species)) {
    throw new Error("Invalid animal species.");
  }

  if (!AGE_CATEGORIES.includes(ageCategory)) {
    throw new Error("Invalid age category.");
  }

  const nextId = animals.reduce(
    (maximumId, animal) => Math.max(maximumId, animal.id),
    0
  ) + 1;

  const newAnimal = {
    id: nextId,
    name: cleanName,
    adopted: false,
    species,
    age_category: ageCategory,
    user
  };

  return [...animals, newAnimal];
}

function toggleAdoption(animals, id) {
  return animals.map((animal) =>
    animal.id === id
      ? { ...animal, adopted: !animal.adopted }
      : animal
  );
}

function deleteAnimal(animals, id) {
  return animals.filter((animal) => animal.id !== id);
}

console.log("--- Reading ---");
console.log("Names:", listNames(animals).join(", "));
console.log("Available:", countAvailable(animals));
console.log(
  "Search 'lun':",
  findAnimalByName(animals, "lun")
);

console.log("--- Adding ---");
let updatedAnimals = addAnimal(animals, "Max", "dog");
console.log("New list:", updatedAnimals.length, "animals");
console.log("Original array still has:", animals.length, "animals");

console.log("--- Updating and deleting ---");
updatedAnimals = toggleAdoption(updatedAnimals, 1);
console.log(
  "After toggling adoption for id 1, available:",
  countAvailable(updatedAnimals)
);

updatedAnimals = deleteAnimal(updatedAnimals, 3);
console.log(
  "After deleting id 3:",
  listNames(updatedAnimals).join(", ")
);

console.log("--- Validation ---");

try {
  addAnimal(animals, " ", "dog");
} catch (error) {
  console.error("Empty name rejected:", error.message);
}

try {
  addAnimal(animals, "Rocky", "horse");
} catch (error) {
  console.error("Invalid species rejected:", error.message);
}
