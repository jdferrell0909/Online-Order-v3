import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// const regeneratorRuntime = require('regenerator-runtime');
import axios from 'axios';

const UpdateItem = ({ match }) => {
  // would like to figure out a way to get individual product information in order to put that info in as placeholder
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/menu').then((response) => {
      setProducts([...response.data]);
    });
    
  }, []);
  const id = match.params.id;

    

  return (
    <div>
      <h1>Update Menu Item</h1>
      <h6>Input your updates below</h6>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Dish Name</Form.Label>
          <Form.Control type="text" placeholder={products.length > 1 ? products[id - 1].name : 'Loading…'} />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder={products.length > 1 ? products[id - 1].price : 'Loading…'} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option>Appetizers</option>
            <option>Salads</option>
            <option>Handhelds</option>
            <option>Entrees</option>
            <option>Dessert</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicStock">
          <Form.Label>Number in Stock</Form.Label>
          <Form.Control type="text" placeholder={products.length > 1 ? products[id - 1].countInStock : 'Loading…'} />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder={products.length > 1 ? products[id - 1].description : 'Loading…'}></Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Display Now" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UpdateItem;