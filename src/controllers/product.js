const Product = require('../models/product')
const list = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ message: 'Bad request' });
    }
}

const create = async (req, res) => {
    try {
        Product.create({
            ...req.body
        }, (err, result) => {
            if (err) res.send(err)
            else res.send(result)
        })
    } catch (error) {
        res.status(400).json({ message: 'Bad request' });
    }
}

module.exports = {
    create,
}