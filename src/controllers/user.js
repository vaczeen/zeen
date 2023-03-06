const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// let validEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/
let validPassword = /^(?=.*[0-9a-zA-Z])(?=.*[*.!@#$-=_])(?=.*[0-9a-zA-Z]).{8,16}$/
const register = async (req, res) => {
    try {
        const { email, password } = req.body
        //check match username and password
        // if (!email.match(validEmail)) return res.status(400).json({ "detail": "Invalid email." });
        if (!password.match(validPassword)) return res.status(400).json({ "detail": "Invalid password." });

        if (!(email && password)) {
            return res.status(400).json({ "detail": "All input is required" });
        }
        //check if user already exist
        //Validate if user exist in our database 
        const oldUser = await User.findOne({ email: email })
        if (oldUser) {
            return res.status(400).json({ "detail": "User Already Exist. Please Login" })
        }
        //Encrypt user password
        let encryptPassword = bcrypt.hashSync(password, 10)

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

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email, password)) {
            return res.status(400).json({ "detail": "All input is required" })
        }
        let loginUser = await User.findOne({
            email: email
        })
        if (loginUser && (await bcrypt.compare(password, loginUser.password))) {
            const token = jwt.sign(
                {
                    id: loginUser._id,
                    email: loginUser.email
                },
                "APPLE",
                {
                    expiresIn: "24h"
                }
            );
            loginUser = {
                id: loginUser._id,
                email: loginUser.email,
                token: token
            }
            return res.status(201).json(loginUser)

        } else return res.status(500).json({ detail: error })

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
    destroy,
    register,
    login
}