const express = require('express')
const userSchema = require("../models/userModel")

const router = express.Router()

const User = require('../models/userModel')

router.post('/create-user', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        // _id: req.body._id,
    })
    
    userSchema.create(user).then((savedUser) => {
        res.status(200).send(savedUser)
    }).catch((err) => {
        res.status(400).send({"err" : err})
    })

})


module.exports = router