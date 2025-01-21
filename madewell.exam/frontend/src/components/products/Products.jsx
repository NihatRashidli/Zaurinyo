import React, { useEffect } from "react";
import "./Products.scss";
import Cards from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {products && products.length > 0
        ? products.map((product) => (
            <Cards product={product} key={product._id} />
          ))
        : "not pidris"}
    </div>
  );
};

export default Products;
