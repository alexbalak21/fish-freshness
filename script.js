// Throttle function to limit how often a function can fire
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

function updateNavbar() {
  const navbar = document.querySelector(".navbar");
  const heroSection = document.querySelector(".hero-section");
  
  if (!navbar || !heroSection) return;
  
  // Get the height of the hero section
  const heroHeight = heroSection.offsetHeight;
  // Get the current scroll position
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
  // Update navbar based on scroll position
  if (scrollPosition > heroHeight * 0.8) { // Changed to 80% of hero height for better mobile feel
    navbar.classList.add("bg-dark");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-dark");
    navbar.classList.add("bg-transparent");
  }
}

// Run once when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  // Initial check
  updateNavbar();
  
  // Throttled scroll event
  const throttledScroll = throttle(updateNavbar, 100);
  window.addEventListener("scroll", throttledScroll, { passive: true });
  
  // Also update on window resize in case of orientation change
  window.addEventListener("resize", throttle(updateNavbar, 200));
});
