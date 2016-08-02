function sumTo(n) { // обычный цикл 1+2+...+n
  var result = 0;
  for (var i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

function sumToRec(n) { // рекурсия sumToRec(n) = n+SumToRec(n-1)
  return n == 1 ? 1 : n + sumToRec(n - 1);
}

var timeLoop = Data.now();
for (var i = 1; i < 1000; i++) sumTo(1000); // цикл
timeLoop = performance.now() - timeLoop;

var timeRecursion = performance.now();
for (var i = 1; i < 1000; i++) sumToRec(1000); // рекурсия
timeRecursion = performance.now() - timeRecursion;

alert( "Разница в " + (timeRecursion / timeLoop) + " раз" );
