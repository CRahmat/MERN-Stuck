const {validationResult} = require('express-validator');
const ContentPost = require('../models/content');
const path = require('path');
const fs = require('fs');

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
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 4;
    let totalItems;

    ContentPost.find()
    .countDocuments()
    .then(count => {
        totalItems = count;
        return ContentPost.find()
        .skip((parseInt(currentPage) - 1 ) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then(result => {
        res.status(200).json({
            message: "Successfully to get all data",
            data: result,
            total_data: parseInt(totalItems),
            current_page: parseInt(currentPage)
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
        removeImage(post.image);
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

exports.deleteContent = (req, res, next) => {
    const contentId = req.params.contentId;

    ContentPost.findById(contentId)
    .then(result => {
        if(!result){
            const error = new Error('Data tidak ditemukan');
            error.errorStatus = 404;
            throw error;
        }
        removeImage(result.image);
        return ContentPost.findByIdAndRemove(contentId);
    })
    .then(result => {
        res.status(400).json({
            message: "Delete Data Successfully",
            filePath: result.image,
            data: result
        })
    })
    .catch(err => {
        next(err);
    })
}

const removeImage = (filePath) => {
    filePath = path.join(__dirname, '../', filePath);
    fs.unlink(filePath, err => console.log(err));
}