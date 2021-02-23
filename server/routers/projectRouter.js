const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.project.get);
router.post('/', controller.project.post);
router.put('/', controller.project.put);
router.delete('/', controller.project.delete);

module.exports = router;