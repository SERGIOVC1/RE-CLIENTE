import { readFile, writeFile } from "fs/promises";

const PROJECTS_FILE = "./src/data/projects.json";  // Ruta al archivo de datos de proyectos

// Función para leer los proyectos desde el archivo JSON
export async function readProjects(filePath: string) {
  try {
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading projects file:", error);
    throw error;
  }
}

// Función para escribir los proyectos en el archivo JSON
export async function writeProjects(filePath: string, data: any[]) {
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing projects file:", error);
    throw error;
  }
}
