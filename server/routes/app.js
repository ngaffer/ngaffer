const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://localhost:27017/ngaffer');

router.get('/test', function(req, res, next) {
  res.send('hello');
});

router.post('/test', function(req, ress, next) {
  let email = req.body.email;
  let user = {
    firstName: 'Natasha',
    lastName: 'Gaffer',
    password: 'testpass',
    email: email
  };
  user.save();
  res.redirect('/');
});

module.exports = router;
