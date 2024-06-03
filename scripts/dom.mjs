export function updateCharacterCard(characterIndex, data) {
    const characterName = data[0].name;
    document.getElementById('fav' + characterIndex).innerText = characterName;

    const characterBio = data[0].description;
    document.getElementById('bio' + characterIndex).innerText = characterBio;

    const characterSkills = data[0].powers;
    document.getElementById('power' + characterIndex).innerText = 'Skills: ' + characterSkills;

    const characterAllies = data[0].allies;
    document.getElementById('allies' + characterIndex).innerText = 'Allies: ' + characterAllies;

    const characterVillains = data[0].enemies;
    document.getElementById('villains' + characterIndex).innerText = 'Villains: ' + characterVillains;

    const charcterAka = data[0].aka;
    document.getElementById('aka' + characterIndex).innerText = 'Aka: ' + charcterAka;
}