const express = require('express')
const publicRouter = express.Router()
const Stack = require('../models/stack')
const Section = require('../models/section')
const Question = require('../models/question')

publicRouter.get('/allstacks', (req, res) => {
    Stack.find((err, allStacks) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(allStacks)
    })
})

publicRouter.get('/sections/:stackId', (req, res) => {
    Section.find({stack: req.params.stackId}, (err, sections) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(sections)
    })
})

publicRouter.get('/questions/:sectionId', (req, res) => {
    Question.find({section: req.params.sectionId}, (err, questions) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(questions)
    })
})

module.exports = publicRouter