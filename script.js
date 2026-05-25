const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const packageSelect = document.querySelector("#packageSelect");
const packageButtons = document.querySelectorAll(".package-button");

packageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    packageSelect.value = button.dataset.package;
    document.querySelector("#kontakt").scrollIntoView({ behavior: "smooth" });
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const selectedPackage = formData.get("package");

  formMessage.textContent = `Danke, ${name}! Deine Anfrage fuer das ${selectedPackage}-Paket wurde erfolgreich vorbereitet. Wir melden uns zeitnah bei dir.`;
  formMessage.classList.remove("hidden");
  contactForm.reset();
  packageSelect.value = selectedPackage;
});
