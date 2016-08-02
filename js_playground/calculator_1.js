var calculator = {
    read: function(a, b) {
        this.a = a;
        this.b = b;
    },
    readWithPrompt: function() {
        this.a = +prompt();
        this.b = +prompt();
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
}

calculator.read(3, 4);
console.log(calculator.sum());
console.log(calculator.mul());
