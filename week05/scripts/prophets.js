const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophets) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthplace = document.createElement('p');

        fullName.textContent = `${prophets.name} ${prophets.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophets.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophets.birthplace}`;
        portrait.setAttribute('src', prophets.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophets.name} ${prophets.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}
getProphetData();