var express = require('express');
var router = express.Router();
var User = require('../middlewares/User');

// Implement the routes.
router.get('/editProfile', function(req, res, next) {
  res.render('editProfile');
});

router.post('/editProfile', function(req, res) {

	User.findOne({ username: req.session.username }, function(e, user) {
	  if (e) throw e;

	  if (user) {
	  		console.log("HIHI" + user);
	  		
	  		user.editProfile('test', 'test', 'test', 'test', 'test', function(err) {
	  			if (err) res.send('error' + err);
    			else res.send('profile edit successful ' + req.body.username);
	  		})
	  }
	});

	res.send('no user')

});


module.exports = router;