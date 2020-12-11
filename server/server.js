const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const apiRouter = require('./routes/api.js');
const mongoose = require('mongoose');
const products = require('./data/data.js');
const { Product } = require('./models/ProductModel.js');

const PORT = process.env.PORT || 5000;
const mongoURI = 'mongodb+srv://james123:james123@devconnector.slctd.mongodb.net/onlineorderapp?retryWrites=true&w=majority';

// handle parsing request body
app.use(express.json());

// database connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'onlineorderapp'
})
  .then(() => console.log('dabtabase connected...'))
  .catch((err) => console.log(err.message));


// const deleteMiddleware = (req, res, next) => {
//   const id = req.params.id;
//   console.log('I will delete from database');
//   return next();
// }

// const postMiddleware = (req, res, next) => {
//   const { name, price, category, countInStock, description } = req.body;
//   console.log('I will post to database');
//   Product.create({
//     name, price, category, countInStock, description
//   })
//     .then((result) => {
//       console.log(result);
//       return next();
//     })
//     .catch((err) => {
//       console.log(err.message)
//     });
// }

// const getMiddleware = (req, res, next) => {
//   console.log('I will get products from database');
//   Product.find({})
//     .then(response => console.log(response))
//     .catch(err => console.log(err));
//   return next();
// }

// handle requests for static assets
app.use(express.static(path.join(__dirname, 'dist')));

// route handler
app.use('/api', apiRouter);

// handle images
app.use('/images', express.static('./public/images'));

// serve main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/template.html'));
});

// app.get('/api/menu', getMiddleware, (req, res) => {
//   res.send(products);
// });

// app.post('/api/add', postMiddleware, (req, res) => {
//   res.send('created item in db');
// });

// app.delete('/api/products/:id', deleteMiddleware, (req, res) => {
//   res.send('has been deleted');
// });


app.listen(PORT, () => {
  console.log('server running.... 5000');
});