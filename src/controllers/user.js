const User = require('../models/user')
const express = require('express')
const mongoose = require('mongoose')


const create = async (req, res) => {
    try {
        console.log(req.body);
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
        const users = await User.findByIdAndUpdate(req.params.id, {...req.body})
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