//h. Dodawanie elementów parzystych i odejmowanie nieparzystych

//Deklaracja tablicy
let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

function addEvenSubtractOdd(arr) {
    return arr.reduce((acc, val) => val % 2 === 0 ? acc + val : acc - val, 0);
}

console.log(addEvenSubtractOdd(arr));