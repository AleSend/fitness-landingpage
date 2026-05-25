const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const spaceSelect = document.querySelector("#spaceSelect");
const spaceButtons = document.querySelectorAll(".space-button");

spaceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    spaceSelect.value = button.dataset.space;
    document.querySelector("#kontakt").scrollIntoView({ behavior: "smooth" });
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const selectedSpace = formData.get("space");

  formMessage.textContent = `Danke, ${name}! Ihre Anfrage fuer ${selectedSpace} wurde vorbereitet. Wir melden uns zeitnah mit passenden Optionen und einem Besichtigungstermin.`;
  formMessage.classList.remove("hidden");
  contactForm.reset();
  spaceSelect.value = selectedSpace;
});
