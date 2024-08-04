// Navigation
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// Spell box
const spellBox = document.querySelector(".spell-box");
const spellName = document.querySelector(".name");
const spellDescription = document.querySelector(".description");
const googleBtn = document.querySelector(".google-button");
const nextSpellBtn = document.querySelector(".next-spell");

// API
const getSpell = () => {
  fetch("https://potterhead-api.vercel.app/api/spells")
    .then((response) => response.json())
    .then((data) => {
      const randomNumber = Math.floor(Math.random() * data.length);
      spellName.textContent = data[randomNumber].name;
      spellDescription.textContent = data[randomNumber].description;
    });
};

const googleSearch = () => {
  const spell = spellName.textContent;
  const description = spellDescription.textContent;
  const url = `https://www.google.com/search?q=${spell} : ${description}`;
  window.open(url, "_blank");
};

getSpell();

googleBtn.addEventListener("click", googleSearch);
nextSpellBtn.addEventListener("click", getSpell);
