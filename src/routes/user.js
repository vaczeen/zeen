const express = require('express')
const {
    create,
    retrieve,
    update,
    destroy,
    register,
    login
} = require('../controllers/user')

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/', create);
router.get('/:id', retrieve);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;