import React from "react";
import "./Awasome.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/features/productSlice";
import Cards from "../card/Cards";

const Awasome = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <div>
      <div className="container">
        <div className="aw-header">
          <p>Awasome</p>
          <span>Shop</span>
        </div>

        <div className="row">
          <div className="d-flex justify-content-start flex-wrap gap-2">
            {products && products.length > 0
              ? products
                  .slice(0, 8)
                  .map((product) => (
                    <Cards product={product} key={product._id} />
                  ))
              : "not pidris"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awasome;
