const Posts = require('../../../db/models/posts.js');

module.exports = {
  get: (req, res) => {
    Posts.read()
      .then()
      .catch();
  },
  post: (req, res) => {
    Posts.create()
      .then()
      .catch();
  },
  put: (req, res) => {
    Posts.update()
      .then()
      .catch();
  },
  delete: (req, res) => {
    Posts.deleteOne()
      .then()
      .catch();
  }
};