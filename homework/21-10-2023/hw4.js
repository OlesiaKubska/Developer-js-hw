function getFibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let arr = getFibonacci(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log(getFibonacci(5)); //[ 0, 1, 1, 2, 3 ]