import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import './ProductScreen.css'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p.id === match.params.id)

  return (
    <div className='productss'>
      <Link className='btn btn-dark my-3' to='/wrecks'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image className='iii' src={`../images/${product.id}.png`} alt={product.name} fluid />
        </Col>
        
        <Col md={3}>
        
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Series: {product.type}</ListGroup.Item>
            <ListGroup.Item>Description: {product.shortDescription}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Model:</Col>
                  <Col>
                    <strong>{product.type}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/contact'>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Cotact Us
                </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
         
          </Card>
         
        </Col>
      
      </Row>
    </div>
  )
}

export default ProductScreen