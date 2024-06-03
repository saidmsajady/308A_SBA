async function fetchData() {
    let remainingUrl = ["?q=captain%20america", "?q=winter%20", "?q=black%20widow", "?q=black%20panther", "?q=Spider-man", "?q=loki"];

    for (let i = 0; i < remainingUrl.length; i++) {
        const url = 'https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name' + remainingUrl[i];
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd1ed2eb844mshb4c39ce12a01b36p11f486jsn03d60747374c',
                'x-rapidapi-host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            name(data, i);
            bio(data, i);
            skills(data, i);
            allies(data, i);
            villains(data, i);
            aka(data, i);
            scrollToCard(cardIndex);

        } catch (error) {
            console.error(error);
        }
    }
}

fetchData();

function name(data, i) {
    const characterName = data[0].name; 
    document.getElementById('fav' + (i + 1)).innerText = characterName;
}

function bio(data, i) {
    const characterBio = data[0].description;
    document.getElementById('bio' + (i + 1)).innerText = characterBio;
}

function skills(data, i) {
    const characterSkills = data[0].powers;
    document.getElementById('power' + (i + 1)).innerText += ' ' + characterSkills;
}

function allies(data, i) {
    const characterAllies = data[0].allies;
    document.getElementById('allies' + (i + 1)).innerText += ' ' + characterAllies;
}

function villains(data, i) {
    const characterVillains = data[0].enemies;
    document.getElementById('villains' + (i + 1)).innerText += ' ' + characterVillains;
}

function aka(data, i) {
    const charcterAka = data[0].aka;
    document.getElementById('aka' + (i + 1)).innerText += ' ' + charcterAka;
}

function scrollToCard(cardIndex) {
    const cardId = 'card' + cardIndex;
    const card = document.getElementById(cardId);
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
