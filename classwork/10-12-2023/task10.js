// 10.
// Add new method orderFromFactory
// Method should be asynchronous
// Method should accept cars amount to order as a parameter
// Handle error in this method in case something goes wrong
const Car = require('./task6');
const { CAR_STATUS } = require("./const");
const Car = require('./task6');

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

    acceptReturnedCar(car) {
        if (!Car.isCar(car)) {
            throw new Error("Not a car");
        }
        car.changeStatus(CAR_STATUS.REFUND);
        this.#listOfCars.push(car);
    }

    async orderCars(numberOfCars) {
        try {
            const orderedCars = await getFromFactory(numberOfCars);
            orderedCars.forEach(car => this.addCar(car));
            console.log(`${orderedCars.length} cars ordered and added to inventory.`);
            return orderedCars;
        } catch (e) {
            console.error(e);
            return this.#listOfCars;
        }
    }

    get totalPrice() {
        return this.#listOfCars.reduce((total, car) => total + car.price, 0);
    }

    static isCarAfterRefund(car) {
        return Car.isRefund(car);
    }
}

const myDealer = new CarDealer();