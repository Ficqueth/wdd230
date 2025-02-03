

const baseURL = "https://ficqueth.github.io/wdd230/";
const linksURL = "https://ficqueth.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    const ul = document.querySelector(".card ul");

    weeks.forEach((week) => {
        let weekItem = document.createElement("li");
        let weekTitle = document.createElement("span");

        weekTitle.textContent = `${week.week}: `;
        weekItem.appendChild(weekTitle);

        week.links.forEach((link, index) => {
            let anchor = document.createElement("a");
            anchor.setAttribute("href", link.url);
            anchor.setAttribute("target", "_blank");
            anchor.textContent = link.title;

            weekItem.appendChild(anchor);

            // Add a separator if there are multiple links
            if (index < week.links.length - 1) {
                let separator = document.createTextNode(" | ");
                weekItem.appendChild(separator);
            }
        });

        ul.appendChild(weekItem);
    });
};

getLinks();