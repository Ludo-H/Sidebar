/************* Réussi 50% *************/


// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml


// variables
const burger = document.querySelector("#btn");
const sidebar = document.querySelector("#side-bar");
const content = document.querySelector(".content");

// Fonctions


// evenements
burger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

content.addEventListener("click", () => {
    sidebar.classList.remove("active");
});