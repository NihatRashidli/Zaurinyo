import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addBasket } from '../../redux/features/basketSlice';

const Cards = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.category}
          </Card.Text>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Button variant="primary" onClick={() => dispatch(addBasket(product))}>Alginen</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
