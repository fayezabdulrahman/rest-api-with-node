const express = require('express');
const router = express.Router();
// handles get request to orders route
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders were fetched'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Item was fetched',
        order: req.params.orderId
    });
});

router.post('/', (req, res, next) => {
    const order = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'order was created',
        orderPlaced: order
    });
});

router.delete('/:orderId', (req,res,next) => {
    res.status(200).json({
        message: 'order deleted'
    });
});



module.exports = router;