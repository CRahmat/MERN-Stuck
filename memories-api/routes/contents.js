const express = require('express');
const {body} = require('express-validator');

const router = express.Router();
const contentsController = require('../controllers/contents')
router.post('/create',[
body('title').isLength({min: 5}).withMessage('Data minimal 5 characters'), 
body('content').isLength({min: 120}).withMessage('Data minimal 120 characters'),
body('content').isLength({min: 1}).withMessage('Image must be uploaded')
],contentsController.createContent);

router.get('/data', contentsController.getAllContents);
router.get('/data/:contentId', contentsController.getContentById);
router.put('/data/:contentId',[
    body('title').isLength({min: 5}).withMessage('Data minimal 5 characters'), 
    body('content').isLength({min: 120}).withMessage('Data minimal 120 characters'),
    body('content').isLength({min: 1}).withMessage('Image must be uploaded')
    ], contentsController.updateContent);

module.exports = router;