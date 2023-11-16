//Task 5 linear.js

let arr = [1, 5, 8, 21, 94, 4];

function linearSearch(array, targetElement) {
    for (let currentNumber of array) {
        if (currentNumber === targetElement) {
            return targetElement;
        }
    }

    return "Not found";
}


console.log(linearSearch(arr, 21));