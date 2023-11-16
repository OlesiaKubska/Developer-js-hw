//g. Suma nieparzystych elementów

//Deklaracja tablicy
let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

function sumOddElements(arr) {
    return arr.reduce((acc, val) => val % 2 !== 0 ? acc + val : acc, 0);
}

console.log(sumOddElements(arr));