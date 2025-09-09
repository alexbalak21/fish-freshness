window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar")
  const heroSection = document.querySelector(".hero-section")

  // Get the height of the hero section
  const heroHeight = heroSection.offsetHeight

  if (window.scrollY > heroHeight - 50) {
    navbar.classList.add("bg-dark", "navbar-dark")
    navbar.classList.remove("navbar-light")
  } else {
    navbar.classList.remove("bg-dark", "navbar-dark")
    navbar.classList.add("navbar-light")
  }
})
