export default function mobileNav() {
  // Selectors
  const headerButton = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  // State
  let isMobileNavOpen = false;

  // On mount

  // Handlers
  function handleHeaderToggle() {
    isMobileNavOpen = !isMobileNavOpen;

    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  }

  // Events
  headerButton.addEventListener("click", handleHeaderToggle);
  mobileNavLinks.forEach((link) =>
    link.addEventListener("click", handleHeaderToggle)
  );
}
