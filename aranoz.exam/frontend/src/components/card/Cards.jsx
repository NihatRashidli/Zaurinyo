import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addWishlist } from "../../redux/features/wishlistSlice";

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const addToWishlist = (product) => {
    dispatch(addWishlist(product));
  };
  return (
    <div>
      <Card style={{ width: "18rem", border: "none" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product?.name}</Card.Title>
          <Card.Text>${product?.price}</Card.Text>
          <Card.Text>{product?.category}</Card.Text>
          <Button variant="warning" onClick={() => addToWishlist(product)}>
            Sahibi ol
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
