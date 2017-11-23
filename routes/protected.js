var express = require('express');
var router = express.Router();

// Implement the routes.
router.get('/protected', function(req, res) {
  if (!req.session.username || req.session.username === '') {
    res.send('You tried to access a protected page');
  } else {
    res.render('protected', { username: req.session.username });
  }
});

// router.post('/protected', function(req, res) {
//   console.log('sos');
//   res.send('SOS');

// });


module.exports = router;
