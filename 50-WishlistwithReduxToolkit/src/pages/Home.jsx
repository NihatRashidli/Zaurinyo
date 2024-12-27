import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice";
import Card from "../components/card/Cards";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const datas = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div>
      <Navbar />
      <section id="products">
        <div className="container">
          <div className="row">
            <div className="cards">
              {datas && datas.map((card) => <Card key={card.id} card={card} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
