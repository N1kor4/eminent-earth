document.addEventListener('astro:page-load', () => {
  const navLinks = document.querySelectorAll("[data-navLink]");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === window.location.pathname) {
      link.setAttribute("aria-current", "page");
    }
  });

  const menuBtn = document.getElementById("menu-btn");
  const navLinksContainer = document.getElementById("nav-links");

  if (menuBtn && navLinksContainer) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinksContainer.classList.contains("nav-open");
      
      if (isOpen) {
        navLinksContainer.classList.remove("nav-open");
        menuBtn.setAttribute("aria-expanded", "false");
      } else {
        navLinksContainer.classList.add("nav-open");
        menuBtn.setAttribute("aria-expanded", "true");
      }
    });
  }
});