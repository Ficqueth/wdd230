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

// 1️⃣ Initialize display element variable for visits message
const visitsDisplay = document.querySelector(".visit-message");

// 2️⃣ Get the stored last visit timestamp from localStorage
const lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");

// 3️⃣ Check if there was a previous visit
if (!lastVisitTimestamp) {
    // First visit: Show the welcome message
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Get the current timestamp and the stored last visit timestamp
    const currentTimestamp = Date.now();
    const lastVisit = parseInt(lastVisitTimestamp); // Convert string to integer

    // Calculate the difference in milliseconds and convert to days
    const msToDays = 86400000; // 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
    const timeDifference = Math.floor((currentTimestamp - lastVisit) / msToDays);

    if (timeDifference === 0) {
        // If the last visit was the same day
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else if (timeDifference === 1) {
        // If the last visit was 1 day ago
        visitsDisplay.textContent = "You last visited 1 day ago.";
    } else {
        // If the last visit was more than 1 day ago
        visitsDisplay.textContent = `You last visited ${timeDifference} days ago.`;
    }
}

// 4️⃣ Store the current timestamp in localStorage
localStorage.setItem("lastVisitTimestamp", Date.now().toString());
