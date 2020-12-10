const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const products = require('./data/data.js')

const PORT = process.env.PORT || 5000;

app.use(express.json());

const deleteMiddleware = (req, res, next) => {
  const id = req.params.id;
  console.log('I will delete from database');
  return next();
}

const postMiddleware = (req, res, next) => {
  const { name, price, category, countInStock, description } = req.body;
  console.log('I will post to database');
  return next();
}

const getMiddleware = (req, res, next) => {
  console.log('I will get products from database');
  return next();
}

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/images', express.static('./public/images'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/template.html'));
});

app.get('/api/menu', getMiddleware, (req, res) => {
  res.send(products);
});

app.post('/api/add', postMiddleware, (req, res) => {
  console.log(req.body);
  res.send('created item in db');
})

app.delete('/api/products/:id', deleteMiddleware, (req, res) => {
  res.send('has been deleted');
})

app.listen(PORT, () => {
  console.log('server running.... 5000');
})