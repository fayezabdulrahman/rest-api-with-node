const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET requests to products'
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special proiduct',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an id'
        });
    }

});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'updated product'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted product'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'handling POST requests to products',
        createdProduct: product
    });
});

module.exports = router;