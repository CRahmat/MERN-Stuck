const express = require('express')

const contentsController = require('../controllers/contents')
const router = express();
router.post('/create', contentsController.createContent);
router.get('/details', contentsController.detailsContent);


module.exports = router;