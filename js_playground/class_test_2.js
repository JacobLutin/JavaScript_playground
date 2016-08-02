fun

function Car(brand, speed, price, mileage) {
    this.brand = brand;
    this.speed = speed;
    this.price = price;
    if (mileage) {
        this.used = true;
        this.mileage = mileage;
    } else {
        this.used = false;
    }
}

Car.prototype = {
    drive: function(miles) {
        this.used = true;
        this.mileage ? this.mileage += miles : this.mileage = miles;
    }
}

var car = new Car('BMW', 120, 3000);

console.log(car);
car.drive(100);
console.log(car);
