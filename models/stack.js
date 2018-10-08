const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stackSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        enum: ["Computer Science", "JavaScript", "HTML", "CSS", "NodeJS", "ReactJS", "Algorithms"]
    },
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Stack", stackSchema)