// mapping

const characters = require("");

function getCharactersFromLocation(characters, location) {
    return characters.filter((character) => {
        return character.location.name.includes(location);
    }).sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    });
}


console.log(getCharactersFromLocation(characters, "Earth"));