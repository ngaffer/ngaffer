const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');

var Experience = require('../../models/experience');

// Connect
mongoose.connect('mongodb://localhost:27017/ngaffer');

router.get('/test', (req, res, next) => {
  Experience.findOne({}, (err, doc) => {
    if (err) {
      return res.send('Error!');
    }
    res.sendFile('index.html', {title: doc});
  });
});

router.post('/test', (req, res, next) => {
  let company = req.body.company;
  let experience = new Experience({
    title: 'developer',
    company: company
  });
  experience.save(); // can call a callback function here err, result...
  res.redirect('/');
});

module.exports = router;
