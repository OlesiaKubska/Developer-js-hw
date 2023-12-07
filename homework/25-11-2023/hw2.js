//2.	Using https://rickandmortyapi.com/api fetch all characters from episode 7.
//a.	documentation can be found here: https://rickandmortyapi.com/documentation/#rest

const API_URL = "https://rickandmortyapi.com/api/episode";

async function getCharacters(episodeNumber) {
    try {
        const response = await fetch(`${API_URL}/${episodeNumber}`);
        const episode = await response.json();
        const characterPromises = episode.characters
            .map(url => fetch(url)
            .then(res => res.json()));
        return Promise.all(characterPromises);
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}

console.log(getCharacters(7));