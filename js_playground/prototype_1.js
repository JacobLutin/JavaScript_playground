function Foo() {
  this.value = 42;
}

Foo.prototype = {
  method: function() {}
};

function Bar() {}

// Установим значением прототипа Bar новый экземпляр Foo
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World!';

// Убедимся, что Bar является действующим конструктором
Bar.prototype.constructor = Bar;

var test = new Bar();  // создадим новый экзэмпляр bar

for (var key in test) {
  console.log('%s = %s', key, test.key);
}

// Цепочка прототипов, которая получается в результате
/*
test [instance of Bar]
    Bar.prototype [instance of Foo]
        { foo: 'Hello World' }
        Foo.prototype
            { method: ... }
            Object.prototype
                { toString: ... и т.д.  }
*/
