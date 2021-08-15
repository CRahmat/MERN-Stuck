const {validationResult} = require('express-validator');

exports.createContent = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    /*const image = req.body.image;*/

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error('Invalid Value/Length');
        err.status = 400;
        err.message = errors.array();
        throw err;
    };

    const result = {
        message: 'Create Content Successfully',
        data:{
                id: 1,
                title: title,
                content: content, 
                created_at:'15/08/2021 - 00.00', 
                author: {
                    uid: 1,
                    fullName: "Catur Rahmat"
                }
        }
    }
    res.status(201).json(result);
}