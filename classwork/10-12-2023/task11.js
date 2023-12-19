// 11.
// Add new method sell
// Method should accept id as a parameter end return found car
// Method should also remove car from storage, create transaction history entry in new private transactionsHistory field
// Method should include discount from base car price

const { CAR_STATUS } = require("./const");

class CarDealer {
    #listOfCars = [];
    #transactionHistory = [];

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

    sell(id) {
        const founCar = this.#listOfCars.find((car) => car.id === id);
        if (!founCar) {
            throw new Error("");
        }
        this.removeCar(id);
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