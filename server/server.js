const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const mongoose = require('mongoose');
const products = require('./data/data.js');
const { Product } = require('./models/ProductModel.js');
const apiRouter = require('./routes/api.js');

const PORT = process.env.PORT || 5000;
const mongoURI = 'mongodb+srv://james123:james123@devconnector.slctd.mongodb.net/onlineorderapp?retryWrites=true&w=majority';

app.use('/api', apiRouter);

// handle parsing request body
app.use(express.json());

// database connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'onlineorderapp',
})
  .then(() => console.log('dabtabase connected...'))
  .catch((err) => console.log(err.message));


// handle requests for static assets
app.use(express.static(path.join(__dirname, 'dist')));

// handle images
app.use('/images', express.static('./public/images'));

// serve main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/template.html'));
});

// route handler

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log('server running.... 5000');
});