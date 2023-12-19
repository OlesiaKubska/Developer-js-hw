
// 4.
// Add new fields:
// id
// price
// production date
// and a method changePrice



class Car {
    wheels = 4;

    constructor(accelaration, maxSpeed) {
        this.accelaration = accelaration;
        this.maxSpeed = maxSpeed;
        this.price = this.price;
        this.productionDate = new Date(this.productionDate);
        this.id = Date.now();
    }
    
    getSpeed(time) {
        console.log(time);

//????
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
