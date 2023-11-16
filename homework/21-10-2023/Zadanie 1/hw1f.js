//f. Przetasowanie tablicy

//Deklaracja tablicy
let array = [1, 6, 23, 8, 4, 8, 3, 7];

function shuffleArray(array) {
    let result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

console.log(shuffleArray(array));