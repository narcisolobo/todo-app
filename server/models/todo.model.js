const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter title.']
  },
  isComplete: {
    type: Boolean
  }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);