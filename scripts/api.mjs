export async function fetchData(characterQuery) {
    const url = `https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name${characterQuery}`;
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
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data from the API');
    }
}

export async function fetchData2(characterNumberInput) {
    const url = 'https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/characters/' + characterNumberInput;
    const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd1ed2eb844mshb4c39ce12a01b36p11f486jsn03d60747374c',
        'x-rapidapi-host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
}

