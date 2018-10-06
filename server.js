const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

const PORT = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(express.json())

mongoose.connect(`mongodb://localhost:27017/quizard`, { useNewUrlParser: true }, () => {
    console.log(`{+}Connected to the DB`)
}) 


app.use('/api', expressJwt({ secret: process.env.SECRET }))

app.use('/auth', require('./routes/auth'))

// Protected Routes - Add Edit Delete Stacks, Sections & Questions
app.use('/api/stack', require('./routes/stack'))
app.use('/api/section', require('./routes/section'))
app.use('/api/question', require('./routes/question'))
app.use('/api/user', require('./routes/user'))

// Public Routes - Used to search for/save stacks and practice the questions
app.use('/api/allstacks', require('./routes/public'))


// Global error handling for uniformity
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError"){
        res.status = err.status
    }
    return res.send({ message: err.message })
})

app.listen(PORT, () => console.log(`[+]Server is running on port ${PORT}`))