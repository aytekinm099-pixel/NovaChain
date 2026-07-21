
// ==========================
// NovaChain Script
// ==========================

// Smooth reveal animation
const revealElements = document.querySelectorAll("section, .stat, .card, .token-card, .roadmap-item, .faq-item");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all .7s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Navbar background
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,8,22,.95)";
  } else {
    navbar.style.background = "rgba(5,8,22,.75)";
  }
});

// Floating logo effect
const logo = document.querySelector(".logo-circle");

if (logo) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    logo.style.transform = `translate(${x}px, ${y}px)`;
  });
}

console.log("NovaChain loaded successfully 🚀");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    document.querySelectorAll("#mobileMenu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });
}
