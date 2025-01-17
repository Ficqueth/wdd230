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
