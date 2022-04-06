const { getProductByID, getAllProducts } = require('../controllers/products');

const router = require('express').Router();

router.get('/', getAllProducts);
router.get('/:id', getProductByID);

module.exports = router;