const express = require('express')
const publicRouter = express.Router()
const Stack = require('../models/stack')

publicRouter.get('/', (req, res) => {
    Stack.find((err, allStacks) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(allStacks)
    })
})

module.exports = publicRouter