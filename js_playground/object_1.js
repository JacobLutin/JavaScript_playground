var object = {
    a: 1,
    b: 2,
    c: 3
};

object.a = undefined;
object.b = null;
delete object.c;

for (var i in object) {
    if (object.hasOwnProperty(i)) {
        console.log('%s: %s', i, object[i]);
    }
}
