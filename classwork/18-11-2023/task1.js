// Array map

const myArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

function multiplayOddsBy2(arr) {
    // return arr.map((number, index) => (index % 2 !== 0 ? number * 2 : number)); To samo, co na dalej

    return arr.map((number, index) => {
        if (index % 2 !== 0) {
            return number * 2;
        }

        return number;
    })
}

console.log(multiplayOddsBy2(myArray));