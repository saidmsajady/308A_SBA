import { fetchData } from './api.mjs';
import { updateCharacterCard } from './dom.mjs';

const characterQuery = [
    "captain%20america",
    "winter%20",
    "black%20widow",
    "black%20panther",
    "Spider-man",
    "loki"
];

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