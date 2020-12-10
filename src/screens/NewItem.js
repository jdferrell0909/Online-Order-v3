import React, { useCallback, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const NewItem = () => {

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
      .post('/api/add', { ...eachEntry })
      .then(response => console.log(response.data))
      .catch(err => console.log(err.message));
  })

  return (
    <div>
      <h1>Add New Menu Item</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Dish Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Dish Name" value={name} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="text" placeholder="Price" value={price} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control name="category" value='' as="select" value={category} onChange={handleInputChange}>
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
          <Form.Control name="countInStock" type="text" placeholder="Number in Stock" value={countInStock} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" rows={3} placeholder="Description..." value={description} onChange={handleInputChange} />
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

export default NewItem



