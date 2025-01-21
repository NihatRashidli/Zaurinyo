import React, { useEffect } from "react";
import "./Best.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";
import Cards from "../card/Cards";

const Best = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <div className="aw-header">
          <p>Best Sellers</p>
          <span>Shop</span>
        </div>

        <div className="row">
          <div className="d-flex justify-content-start flex-wrap gap-2">
            {products && products.length > 0
              ? products
                  .slice(0, 4)
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

export default Best;
