// Implementacja wyszukiwania binarnego


let arr = [1, 6, 23, 8, 4, 8, 3, 7];

function binarySearch(arr, target) {
    let left = 0; //Zmienna left jest ustawiona na początek tablicy (0),
    let right = arr.length - 1; //a right na koniec tablicy (arr.length - 1).

    //Pętla ta będzie kontynuowana dopóki lewy wskaźnik (left) 
    //jest mniejszy lub równy prawemu wskaźnikowi(right), 
    //co oznacza, że obszar wyszukiwania nie został jeszcze zawężony do jednego elementu.
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); //Znajduje środkowy indeks obszaru wyszukiwania. Użycie Math.floor gwarantuje, że wynik jest liczbą całkowitą.
        if (arr[mid] === target) {
            return mid; //Jeśli element w środku (arr[mid]) jest równy szukanemu elementowi (target), zwracany jest jego indeks.
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Element nie znaleziony
}

console.log(binarySearch(arr, 8));