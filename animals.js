const animals = [
  { id: 1, name: "Luna", adopted: false, species: "dog" },
  { id: 2, name: "Bella", adopted: true, species: "cat" },
  { id: 3, name: "Daisy", adopted: false, species: "rabbit" }
];

const SPECIES = ["dog", "cat", "rabbit"];

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
  return animals.find((animal) => animal.name === name);
}

function addAnimal(animals, name, species) {
  if (!name.trim()) {
    throw new Error("Animal name is required.");
  }

  if (name.length > 100) {
    throw new Error("Animal name must not exceed 100 characters.");
  }

  if (!SPECIES.includes(species)) {
    throw new Error("Invalid animal species.");
  }

  const nextId = animals.reduce(
    (maximumId, animal) => Math.max(maximumId, animal.id),
    0
  ) + 1;

  const newAnimal = {
    id: nextId,
    name,
    adopted: false,
    species
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
  "Search 'Luna':",
  findAnimalByName(animals, "Luna")
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
