import React, { useCallback } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const NewItem = () => {
  const handleSubmit = useCallback(() => {
    console.log('new item submit');
    axios
      .post('/api/add', { name: 'James' })
      .then(response => console.log(response.data))
      .catch(err => console.log(err.message));
    // fetch('/api/add', {
    //   method: 'POST',
    //   body: JSON.stringify({ nickname: 'James' }),
    //   headers: { 'Content-Type': 'application/json' },
    // })
  })

  return (
    <div>
      <h1>Add New Menu Item</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Dish Name</Form.Label>
          <Form.Control type="text" placeholder="Dish Name" />
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
          <Form.Control as="textarea" rows={3} placeholder="Description..." />
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



// const initialState = { 
//   dishName: '',
//   price: '',
//   category: '',
//   numberInStock: '',
//   description: '',
//   renderCheck: false
// }
// const [eachEntry, setEachEntry] = useState(initialState);

// const handleInputChange = e => {
//   setEachEntry({ ...eachEntry, [e.target.name]: e.target.value})
// }