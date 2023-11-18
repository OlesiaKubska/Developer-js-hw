// Array reduce

const number = [12, 23, 54, 123, 22, 90, 53, 80];

function sumEvenSubbOdd(arr) {
    return arr.reduce((count, currentNumber) => {
        if (currentNumber % 2 === 0) {
            count += currentNumber;
        } else {
            count -= currentNumber;
        }

        return count;
    }, 0);
}

console.log(sumEvenSubbOdd(number));