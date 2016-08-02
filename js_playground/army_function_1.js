function makeArmy() {

    shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function() {
            console.log(i);
        }
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();

for (var i = 0; i < army.length; i++) {
    console.log(army[i].toString());
}
