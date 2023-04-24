const colorTheme = () => {
  // Selectors
  const themeToggleButtons = document.querySelectorAll("#theme-toggle");

  // State
  const theme = localStorage.getItem("theme");
  const prefersLightMode = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  // On mount
  if ((theme && theme === "light-mode") || (!theme && prefersLightMode)) {
    document.body.classList.add("light-mode");
  }

  // Handlers
  function handleThemeToggle() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.setItem("theme", "dark-mode");
    }
  }

  // Events
  themeToggleButtons.forEach((button) =>
    button.addEventListener("click", handleThemeToggle)
  );
};

export default colorTheme;
