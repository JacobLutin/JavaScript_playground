function CoffeeMachine(power) {
    this.power = power;
    this.amountWater = 0;
}

CoffeeMachine.prototype = {
    waterHeatCapacity: 4200,
    getTimeToBoil: function() {
        return this.waterHeatCapacity * this.amountWater * 80 / this.power;
    },
    setAmountWater: function(water) {
        this.amountWater = water;
    },
    run: function() {
        setTimeout(function(){
            console.log('Coffee is prepared!');
        }, this.getTimeToBoil());
    }
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setAmountWater(50);
// coffeeMachine.run();
