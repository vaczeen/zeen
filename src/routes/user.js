const express = require('express')
const {
    create,
    retrieve,
    update,
    destroy 
} = require('../controllers/user')

const router = express.Router();

router.get('/',create);
router.post('/:id',retrieve);
router.put('/:id',update);
router.delete('/:id',destroy);

module.exports = router;