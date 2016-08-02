function makeBuffer() {
    var text = '';

    function buffer(value) {
        if (arguments.length == 0) {
            return text;
        }
        text += value;
    }

    buffer.clear = function() {
        text = '';
    }

    return buffer;
}

var buffer = makeBuffer();

buffer('lol');
buffer(1);
buffer('aaa');
buffer.clear();

console.log(buffer());
