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
