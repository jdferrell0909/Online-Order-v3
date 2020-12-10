import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const UpdateItem = ({ match }) => {
  // would like to figure out a way to get individual product information in order to put that info in as placeholder
  console.log(products);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/menu');
  
  //     setProducts(data);
  //   }
  //   fetchProducts();
  // }, [])
    
  //   const id = match.params.id;
  //   const product = products.find((p) => p._id === id);
  //   console.log(product);

  return (
    <div>
      <h1>Update Menu Item</h1>
      <h6>Input your updates below</h6>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Dish Name</Form.Label>
          <Form.Control type="text" placeholder='dish name' />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" />
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
          <Form.Control type="text" placeholder="Number in Stock" />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description..."></Form.Control>
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

export default UpdateItem
