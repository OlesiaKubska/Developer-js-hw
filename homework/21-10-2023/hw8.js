//Implementacja sortowania przez scalanie (mergeSort) 

let arr = [1, 6, 23, 8, 4, 8, 3, 7];

function mergeSort(arr) {
    if (arr.length <= 1) return arr; //Jeśli długość tablicy jest mniejsza lub równa 1, nie ma potrzeby sortowania

    const middle = Math.floor(arr.length / 2); //Tablica jest dzielona na dwie mniejsze tablice:
    const left = arr.slice(0, middle); 
    const right = arr.slice(middle); 

    return merge(mergeSort(left), mergeSort(right)); //Funkcja mergeSort jest wywoływana rekurencyjnie dla obu połówek
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Elementy z obu tablic są porównywane. 
    //Mniejszy element z obu tablic jest dodawany do result, 
    //a indeks odpowiedniej połówki jest zwiększany.
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
// Po zakończeniu głównej pętli while, mogą pozostać jeszcze 
//nieprzetworzone elementy w jednej z tablic(left lub right). 
//Są one dodawane do result.
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(arr));