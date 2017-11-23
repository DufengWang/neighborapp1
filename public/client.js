// This file contains client (aka browser) side code. Please don't modify the below line;
// it is a flag for our linter.
/* global $, io */

$(document).ready(function () {
  // This code connects to your server via websocket;
  // please don't modify it.
  window.socketURL = 'http://localhost:3000';

  window.socket = io(window.socketURL);

  window.socket.on('connect', function () {
    console.log('Connected to server!');
  });

  $('.submission').click(function () {
    console.log('submitted');
  });

});