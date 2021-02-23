const Projects = require('../../../db/models/projects.js');

module.exports = {
  get: (req, res) => {
    Projects.read()
      .then()
      .catch();
  },
  post: (req, res) => {
    Projects.create()
      .then()
      .catch();
  },
  put: (req, res) => {
    Projects.update()
      .then()
      .catch();
  },
  delete: (req, res) => {
    Projects.deleteOne()
      .then()
      .catch();
  }
};