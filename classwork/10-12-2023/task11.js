// 11.
// Add new method sell
// Method should accept id as a parameter end return found car
// Method should also remove car from storage, create transaction history entry in new private transactionsHistory field
// Method should include discount from base car price

const { CAR_STATUS } = require("./const");
const { getFromFactory } = require("./fake-api");
const Car = require('./task6');

class CarDealer {
    #listOfCars = [];
    #transactionHistory = [];

    constructor(name) {
        this.#listOfCars = [];
        this.#transactionHistory = [];
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

    sell(id) {
        const founCar = this.#listOfCars.find((car) => car.id === id);
        if (!founCar) {
            throw new Error("Sorry this car has already been sold");
        }
        this.removeCar(id);
        this.#useDicount(founCar);
        this.#transactionHistory.push(founCar);
        return founCar;
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

    #useDicount(car) {
        if (car.price >= 200_000) {
            car.changePrice(car.price * 0.9);
        } else if (car.price >= 150_000) {
            car.changePrice(car.price * 0.95);
        } else {
            car.changePrice(car.price * 0.98);
        }
    }
}

const myDealer = new CarDealer();