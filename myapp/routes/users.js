var express = require('express');
var router = express.Router();

// users = [
//     {
//         id: 1,
//         name: 'John'
//     },
//     {
//         id: 2,
//         name: 'Jacob'
//     }
// ];

/* GET users listing. */

router.get('/', function(req, res, next) {
  // res.render('users/index', { title: 'Users', users: users });
  res.send('hello!');
  // res.send('lol');
});

function getUser(id) {
    var user;
    for (var i in users) {
        if (users[i].id == id) {
            user = users[i];
            break;
        }
    }
    return user;
}

router.get('/:id', function(req, res, next) {
    var user = getUser(req.params.id);
    if (user) {
        res.send('<h1>Hello, my name is ' + user.name + '!</h1>');
    } else {
        res.send('there is no such user :(');
    }
});

module.exports = router;
