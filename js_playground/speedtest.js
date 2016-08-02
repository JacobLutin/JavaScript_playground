function SpeedTest(testImplement, testParams, repetitions) {
    this.testImplement = testImplement;
    this.testParams = testParams;
    this.repetitions = repetitions;
    this.average = 0;
}

// SpeedTest.prototype = {
//     startTest: function()
// }

SpeedTest.prototype.startTest = function () {
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++) {
        beginTime = +new Date();
        this.testImplement(this.testParams);
        endTime = +new Date();
        sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    console.log("The average speed is " + this.average);
};

function sqr(x) {
    return x * ;
}

var test = new SpeedTest(sqr, 1, 100000);
test.startTest();
