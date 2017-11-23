var express = require('express');
var app = express();
var uuid = require('node-uuid');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var login = require('./routes/login')
var register = require('./routes/register')
var protected = require('./routes/protected')
var editProfile = require('./routes/editProfile')

// Serve static pages
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use('public', express.static(__dirname + '/public'));


// Generate a random cookie secret for this app
var generateCookieSecret = function () {
  return 'iamasecret' + uuid.v4();
};
// TODO (Part 3) - Use the cookieSession middleware. The above function
// can be used to generate a secret key. Make sure that you're not accidentally
// passing the function itself - you need to call it to get a string.
app.use(cookieSession({
  name: 'session',
  secret: generateCookieSecret()
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  if (req.session.username && req.session.username !== '') {
    res.redirect('/protected');
  } else {
    res.render('index');
  }
});

// Mount your routers. Please use good style here: mount a single router per use() call,
// preceded only by necessary middleware functions.
// DO NOT mount an 'authenticating' middleware function in a separate call to use().
// For instance, the API routes require a valid key, so mount checkValidKey and apiRouter in the same call.
app.use('/', login);
app.use('/', register);
app.use('/', protected);
app.use('/protected', editProfile);

// Mount your error-handling middleware.
// Please mount each middleware function with a separate use() call.
// app.use(handleError);
// app.use(pageNotFound);

module.exports = app;
