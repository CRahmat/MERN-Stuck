const express = require('express');
const {body} = require('express-validator');

const router = express.Router();
const contentsController = require('../controllers/contents')
router.post('/create',[
body('title').isLength({min: 5}).withMessage('Data minimal 5 characters'), 
body('content').isLength({min: 120}).withMessage('Data minimal 120 characters')
],
contentsController.createContent);


module.exports = router;