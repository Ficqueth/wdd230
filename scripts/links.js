

const baseURL = "https://ficqueth.github.io/wdd230/";
const linksURL = "https://ficqueth.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (weeks) => {
    const container = document.querySelector(".card"); // Target the container where the sections will be added

    weeks.forEach((week) => {
        let card = document.createElement("section"); // Create a section for each week
        let weekTitle = document.createElement("h2"); // Title for the week
        let linkList = document.createElement("ul"); // List to hold links

        weekTitle.textContent = week.week; // Set the week title

        // Loop through each link and create a list item
        week.links.forEach((link) => {
            let listItem = document.createElement("li");
            let anchor = document.createElement("a");

            anchor.href = `https://ficqueth.github.io/wdd230/${link.url}`; // Construct full URL
            anchor.textContent = link.title;
            anchor.target = "_blank"; // Open links in a new tab

            listItem.appendChild(anchor); // Add link to list item
            linkList.appendChild(listItem); // Add list item to the list
        });

        card.appendChild(weekTitle); // Add week title to card
        card.appendChild(linkList); // Add link list to card
        container.appendChild(card); // Append the card to the container
    });
};

getLinks();