
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const heroHeight = document.querySelector('.hero').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight) {
            navbar.classList.add('bg-custom', 'text-white');
            navbar.classList.remove('bg-light');
        } else {
            navbar.classList.remove('bg-custom', 'text-white');
            navbar.classList.add('bg-light');
        }
    });
});
// Scroll Animation
document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-on-scroll");
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("fade-in");
      }
    });
  });
  