const Cart = require('../models/cart')

const create = async (req, res) => {
    try {
        Cart.create({
            ...req.body,
            Product: req.product.id
        },(err,result) => {
            if (err) res.status(err)
            else res.send(result)
        })
    } catch (error) {
        res.status(400).json({message: 'Bad request'});
    }
}

module.exports = {
    retrieve
}