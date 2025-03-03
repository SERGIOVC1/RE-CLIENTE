import { fetchProjects } from "./requests.js";

const renderProjects = async (currentPage = 0, pageSize = 5) => {
  const projectsContainer = document.querySelector("#projects-container");
  const nextButton = document.querySelector("#next-page");
  const prevButton = document.querySelector("#prev-page");

  let projects = await fetchProjects(currentPage, pageSize);

  // Renderizar los proyectos
  projectsContainer.innerHTML = "";
  projects.forEach((project) => {
    projectsContainer.innerHTML += `
      <div class="card">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.repository_url}" target="_blank">View Repository</a>
      </div>
    `;
  });

  // Control de botones
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = projects.length < pageSize;

  prevButton.onclick = () => renderProjects(currentPage - 1, pageSize);
  nextButton.onclick = () => renderProjects(currentPage + 1, pageSize);
};

// Inicializar con la primera página
renderProjects();
