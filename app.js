/*
* Middleware file that routes to request to our designated
* routes api defined in the project
*/
const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// this will create route at /products and
// assigns the productRoutes to handle it
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;