const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const path = require('path')

const PORT = process.env.PORT || 5000
const secret = process.env.SECRET

app.use(morgan('dev'))
app.use(express.json())


app.use(express.static(path.join(__dirname, "client", "build")))


mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/quizard`, { useNewUrlParser: true }, () => {
    console.log(`{+}Connected to the DB`)
}) 


app.use('/api', expressJwt({ secret: secret}))
app.use('/auth', require('./routes/auth'))

// Protected Routes - Add Edit Delete Stacks, Sections & Questions
app.use('/api/stack', require('./routes/stack'))
app.use('/api/section', require('./routes/section'))
app.use('/api/question', require('./routes/question'))
app.use('/api/user', require('./routes/user'))

// Public Routes - Used to search for/save stacks and practice the questions
app.use('/public', require('./routes/public'))



// Global error handling for uniformity
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError"){
        res.status = err.status
    }
    return res.send({ message: err.message })
})



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`[+]Server is running on port ${PORT}`))