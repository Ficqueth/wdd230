// Dynamically set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// Mobile menu toggle
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Dark mode toggle
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        body.style.background = "#000";
        body.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        body.style.background = "#eee";
        body.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});

// Handle visit message
const visitMessage = document.querySelector(".visit-message");

// Get the stored visit time in localStorage
let lastVisitDate = localStorage.getItem("lastVisit");

if (lastVisitDate) {
    const now = new Date();
    const lastVisit = new Date(lastVisitDate);
    const diffTime = now - lastVisit;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${diffDays} days ago.`;
    }
} else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

// Store the current date as the last visit date
localStorage.setItem("lastVisit", new Date().toString());