// Chaining

const number = [4, 1, 3, 2, 12, 3, 29, 4, 6, 34, 16, 28];

const result = number
    .map((number) => number * 2)
    .filter(number => number < 40)
    .sort((a, b) => b - a);

console.log(result);