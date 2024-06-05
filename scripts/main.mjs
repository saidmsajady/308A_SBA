// Import necessary functions
import { fetchData } from './api.mjs';
import { updateCharacterCard } from './dom.mjs';

// Array of character queries
const characterQuery = [
    "captain%20america",
    "winter",
    "black%20widow",
    "black%20panther",
    "Spider-man",
    "loki"
];

// Fetch and populate character data
async function fetchAndPopulateData(characterQuery) {
    for (let i = 0; i < characterQuery.length; i++) {
        try {
            const data = await fetchData(characterQuery[i]);
            updateCharacterCard(i + 1, data);
        } catch (error) {
            console.error(error.message);
        }
    }
}

fetchAndPopulateData(characterQuery);

// Event listener for submit button
document.getElementById('submitButton').addEventListener('click', async () => {
    const userInput = document.getElementById('characterSearchInput').value.trim().toLowerCase();
    if (userInput === 'iron') {
        try {
            const data = await fetchData('iron%20man');
            updateCharacterCard(0, data);
            const userInputCard = document.querySelector('.userInputCard');
            userInputCard.style.display = 'flex'; 
            userInputCard.style.justifyContent = 'center'; 
            userInputCard.style.alignItems = 'center'; 
        } catch (error) {
            console.error('Failed to fetch Iron Man data:', error.message);
        }
    }
});
