const {validationResult} = require('express-validator');
const ContentPost = require('../models/content')

exports.createContent = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error('Invalid Value/Length');
        err.status = 400;
        err.message = errors.array();
        throw err;
    };

    if(!req.file){
        const err = new Error('You Must Upload Some Image');
        err.status = 422;
        err.message = errors.array();
        throw err;
    };
    const title = req.body.title;
    const content = req.body.content;
    const image = req.file.path;

    const PostContent = new ContentPost(
        {
            title: title,
            content: content,
            image: image,
            author: {uid:1, fullName: "Catur Rahmat"}
        });
    
    PostContent.save().then(
        result => {
        const save = {
            message: 'Create Content Successfully',
            data: result
        }
        res.status(201).json(save);
        }).catch(
            err => {
                console.log('err', err);
            }
        );
}