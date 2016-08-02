var Plugboard = function(wires) {
    if (wires)
        wires = wires.split('');
    else
        wires = [];

    this.process = function(wire) {
        i = wires.indexOf(wire);
        if (i > -1)
            if (i % 2 == 0)
                return wires[i+1]
            else
                return wires[i-1]
        else
            return wire
    }
}

var plugboard = new Plugboard('ABCDEFGHIJKLMNOPQRST');

console.log( plugboard.process("A") )
console.log( plugboard.process("B") )
console.log( plugboard.process("X") )
console.log( plugboard.process(".") )
