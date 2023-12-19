// // 3.
// Write a class that will produce car objects
// Created object should have fields: acceleration, maxSpeed, wheels
// Created object should have method getSpeed


class Car {
    wheels = 4;

    constructor(acceleration, maxSpeed) {
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
    }

    getSpeed(time) {
        const calculatedSpeed = this.acceleration * time;
        return calculatedSpeed >= this.maxSpeed ? this.maxSpeed : calculatedSpeed;
    }
}

const myCar = new Car(3, 150);