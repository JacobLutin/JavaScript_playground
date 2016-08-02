"use strict";

var obj, method;

obj = {
  go: function() { console.log(this); }
};

function test() {
    obj.go();            // (1) object

    (obj.go)();          // (2) object

    (method = obj.go)();      // (3) undefined

    (obj.go || obj.stop)(); // (4) undefined
}

// test();

var name = 'obj';

obj = {
    name: 'lol',
    user: {
      name: "Василий",
      export: this
    }
}

var user = obj.user;

console.log(user.export.name);
