import React, { useEffect } from "react";
import "./Latest.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../../redux/features/productSlice";
import Cards from "../card/Cards";

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
        <div className=" d-flex justify-content-center">
          {products && products.length > 0
            ? products.map((product) => (
                <Cards product={product} key={product._id} />
              ))
            : "Not Found"}
        </div>
      </div>
    </div>
  );
};

export default Latest;
