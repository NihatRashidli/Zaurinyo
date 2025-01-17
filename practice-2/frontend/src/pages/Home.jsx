import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Category from "../components/category/Category";
import Latest from "../components/latest/Latest";
import Getour from "../components/getour/Getour";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Latest />
      <Getour />
    </div>
  );
};

export default Home;
