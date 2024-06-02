async function fetchData() {
    const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd1ed2eb844mshb4c39ce12a01b36p11f486jsn03d60747374c',
            'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const movieTitle = data.Search[0].Title; 
        document.getElementById('movieTitle').innerText += ` ` + movieTitle;
    } catch (error) {
        console.error(error);
    }
}

fetchData();