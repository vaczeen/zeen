const User = require('../models/user')
const bcrypy = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!(username && password)) {
            return res.status(400).json({ "detail": "All input is required" });
        }
        //check if user already exist
        //Validate if user exist in our database 
        const oldUser = await User.findOne({ username: username })
        if (oldUser) {
            return res.status(400).json({ "detail": "User Already Exist. Please Login" })
        }
        //Encrypt user password
        let encryptPassword = bcrypt.hashsync(password, 10)

        //Create user in our database
        try {
            let data = req.body
            delete data._id
            await User.create({
                ...data,
                password: encryptPassword
            }, (err, result) => {
                if (err) res.status(400).send(err)
                else {
                    res.status(201).send(result)
                }
            })
        } catch (error) {
            res.status(400).json({ message: 'Bad request' })
        }
    } catch (error) {
        res.status(500).json({ detail: error })

    }
}

const login = (res, req) => {
    try {
        const { username, password } = req.body
        
    } catch (error) {
        res.status(500).json({ detail: error })
    }
}

const create = async (req, res) => {
    try {
        const users = await User.create(req.body)
        res.status(201).send(users)
    } catch (error) {
        res.status(400).json({ message: 'Error while create user.', detail: error })
    }

}

const retrieve = async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json({ message: 'Error while retrieve user.', detail: error })
    }

}

const update = async (req, res) => {
    try {
        const users = await User.findByIdAndUpdate(req.params.id, { ...req.body })
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json({ message: 'Error while update user.', detail: error })
    }

}

const destroy = async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params.id)
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json({ message: 'Error while delete user.', detail: error })
    }

}
module.exports = {
    create,
    retrieve,
    update,
    destroy
}