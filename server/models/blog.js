const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    authorName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    going:{
        type: Number
    },
    interested:{
        type: Number
    },
});

module.exports = mongoose.model('Blog', BlogSchema);