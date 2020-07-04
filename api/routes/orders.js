const express = require('express');
const router = express.Router();

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
    res.status(201).json({
        message: 'order was created'
    });
});

router.delete('/:orderId', (req,res,next) => {
    res.status(200).json({
        message: 'order deleted'
    });
});



module.exports = router;