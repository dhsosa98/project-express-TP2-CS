const productService = require("../services/products");

async function getProductByID(req, res, next){
    const { id } = req.params;
    const product = await productService.findByPK(id);
    if (product){
        return res.status(200).send(product);
    }
    return res.status(404).send(`Product #${id} not found`);
}

async function getAllProducts(req, res, next){
    const products = await productService.findAll();
    return res.status(200).send(products);
}

module.exports = {
    getProductByID,
    getAllProducts
} 