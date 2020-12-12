const express = require('express');
const fs = require('fs');
const path = require('path');
const productsController = require('../controllers/productsController');
const products = require('../data/data.js');

const router = express.Router();

// get products request
router.get('/menu', productsController.getProducts, (req, res) => {
  console.log(res.locals.items);
  res.send(products);
});

// add products request
router.post('/add', productsController.addProduct, (req, res) => {
  res.send('Item created in databse');
});

router.put('/update/:id', productsController.updateProduct, (req, res) => {
  res.send('Item updated in databse');
});

// delete product request
router.delete('/products/:id', productsController.deleteProduct, (req, res) => {
  res.send('has been deleted from database');
});


module.exports = router;