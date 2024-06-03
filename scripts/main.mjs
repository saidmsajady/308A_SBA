import { fetchData, fetchData2 } from './api.mjs';
import { updateCharacterCard } from './dom.mjs';

const characterQuery = [
    "?q=captain%20america",
    "?q=winter%20",
    "?q=black%20widow",
    "?q=black%20panther",
    "?q=Spider-man",
    "?q=loki"
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
