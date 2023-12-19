// 6.
// Add new field: status
// Create Car status object with acceptable statuses (NEW, USED, REFUND)
// Add method changeStatus that accepts new status as a parameter
// Add static method to check if car is after return

const { CAR_STATUS } = require("./const");

class Car {
    wheels = 4;
    status = "NEW";

    constructor(accelaration, maxSpeed) {
        this.accelaration = accelaration;
        this.maxSpeed = maxSpeed;
        this.price = this.price;
        this.productionDate = new Date(this.productionDate);
        this.id = Date.now();
    }
    
    getSpeed(time) {
        console.log(time);
        const speed = this.accelaration * time;
        console.log();


//????
    }

    changePrice(newPrice) {
        if (typeof newPrice === "number") {
            this.price = newPrice;
        }

        throw new Error("Price must be a number");
    }

    changeStatus(newStatus) {
        console.log(Object.values(CAR_STATUS));
        if (Object.values(CAR_STATUS).includes(newStatus)) {
            this.status = newStatus;
        }
    }
    
}

const myCar = new Car(10, 200, 100_000);

console.log(myCar);
