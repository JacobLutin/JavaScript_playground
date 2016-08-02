var number = function(array){
    var arr = [];
    var i = 0;
    for (st in array) {
        arr.push(++i + ': ' + array[st]);
    }
    return arr;
}

console.log(number(['a', 'b', 'c']));
