const year = document.querySelector("#year");
const glow = document.querySelector(".cursor-glow");
const reveals = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (glow) {
  window.addEventListener("pointermove", (event) => {
    glow.style.opacity = "1";
    glow.style.transform = `translate(${event.clientX - 180}px, ${event.clientY - 180}px)`;
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

reveals.forEach((item) => revealObserver.observe(item));

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thank you. Your message is ready to send.";
    formStatus.classList.add("success");
    contactForm.reset();
  });
}
