const express = require('express')

const contentsController = require('../controllers/contents')
const router = express.Router();
router.post('/create', contentsController.createContent);


module.exports = router;