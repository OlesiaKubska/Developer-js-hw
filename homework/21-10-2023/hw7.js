// Implementacja sortowania przez wybieranie

let arr = [1, 6, 23, 8, 4, 8, 3, 7];

function selectionSort(arr) {
    //Ta pętla przechodzi przez każdy element tablicy arr. Dla każdego elementu i, 
    //algorytm szuka najmniejszego elementu w pozostałej części tablicy
    //(od indeksu i do końca tablicy).
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; //Zmienna minIndex przechowuje indeks najmniejszego znalezionego do tej pory elementu
        for (let j = i + 1; j < arr.length; j++) { //W tej wewnętrznej pętli, algorytm szuka najmniejszego elementu w niesortowanej części tablicy. 
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        //Po znalezieniu najmniejszego elementu w niesortowanej części tablicy, 
        //algorytm zamienia go miejscami z elementem na obecnej pozycji i. 
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort(arr));