const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  title: {type: String, required: true},
  company: {type: String, required: true}
  // startDate: {type: String, required: true},
  // endDate: {type: String, required: true},
  // description: {type: String, required: true},
  // techLabels: [{type: String}],
  // kind: {type:String, required: true},
  // projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]
});

module.exports = mongoose.model('Experience', experienceSchema); //collection will be plural "experiences"
