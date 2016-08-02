function makeCounter(){
	var currentCounter = 1;

	return {
		getNext: function() {
			return currentCounter++;
		},
		set: function(num) {
			return currentCounter = num;
		},
		reset: function() {
			return currentCounter = 1;
		}
	};
}

var counter = makeCounter();

console.log(counter.getNext());
console.log(counter.getNext());
console.log(counter.getNext());

console.log(counter.set(10));
console.log(counter.getNext());
console.log(counter.getNext());

console.log(counter.reset());
console.log(counter.getNext());
console.log(counter.getNext());
