const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://localhost:27017/ngaffer');

const experiences = [
  { title: 'Developer', company: 'Target' },
  { title: 'Engineer', company: 'Mischief' }
];

router.get('/experiences', (req, res) => {
  res.send(experiences);
});

module.exports = router;
