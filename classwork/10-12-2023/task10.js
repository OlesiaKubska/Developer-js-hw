// 10.
// Add new method orderFromFactory
// Method should be asynchronous
// Method should accept cars amount to order as a parameter
// Handle error in this method in case something goes wrong

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

    async orderCars(numberOfCars) {
        try {
            const orderedCars = await getFromFactory(numberOfCars);
            console.log(orderedCars);
        } catch {

        }

    }



    get availableCars() {

    }

    get totalPrice() {
        
    }
}

const myDealer = new myDealer;