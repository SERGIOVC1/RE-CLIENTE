// src/utils/requests.js
export async function fetchProjects(page = 0, size = 5) {
  try {
    const response = await fetch(`/api/v1/projects?page=${page}&size=${size}`);
    if (response.ok) {
      const data = await response.json();
      return data.content; // Esto depende de cómo el servidor devuelve los datos paginados
    } else {
      console.error("Failed to fetch projects:", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
