const express = require('express');
const app = express();
const productsRouter = require('./routes/products');
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')));
app.use('/api/products', productsRouter);

module.exports = app;