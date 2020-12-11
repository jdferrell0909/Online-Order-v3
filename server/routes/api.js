const express = require('express');
const productsController = require('../controllers/productsController');
const products = require('../data/data.js');

const router = express.Router();

router.get('/menu', productsController.getProducts, (req, res) => {
  res.send(products);
});

router.post('/add', productsController.addProduct, (req, res) => {
  res.send('Item created in databse');
});

router.delete('/products/:id', productsController.deleteProduct, (req, res) => {
  res.send('has been deleted from database');
});


module.exports = router;