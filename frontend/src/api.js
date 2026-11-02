// Toate cererile HTTP sunt centralizate aici.
export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchAnimals() {
  const response = await fetch(`${API_URL}/animals`);

  if (!response.ok) {
    throw new Error(`Eroare server: ${response.status}`);
  }

  return response.json();
}
