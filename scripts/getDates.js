// Dynamically set the current year in the first paragraph of the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dynamically set the last modified date in the second paragraph of the footer
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

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

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits.
if (numVisits === 0) {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
} else {
	visitsDisplay.textContent = numVisits;
}

// 4️⃣ Increment the number of visits by one.
numVisits++;

// 5️⃣ Store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
