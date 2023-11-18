// json character

const characters = require("");

function findStatus(characters, status) {
    return characters.filter((character) => {
        if (character.status === status) {
            return true;
        }
        return false;
    }).length;
}

console.log();