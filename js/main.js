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

// button language

const check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  let id = check.checked;
  console.log(check.checked);
  if (id === true) {
    location.href = "../index.html";
  } else {
    location.href = "cat/indexCat.html";
  }
}

// Form

const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);

const buttonMailto = document.querySelector("#truco");

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);

  buttonMailto.setAttribute(
    "href",
    `mailto:info@rosersantonjaguillen.com?subject= Nombre: ${form.get(
      "name"
    )}, Email: ${form.get("email")}&body=${form.get("message")}`
  );
  buttonMailto.click();
}

// validation form
// show-on-scroll

const callback = function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function (target) {
  observer.observe(target);
});

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });
}

loop();
