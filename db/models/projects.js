const mongoose = require('mongoose');
const db = require('../../db');
const table = 'Projects';

console.log(`connected to collection : "${table}"!`);

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  link: { type: String },
  createAt: { type: Date, default: Date.now }
});

ProjectSchema.statics.read = function () {
  return this.find().exec();
};

ProjectSchema.statics.create = function () {
  return this.create();
};

ProjectSchema.statics.update = function () {
  return this.update({}, {}, { upsert: true });
};

ProjectSchema.statics.deleteOne = function () {
  return this.deleteOne();
};

const Projects = mongoose.model('Projects', ProjectSchema);

module.exports = Projects;