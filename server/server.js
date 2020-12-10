const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const products = require('./data/data.js')

const PORT = process.env.PORT || 5000;

const deleteMiddleware = (req, res, next) => {
  const id = req.params.id;
  console.log('I will delete from database');
  return next();
}

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/images', express.static('/public/images'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/template.html'));
});

app.get('/api/menu', (req, res) => {
  res.send(products);
});

app.delete('/api/products/:id', deleteMiddleware, (req, res) => {
  res.send('has been deleted')
})

app.listen(PORT, () => {
  console.log('server running.... 5000');
})