'use strict';

class God {

  constructor(value) {
    this.value = 'lol';
  }
}

class Person extends God {

  constructor(name){
    this.name = name;
  };

  getName(){
    console.log(this.name);
  }

  timers(){
    setTimeout(function(){
      console.log(this.name);
    }, 2000);

    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  }
}

var person = new Person('jacob');

person.getName();