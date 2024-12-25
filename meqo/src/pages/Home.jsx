import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import { useUserList } from "../context/UserProvider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice";
import Cards from "../components/card/Cards";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const { loading, error } = useUserList();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="cards" style={{ maxWidth: "84%", margin: "50px auto", display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {products.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
