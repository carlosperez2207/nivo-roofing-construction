(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch("../index/lang.json");
    translations = await response.json();

    changeLanguage("es");

    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    if (btnEs) {
      btnEs.addEventListener("click", () => changeLanguage("es"));
    }

    if (btnEn) {
      btnEn.addEventListener("click", () => changeLanguage("en"));
    }

  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
  }
}

function changeLanguage(lang) {
  const text = translations[lang];
  if (!text) return;

  for (const id in text) {
    const element = document.getElementById(id);
    if (element) {
      if (element.tagName === "INPUT" && element.type === "submit") {
        element.value = text[id];
      } else {
        element.innerHTML = text[id];
      }
    }
  }

  const placeholders = {
    es: {
      name: "Escribe tu nombre completo",
      phone: "Escribe tu número de contacto",
      email: "Escribe tu correo electrónico",
      message: "Ejemplo: necesito remodelación de baño, instalación de piso, roofing, carpintería o una ampliación..."
    },
    en: {
      name: "Enter your full name",
      phone: "Enter your contact number",
      email: "Enter your email address",
      message: "Example: I need a bathroom remodel, flooring installation, roofing, carpentry, or a home addition..."
    }
  };

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (nameInput) nameInput.placeholder = placeholders[lang].name;
  if (phoneInput) phoneInput.placeholder = placeholders[lang].phone;
  if (emailInput) emailInput.placeholder = placeholders[lang].email;
  if (messageInput) messageInput.placeholder = placeholders[lang].message;

  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", loadTranslations);