//d. Kopiowanie tablicy w odwrotnej kolejności

//Deklaracja tablicy
let array = [1, 6, 23, 8, 4, 8, 3, 7];

function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

console.log(reverseArray(array));