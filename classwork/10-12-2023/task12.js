// 12.
// Create a class - ElectricCar that will extend the Car class
// Add a new field: batteryCapacity
const Car = require("./task6");

class ElectricCar extends Car {
    constructor(accelaration, maxSpeed, price, batterCapacity, productionDate) {
        super(accelaration, maxSpeed, price, productionDate);

        this.batterCapacity = batterCapacity;
    }
}

const myElectric = new ElectricCar(20, 300, 200_000, 10000);
console.log(myElectric);
