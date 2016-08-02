function Animal(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype = {
    stop: function() {
        this.speed = 0;
        console.log("Животное " + this.name + " стоит")
    },
    run: function(speed) {
        if (arguments.length != 0) {
            this.speed += speed;
        }
        console.log("Животное " + this.name + " бежит со скоростью " + this.speed);
    }
}

function Rabbit(name, weight) {
    Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.jump = function() {
    this.speed++;
    console.log("Животное " + this.name +" совершило прыжок");
}
Rabbit.prototype.run = function(speed) {
    this.jump();
    Animal.prototype.run.apply(this, arguments);
}

var rabbit = new Rabbit('rabbit', 100);
rabbit.jump();
rabbit.jump();
rabbit.run(10);
rabbit.run();
// rabbit.run();
