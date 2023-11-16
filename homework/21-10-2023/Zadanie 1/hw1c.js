//b. Suma pierwszego i ostatniego elementu

//Deklaracja tablicy
let array = [1, 6, 23, 8, 4, 8, 3, 7];

function sumFirstLast(array) {
    
    return array[0] + array[array.length - 1];
    // return array[0] + array[7];
}

console.log(sumFirstLast(array));