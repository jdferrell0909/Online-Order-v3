const products = require('../data/data.js');
const jsonProducts = require('../data/data.json')
const path = require('path');
const fs = require('fs');
const { Product } = require('../models/ProductModel.js');

const productsController = {};


// function should retrieve products from database and pass along middleware chain as res.locals
productsController.getProducts = (req, res, next) => {
  console.log('I get products from database');
  Product.find({})
    .exec()
    .then(response => {
      res.locals.items = response;
      console.log(res.locals.items);
      return next();
    })
    .catch(err => console.log(err));
  return next();
}

// function should post new product to database
productsController.addProduct = (req, res, next) => {
  const { name, price, category, countInStock, description } = req.body;
  console.log('I post product to database');
  console.log('from controller', req.body);
  Product.create({
    name, price, category, countInStock, description
  })
    .then((result) => {
      console.log(result);
      return next();
    })
    .catch((err) => {
      console.log(err.message)
    });
}

productsController.updateProduct = (req, res, next) => {
  const id = req.params.id;
  const currentProduct = products.find((p) => p._id === id);
  let updateObject = {};
  for(let key in req.body) {
    if(req.body[key]) {
      updateObject[key] = req.body[key];
    }
  }
  Product.updateOne({ name: currentProduct.name }, updateObject)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  return next();
}

// function should delete product from database
productsController.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  const currentProduct = products.find((p) => p._id === id);
  const currentIndex = products.indexOf(currentProduct);
  Product.deleteOne({ _id: id })
    .then(response => console.log(response))
    .catch(err => console.log(err));
  return next();
}


module.exports = productsController;