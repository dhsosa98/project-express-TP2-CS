
const products =[{
    id: 1,
    name: 'Product 1',
    description: 'bla bla',
    price: 122,
    image: '',
    stock: 12,
}];

async function findByPK(id) {
    const product = products.find((item) => item.id == id);
    if (!product) {
      return null
    }
    return product;
}

const productService = { findByPK };

module.exports = productService;