/*
* Middleware file that routes to request to our designated
* routes api defined in the project
*/
const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
// this will create route at /products and
// assigns the productRoutes to handle it
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// handle every other route that reaches this line
// basically error handle any routes we don't have
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;