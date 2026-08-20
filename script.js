// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  menuToggle.textContent =
    nav.classList.contains("active") ? "✕" : "☰";
});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});


// =========================
// FAQ ACCORDION
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }

  });

});


// =========================
// FORMULAIRE
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value;

  alert(
    `Merci ${name} ! Votre demande a bien été enregistrée.`
  );

  contactForm.reset();

});


// =========================
// ANNEE AUTOMATIQUE
// =========================

document.getElementById("year").textContent =
  new Date().getFullYear();


// =========================
// HEADER SHADOW ON SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {
    header.style.boxShadow =
      "0 10px 30px rgba(0, 0, 0, 0.04)";
  } else {
    header.style.boxShadow = "none";
  }

});