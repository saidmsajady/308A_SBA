export function updateCharacterCard(characterIndex, data) {
    // Update character name
    const characterName = data[0].name;
    document.getElementById('fav' + characterIndex).innerText = characterName;

    // Update character bio
    const characterBio = data[0].description;
    document.getElementById('bio' + characterIndex).innerText = characterBio;

    // Update character skills
    const characterSkills = data[0].powers;
    document.getElementById('power' + characterIndex).innerText = 'Skills: ' + characterSkills;

    // Update character allies
    const characterAllies = data[0].allies;
    document.getElementById('allies' + characterIndex).innerText = 'Allies: ' + characterAllies;

    // Update character villains
    const characterVillains = data[0].enemies;
    document.getElementById('villains' + characterIndex).innerText = 'Villains: ' + characterVillains;

    // Update character aliases
    const charcterAka = data[0].aka;
    document.getElementById('aka' + characterIndex).innerText = 'Aka: ' + charcterAka;
}
