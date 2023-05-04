export default function clubProjects(clubProjectsJson) {
  // Selectors
  const clubProjectsContainer = document.querySelector(".projects__content");

  // State

  // On mount
  for (let i = 0; i < clubProjectsJson.projects.length; i++) {
    const { title, description, filename, altText } =
      clubProjectsJson.projects[i];

    const projectContainer = document.createElement("article");
    projectContainer.className = "projects__project";

    const textContainer = document.createElement("div");
    textContainer.className = "projects__text";

    const titleText = document.createElement("h3");
    titleText.className = "projects__project-title";
    titleText.innerHTML = title;

    const descriptionText = document.createElement("p");
    descriptionText.className = "projects__description";
    descriptionText.innerHTML = description;

    textContainer.appendChild(titleText);
    textContainer.appendChild(descriptionText);

    const image = document.createElement("img");
    image.className = "projects__img";
    image.src = clubProjectsJson.basePath + filename;
    image.alt = altText;

    projectContainer.appendChild(textContainer);
    projectContainer.appendChild(image);

    clubProjectsContainer.appendChild(projectContainer);
  }

  // Handlers

  // Events
}
