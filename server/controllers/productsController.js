const { Product } = require('../models/ProductModel.js');

const productsController = {};

productsController.getProducts = (req, res, next) => {
  console.log('I get products from database');
  Product.find({})
    .then(response => console.log(response))
    .catch(err => console.log(err));
  return next();
}

productsController.addProduct = (req, res, next) => {
  const { name, price, category, countInStock, description } = req.body;
  console.log('I post product to database');
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

productsController.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  console.log('I delete product from database');
  
  return next();
}


module.exports = productsController;