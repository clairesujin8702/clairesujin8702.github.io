const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.post.get);
router.post('/', controller.post.post);
router.put('/', controller.post.put);
router.delete('/', controller.post.delete);

module.exports = router;