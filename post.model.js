const mongoose = require('mongoose')

const post = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Post", post)