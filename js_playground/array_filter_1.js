function filter(arr, func) {

    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function inBetween(a, b) {
    return function(x) {
        return a <= x && x <= b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) != -1;
    };
}

var array = [1, 2, 3, 4, 5, 6, 7, 10];

console.log(filter(array, function(a) {
    return a % 2 == 0;
}));

console.log(filter(array, inBetween(3, 7)));
console.log(filter(array, inArray([0, 9, 4, 3, 7])));
