var ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log(this.step);
        return this;
    }
};

ladder.showStep();
ladder.up().up().up().down().showStep();

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
