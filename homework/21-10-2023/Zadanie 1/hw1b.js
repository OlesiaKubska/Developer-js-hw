//b. Suma wszystkich elementów tablicy

//Deklaracja tablicy
let array = [1, 6, 23, 8, 4, 8, 3, 7];

function sumArray(array) {
    let sum = 0; //zmienna sum, która jest inicjalizowana wartością 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; //skrót od sum = sum + array[i]
    }
    return sum;
}

//************************** */
//funkcja przyjmuje jeden argument, array, 
//i używa metody reduce do obliczenia sumy wszystkich elementów tej tablicy
// function sumArray(array) {
//     return array.reduce((acc, val) => acc + val, 0);
// }

console.log(sumArray(array));