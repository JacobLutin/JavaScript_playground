 function makeBuffer() {
      var text = '';

      return function(piece) {
        if (arguments.length == 0) { // вызов без аргументов
          return text;
        }
        text += piece;
      };
    };

var buffer = makeBuffer();

text = 's';
console.log(text + null);

buffer(1);
buffer('lol');
buffer(null);
buffer(false);
buffer(20);
buffer('aaaa');
console.log(buffer())
