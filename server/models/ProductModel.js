const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  countInStock: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  renderCheck: {
    type: Boolean
  }
});
const Product = mongoose.model('product', ProductSchema);

module.exports = { Product };