// 8.
// Add new methods
// A method to add a car (that would check if the input object is a car)
// A method to remove a car by ID
// A getter that would return the total price of all cars in the storage
const Car = require('./task6.js');

class CarDealer {
    #listOfCars = [];

    constructor(name) {
        this.name = name;
    }

    get availableCars() {
        console.log("GETTER");
        return this.#listOfCars;
    }

    addCar(newCar) {
        if (!Car.isCar(newCar)) {
            throw new Error("Not a car");
        }
        this.#listOfCars.push(newCar);
    }

    removeCar(id) {
        this.#listOfCars = this.#listOfCars.filter((car) => car.id !== id);
    }

    get totalPrice() {
        return this.#listOfCars.reduce((total, car) => total + car.price, 0);
    }
}

const myDealer = new CarDealer();
