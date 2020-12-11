const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/menu', getMiddleware, (req, res) => {
  res.send(products);
});

router.post('/add', postMiddleware, (req, res) => {
  res.send('Item created in databse');
});

router.delete('/products/:id', deleteMiddleware, (req, res) => {
  res.send('has been deleted from database');
});


module.exports = router;