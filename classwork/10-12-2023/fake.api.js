const Car = require('./car-class');

function getFromFactory(amountOfCars) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amountOfCars > 5) {
                reject("To many cars ordered");
            } else {
                resolve([...Array(amountOfCars)].map(() => new Car(10, 200, 150_000)));
            }
        }, 3000);
    });
}

module.exports = { getFromFactory };