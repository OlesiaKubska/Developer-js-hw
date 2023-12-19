// 13.
// Add getRemainingBattery method that will return % battery left after n amount of seconds
// This method should use a private method that will calculate battery drainage
// per second (let’s say its acceleration * batteryCapacity / 100000)
const Car = require("./task6");

class ElectricCar extends Car {
    constructor(accelaration, maxSpeed, price, batterCapacity, productionDate) {
        super(accelaration, maxSpeed, price, productionDate);

        this.batterCapacity = batterCapacity;
    }

    getRemainingBattery(time) {
        return (
            ((this.batteryCapacity - this.#calculateBatteryDrainagePerSec() * time) /
                this.batteryCapacity) *
            100
        );
    }

    #calculateBatteryDrainagePerSec() {
        return (this.batteryCapacity * this.acceleration) / 100000;
    }
}

const myElectric = new ElectricCar(20, 300, 200_000, 10000);
console.log(myElectric);
