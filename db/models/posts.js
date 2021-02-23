const mongoose = require('mongoose');
const db = require('../../db');
const table = 'posts';

console.log(`connected to collection : "${table}"!`);

const postSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  name: { type: String },
  content: { type: String, required: true },
  email: { type: String, unique: true },
  image: { type: String },
  createAt: { type: Date, default: Date.now }
});

postSchema.statics.read = function () {
  return this.find().exec();
};

postSchema.statics.create = function () {
  return this.create();
};

postSchema.statics.update = function () {
  return this.update({}, {}, { upsert: true });
};

postSchema.statics.deleteOne = function () {
  return this.deleteOne();
};

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;