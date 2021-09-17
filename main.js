const navSlide = () => {
  const burguer = document.querySelector(".burguer-menu");
  const nav = document.querySelector(".navbar__links");
  const navLinks = document.querySelectorAll(".navbar__links li");

  burguer.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // burguer animation
    burguer.classList.toggle("toggle");
  });
};

navSlide();
