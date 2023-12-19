// 7.
// Create a class - Car Dealer
// Class should have name field
// It should have a private field where cars are stored
// A getter availableCars to see all available cars for sell




class CarDealer {
    #listOfCars = [];

    constructor(name) {
        this.name = name;
    }

    get availableCars() {
        console.log("GETTER");
        return this.#listOfCars;
    }

    set availableCars(car) {
        console.log("SETTER");
        if(!Car.isCar(car)) {
            throw new Error("Not a Car");
        }

        this.#listOfCars.push(car);

    }
}

const myDealer = new myDealer;