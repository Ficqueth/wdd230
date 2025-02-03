const url = 'https://ficqueth.github.io/wdd230/chamber/data/members.json';

const mainContent = document.querySelector('main');  // The main content area where the cards will be displayed

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        card.classList.add('card'); // Add a class for styling

        let companyName = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membershipLevel = document.createElement('p');
        let email = document.createElement('p');
        let image = document.createElement('img');

        // Fill content for each company
        companyName.textContent = member.companyName;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.href = member.website;
        website.textContent = `Website: ${member.website}`;
        website.target = "_blank"; // Open in new tab
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        email.textContent = `Email: ${member.email}`;
        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', `Logo of ${member.companyName}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');

        // Append elements to the card
        card.appendChild(image);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(email);

        // Append the card to the main content
        mainContent.appendChild(card);
    });
}

// Call the function to fetch and display the member data
getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("main");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
