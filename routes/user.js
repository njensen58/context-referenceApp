const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')


userRouter.get('/', (req, res) => {
    User.findOne({_id: req.user._id}, (err, user) => {
        if (err) return res.status(500).send(err)
        if (user === null) return res.status(400).send({success: false, err: "User not found"})
        return res.status(200).send({success: true, user: user.withoutPassword()})
    })
})


module.exports = userRouter