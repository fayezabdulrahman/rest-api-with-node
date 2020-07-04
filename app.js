/*
* Middleware file that routes to request to our designated
* routes api defined in the project
*/
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const MONGO_DB_ATLAS_CONNECTION = 'mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@node-rest-haccp.f3pyj.mongodb.net/<dbname>?retryWrites=true&w=majority';

// connect to mongoDb in the cloud
mongoose.connect(MONGO_DB_ATLAS_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

// morgan is used for displaying logs in our server (e.g GET/POST requests)
app.use(morgan('dev'));

// body parser helps us parse POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({});
    }
    next();
});

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

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;