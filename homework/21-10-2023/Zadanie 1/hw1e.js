//e. Losowy wybór elementów i zwrócenie najmniejszego

//Deklaracja tablicy
let array = [1, 6, 23, 8, 4, 8, 3, 7];

function randomMin(array, attempts) {
    let randomValues = [];
    while (attempts-- > 0) {
        randomValues.push(array[Math.floor(Math.random() * array.length)]);
    }
    return Math.min(...randomValues);
}

// console.log(randomMin(array));