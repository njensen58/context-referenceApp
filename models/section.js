const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    stack: {
        type: Schema.Types.ObjectId,
        ref: "Stack",
        required: true
    }  
})

module.exports = mongoose.model("Section", sectionSchema)