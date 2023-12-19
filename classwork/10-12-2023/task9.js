// 9.
// Add new methods
// A method to accept car return, method should mark car as refund
// Add a static method, that would check if a given car is a refund car (it will have ”REFUND” status)

const { CAR_STATUS } = require("./const");

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

    get availableCars() {

    }

    get totalPrice() {
        
    }
}

const myDealer = new myDealer;