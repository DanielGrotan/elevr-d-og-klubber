export default async function dailyJoke() {
  // Selectors
  const jokeContainer = document.querySelector(".joke__description");

  // State
  const apiURL = "https://v2.jokeapi.dev/joke/Programming";
  const errorMessage =
    "Det opstod en feil. Last inn siden på nytt for å prøve igjen.";

  // On mount
  const res = await fetch(apiURL);

  if (!res.ok) {
    jokeContainer.innerHTML = errorMessage;
    return;
  }

  const jokeJson = await res.json();

  if (jokeJson.error) {
    jokeContainer.innerHTML = errorMessage;
    return;
  }

  if (jokeJson.type === "single") {
    jokeContainer.innerHTML = jokeJson.joke.replaceAll("\n", "<br />");
  } else if (jokeJson.type === "twopart") {
    jokeContainer.innerHTML = (
      jokeJson.setup +
      "<br />" +
      jokeJson.delivery
    ).replaceAll("\n", "<br />");
  } else {
    jokeContainer.innerHTML = errorMessage;
  }

  // Handlers

  // Events
}
