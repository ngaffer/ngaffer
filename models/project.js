const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  samples: [{
    file: {type: String, required: true},
    caption: {type: String},
    kind: {type: String}
  }],
  experience: {type: Schema.Types.ObjectId, ref: 'Experience'}
});

module.exports = mongoose.model('Project', projectSchema); //collection will be plural "projects"
