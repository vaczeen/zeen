const User = require('../models/user')

const create = (req, res) => {
    try {
        User.create({ ...req.body })
            .then((err, result) => {
                if (err) res.send(err)
                else res.status(201).json(result)
            })
    } catch (error) {
        res.status(400).json({ message: 'Error while create user.', detail: error })
    }

}


const Read = (req, res) => {
    try {
        User.Read({ ...req.body })
            .then((err, result) => {
                if (err) res.send(err)
                else res.status(201).json(result)
            })
    } catch (error) {
        res.status(400).json({ message: 'Error while create user.', detail: error })
    }

}

const Update = (req, res) => {
    try {
        User.Update({ ...req.body })
            .then((err, result) => {
                if (err) res.send(err)
                else res.status(201).json(result)
            })
    } catch (error) {
        res.status(400).json({ message: 'Error while create user.', detail: error })
    }

}

const Delete = (req, res) => {
    try {
        User.Delete({ ...req.body })
            .then((err, result) => {
                if (err) res.send(err)
                else res.status(201).json(result)
            })
    } catch (error) {
        res.status(400).json({ message: 'Error while create user.', detail: error })
    }

}
module.export = {
    create,
    Read,
    Update,
    Delete
}