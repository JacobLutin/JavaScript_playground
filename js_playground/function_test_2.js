(function(){

var a = 5;

var func = new Function('a', 'console.log(a)');

var func = function() {
	console.log(a);
}

func(1);

console.log(func.toString());

});
	
(function(){

var a = 1;

function getFunc() {
	var a = 2;

	var func = new Function('', 'console.log(a)');
	var func = function() { console.log(a) };

	return func;
}

console.log(toString());

});

(function(){

var a = 1;

function getFunc1() {

	a += 1
	console.log(a);

	function getFunc2() {

		a += 2;
		console.log(a);

		function getFunc3() {

			a += 3
			console.log(a);

			return getFunc1;

		}

		return getFunc3;
	}

	return getFunc2;
}

var s = 'getFunc1';

for (var i = 0; i < 10; i++) {
	s += '()'
};

s();

})();







