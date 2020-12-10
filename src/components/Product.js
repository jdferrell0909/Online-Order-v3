import React, { useCallback } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

const Product = ({ product }) => {
  const handleDelete = useCallback(() => {
    console.log('handle delete');
    axios.delete(`/api/products/${product._id}`)
      .then(response => alert(`${product.name} ${response.data}`))
      .catch(error => console.log(error.message))
  });

  return (
    <div>
      <Card className='my-3 p-3 rounded' style={{width:"28vh", height:"40vh"}}>
        {/* <a href={`/product/${product._id}`}>
          <Card.Img src={`${product.image}`} variant='top' />
        </a> */}
        <Card.Body>
          <Row style={{height: '15%'}}>
            <Card.Title as='h5'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Row>
          <Row style={{height: '20%'}}>
            <Card.Text as='h3'>${product.price}</Card.Text>
          </Row>
          <Row style={{height: '10%'}}>
            <Card.Text as='h6'>{product.countInStock} In Stock</Card.Text>
          </Row>
          <Row style={{height: '30%'}}>
            <Card.Text as='p'>{product.description}</Card.Text>
          </Row>
          <Row style={{height: '20%'}}>
            <Col>
            <LinkContainer to={`/updateItem/${product._id}`}>
              <Button variant="info" type="submit" size="sm">Update Item</Button>
            </LinkContainer>
            </Col>
            <Col>
              <Button variant="danger" type="submit" size="sm" onClick={handleDelete}>Remove Item</Button>
            </Col>
          </Row>  
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
