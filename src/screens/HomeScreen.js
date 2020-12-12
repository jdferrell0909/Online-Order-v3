import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
const regeneratorRuntime = require('regenerator-runtime');
import Product from '../components/Product.js';
import NewItem from './NewItem.js';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/menu');
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
  }, [])

  // once I have database set up, will likely want to use .filter instead of map and test for whether or not renderCheck is truthy
  return (
    <div>
      <h1>Current Offerings</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen;




