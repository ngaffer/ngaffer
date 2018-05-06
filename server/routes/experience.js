const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Experience = require('../../models/experience');

// Connect
mongoose.connect('mongodb://localhost:27017/ngaffer');

const experiences = [
  { title: 'Developer', company: 'Target', kind: 'experience' },
  { title: 'Engineer', company: 'Mischief', kind: 'experience' }
];

// assume "/experiences" as the path
router.get('', (req, res) => {
  // res.send(experiences);
  Experience.find()
    .exec((err, experiences) => {
      if (err) {
        return experiences.status(500).json({
          title: 'An error occurred.',
          err: err
        });
      }
      res.status(200).json({
        message: 'Success.',
        obj: experiences
      });
    });
});

module.exports = router;
