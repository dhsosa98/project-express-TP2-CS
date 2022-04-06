const { getProductByID } = require('../controllers/products');

const router = require('express').Router();

router.get('/:id', getProductByID)

module.exports = router;