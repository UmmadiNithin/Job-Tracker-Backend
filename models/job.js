const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ['Applied', 'Interviewed', 'Offer', 'Rejected'],
    default: 'Applied',
  },
  date: { type: Date, default: Date.now },
  link: { type: String }
});

module.exports = mongoose.model('Job', JobSchema);
