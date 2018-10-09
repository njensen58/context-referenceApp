const express = require('express')
const questionRouter = express.Router()
const Question = require('../models/question')


// Get user Questions
questionRouter.get('/:sectionId', (req, res) => {
    Question.find({section: req.params.sectionId}, (err, questions) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(questions)
    })
})


// Add new question to section
questionRouter.post('/', (req, res) => {
    const newQuestion = new Question(req.body)
    newQuestion.save((err, savedQuestion) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(savedQuestion)
    })
})

questionRouter.put('/:questionId', (req, res) => {
    Question.findOneAndUpdate(
        {_id: req.params.questionId},
        req.body,
        {new: true},
        (err, updatedQuestion) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedQuestion)
        }
    )
})

questionRouter.delete('/:questionId', (req, res) => {
    Question.findOneAndRemove(
        {_id: req.params.questionId},
        (err, deletedQuestion) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send(deletedQuestion)
        }
    )
})

module.exports = questionRouter