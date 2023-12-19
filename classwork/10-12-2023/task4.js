// 4.
// Add new fields:
// id
// price
// production date
// and a method changePrice

class Car {
    wheels = 4;

    constructor(acceleration, maxSpeed, price, productionDate) {
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
        this.price = price;
        this.productionDate = new Date(productionDate);
        this.id = Date.now();
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
    
}

const myCar = new Car(10, 200, 100_000);

console.log(myCar);
