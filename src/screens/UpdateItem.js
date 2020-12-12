import React, { useEffect, useState, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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

  const initialState = { 
    name: '',
    price: '',
    category: '',
    countInStock: '',
    description: '',
    renderCheck: false
  }

  const [eachEntry, setEachEntry] = useState(initialState);
  const { name, price, category, countInStock, description, renderCheck } = eachEntry;
  const handleInputChange = e => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value})
  }
  console.log(eachEntry);

  const handleSubmit = useCallback(() => {
    console.log('new item submit');
    axios
      .put(`/api/update/${id}`, { ...eachEntry })
      .then(response => console.log(response.data))
      .catch(err => console.log(err.message));
  })

    

  return (
    <div>
      <h1>Update Menu Item</h1>
      <h6>Input your updates below</h6>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Dish Name</Form.Label>
          <Form.Control name="name" type="text" placeholder={products.length > 1 ? products[id - 1].name : 'Loading…'} value={name} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="text" value={price} onChange={handleInputChange} placeholder={products.length > 1 ? products[id - 1].price : 'Loading…'} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1" value=''>
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" name="category" value={category} onChange={handleInputChange}>
            <option key='blankChoice' hidden value />
            <option>Appetizers</option>
            <option>Salads</option>
            <option>Handhelds</option>
            <option>Entrees</option>
            <option>Dessert</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicStock">
          <Form.Label>Number in Stock</Form.Label>
          <Form.Control name="countInStock" type="text" placeholder={products.length > 1 ? products[id - 1].countInStock : 'Loading…'} value={countInStock} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} placeholder={products.length > 1 ? products[id - 1].description : 'Loading…'} value={description} onChange={handleInputChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Display Now" />
        </Form.Group>
        <LinkContainer to="/">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </LinkContainer>
      </Form>
    </div>
  )
}

export default UpdateItem;