export default function clubWebsites(clubWebsitesJson) {
  // Selectors
  const clubWebsitesContainer = document.querySelector(".clubs__content");

  // State

  // On mount
  for (let i = 0; i < clubWebsitesJson.images.length; i++) {
    const { filename, caption, altText, websiteUrl } =
      clubWebsitesJson.images[i];

    const clubContainer = document.createElement("a");
    clubContainer.className = "clubs__club-container";
    clubContainer.href = websiteUrl;

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "clubs__club-img-wrapper";

    const image = document.createElement("img");
    image.src = clubWebsitesJson.basePath + filename;
    image.alt = altText;

    imageWrapper.appendChild(image);

    const captionText = document.createElement("h3");
    captionText.className = "clubs__club-caption";
    captionText.innerHTML = caption;

    clubContainer.appendChild(imageWrapper);
    clubContainer.appendChild(captionText);

    clubWebsitesContainer.appendChild(clubContainer);
  }

  // Handlers

  // Events
}
