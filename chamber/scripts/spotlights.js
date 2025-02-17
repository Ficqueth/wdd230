const memberslink = 'https://ficqueth.github.io/wdd230/chamber/data/members.json';

const spotlightContainer = document.querySelector('#spotlights');  // The section where spotlights will be displayed

async function getSpotlightMembers() {
    const response = await fetch(memberslink);
    const data = await response.json();
    displaySpotlights(data.members);
}

const displaySpotlights = (members) => {
    // Filter only "Silver" and "Gold" members
    const eligibleMembers = members.filter(member =>
        member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
    );

    // Shuffle and select up to 3 random members
    const shuffledMembers = eligibleMembers.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffledMembers.slice(0, 3);

    // Generate and append spotlight sections
    selectedMembers.forEach((member) => {
        let spotlightDiv = document.createElement('div');
        spotlightDiv.classList.add('spotlight'); // Add class for styling

        let logo = document.createElement('img');
        logo.setAttribute('src', `images/${member.image}`); // Update with your image path
        logo.setAttribute('alt', `Logo of ${member.companyName}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');

        let companyName = document.createElement('h3');
        let description = document.createElement('p');
        let website = document.createElement('a');

        // Fill content
        companyName.textContent = member.companyName;
        description.textContent = member.address;
        website.href = member.website;
        website.textContent = `Visit Website`;
        website.target = "_blank";

        // Append elements
        spotlightDiv.appendChild(logo);
        spotlightDiv.appendChild(companyName);
        spotlightDiv.appendChild(description);
        spotlightDiv.appendChild(website);

        // Append spotlight to container
        spotlightContainer.appendChild(spotlightDiv);
    });
}

// Call the function to fetch and display the spotlight members
getSpotlightMembers();
