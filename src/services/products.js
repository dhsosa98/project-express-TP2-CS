
const products =[{
    id: 1,
    name: 'Product 1',
    description: 'bla bla',
    price: 122,
    image: '',
    stock: 12,
},
{
    id: 2,
    name: 'Product 2',
    description: 'bla bla 2',
    price: 433,
    image: '',
    stock: 9,
  },
];

async function findByPK(id) {
    const product = products.find((item) => item.id == id);
    if (!product) {
      return null
    }
    return product;
}

async function findAll() {
    return products;
}

const productService = { findByPK, findAll };

module.exports = productService;