document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar")
  const heroSection = document.querySelector(".hero-section")

  if (!navbar || !heroSection) return

  const heroHeight = heroSection.offsetHeight

  window.addEventListener("scroll", function () {
    if (window.scrollY > heroHeight - 50) {
      navbar.classList.add("bg-dark")
      navbar.classList.remove("bg-transparent")
    } else {
      navbar.classList.remove("bg-dark")
      navbar.classList.add("bg-transparent")
    }
  })
})
