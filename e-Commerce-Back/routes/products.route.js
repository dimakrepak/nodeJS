const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router
    .post('/', (req, res) => productsController.create(req, res))
    .get('/', (req, res) => productsController.getAll(req, res))
    .get('/find/:q', (req, res) => productsController.getProduct(req, res))
    .get('/active', (req, res) => productsController.getActive(req, res))
    .get('/range', productsController.getRange)
    .patch('/update/:id', productsController.updateActive)
    .delete('/delete/:id', productsController.deleteProduct)
module.exports = router;