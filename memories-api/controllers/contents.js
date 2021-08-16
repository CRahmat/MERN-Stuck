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

exports.getAllContents = (req, res, next) => {
    ContentPost.find()
    .then(result => {
        res.status(200).json({
            message: "Successfully to get all data",
            data: result
        })
    })
    .catch( err => {
        next(err);
    })
}

exports.getContentById = (req, res, next) => {
    ContentPost.findById(req.params.contentId)
    .then(result => {
        if(!result){
            const error = new Error('Data tidak ditemukan');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: "Successfully to get data",
            data: result
        })
    })
    .catch( err => {
        next(err);
    })
}

exports.updateContent = (req, res, next) => {
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
    const contentId = req.params.contentId;

    ContentPost.findById(contentId)
    .then(post => {
        if(!post){
            const err = new Error('Data Not Found');
            err.status = 422;
            throw err;
        }

        post.title = title;
        post.content = content;
        post.image = image;
        return post.save();

    })
    .then(result => {
        res.status(200).json({
            message: "Update Data Successfully",
            data: result
        })
    }).catch(err => {
        next(err);
    })
}