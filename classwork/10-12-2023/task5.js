// 5.
// Add static method that for a given object, will check if the object is a car
const { CAR_STATUS } = require("./const");

class Car {
    wheels = 4;

    constructor(acceleration, maxSpeed, price, productionDate) {
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
        this.price = price;
        this.productionDate = new Date(productionDate);
        this.id = Date.now();
        this.status = CAR_STATUS.NEW;
    }
    
    getSpeed(time) {
        const calculatedSpeed = this.acceleration * time;
        return calculatedSpeed >= this.maxSpeed ? this.maxSpeed : calculatedSpeed;
    }

    changePrice(newPrice) {
        if (typeof newPrice === "number") {
            this.price = newPrice;
        }
        throw new Error("Price must be a number");
    }
    
    static isCar(inputObj) {
        return inputObj instanceof Car;
    }

    static isRefund(car) {
        if (!Car.isCar(car)) {
            throw new Error("Input should be a car!");
        }
        return car.status === CAR_STATUS.REFUND;
    }
}

const myCar = new Car(10, 200, 100_000);

console.log(myCar);
