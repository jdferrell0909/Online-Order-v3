import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded' style={{width:"28vh", height:"40vh"}}>
        {/* <a href={`/product/${product._id}`}>
          <Card.Img src={`${product.image}`} variant='top' />
        </a> */}
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as='h5'>
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as='h3'>${product.price}</Card.Text>
          <Card.Text as='h6'>{product.countInStock} In Stock</Card.Text>
          <Card.Text as='p'>{product.description}</Card.Text>
          <Row>
            <Col>
              <Button variant="info" type="submit" size="sm">Update Item</Button>
            </Col>
            <Col>
              <Button variant="danger" type="submit" size="sm">Remove Item</Button>
            </Col>
          </Row>  
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
