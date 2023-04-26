export default function aboutMembers(aboutMembersJson) {
  // Selectors
  const aboutContainer = document.querySelector(".about__content-container");

  // State

  // On mount
  for (let i = 0; i < aboutMembersJson.members.length; i++) {
    const { filename, description, altText } = aboutMembersJson.members[i];

    const personContainer = document.createElement("article");
    personContainer.className = "about__person-container";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "about__content-img-wrapper";

    const image = document.createElement("img");
    image.src = aboutMembersJson.basePath + filename;
    image.alt = altText;

    imageWrapper.appendChild(image);

    const personDescription = document.createElement("p");
    personDescription.className = "about__content-description";
    personDescription.innerHTML = description;

    personContainer.appendChild(imageWrapper);
    personContainer.appendChild(personDescription);

    aboutContainer.appendChild(personContainer);
  }

  // Handlers

  // Events
}
