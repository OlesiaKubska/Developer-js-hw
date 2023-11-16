//task 3  Math-JS  random


function randomFromRange(min, max) {
    let randomNumber = Math.random();

    let maxNumber = max - min + 1;

    console.log(randomNumber);

    let result = randomNumber * maxNumber;
    console.log(result);
}

randomFromRange(2, 5);