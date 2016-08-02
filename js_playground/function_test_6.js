"use strict";

var user = {
    name: 'John',
    sayHi: function() { console.log('Hi, ' + this.name); },
    sayBye: function() { console.log('Bye!'); }
};

// if (user.name == 'John') user.sayHi(); else user.sayBye();
// user.name == 'John' ? user.sayHi() : user.sayBye();

// (user.name == 'John' ? user.sayHi : user.sayBye )();
// user['sayHi']();

var arr = ['a', 'b'];

arr.push(function() {
    // console.log(this);
    var array = ['lol', 'ahah', 'lol'];
    return array;
}());

// console.log(arr[2]()[2]);

var obj, method;

obj = {
  go: function() { console.log(this.toString()); }
};

obj.go();            // (1) object

(obj.go)();          // (2) object

(method = obj.go)();      // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

/*




*/
