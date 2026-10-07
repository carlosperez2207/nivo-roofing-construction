let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch("lang.json");
    translations = await response.json();

    changeLanguage("es");

    document.getElementById("btn-es").addEventListener("click", () => {
      changeLanguage("es");
    });

    document.getElementById("btn-en").addEventListener("click", () => {
      changeLanguage("en");
    });

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
      element.innerHTML = text[id];
    }
  }

  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", loadTranslations);