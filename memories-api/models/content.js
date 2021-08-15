const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentPost = new Schema ({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    author: {
        type: Object,
        require: true,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('ContentPost', ContentPost);