function a() {

  function b() {
    return this;
  }

  return b;
}

var b = {};

console.log(b.toString());
