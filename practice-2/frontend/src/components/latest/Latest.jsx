import React, { useEffect } from "react";
import "./Latest.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../../redux/features/productSlice";

const Latest = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="latest-top">
          <h2 style={{ fontSize: "50px" }}>Latest</h2>
          <div className="set">
            <span>All</span>
            <span>New</span>
            <span>Featured</span>
            <span>Offer</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {products && products.length > 0
              ? products.map((product) => (
                  <Card style={{ width: "18rem" }} key={product._id}>
                    <Card.Img variant="top" src={product?.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        Xosun Geldi?
                      </Card.Text>
                      <Button variant="primary">RR Sahibi Ol</Button>
                    </Card.Body>
                  </Card>
                ))
              : "Not Found"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
