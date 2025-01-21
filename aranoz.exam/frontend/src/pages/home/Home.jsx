import React from "react";
import Hero from "../../components/hero/Hero";
import Awasome from "../../components/awasome/Awasome";
import Best from "../../components/best/Best";
import News from "../../components/newsletter/News";
import Creative from "../../components/creative/Creative";

const Home = () => {
  return (
    <div>
      <Hero />
      <Awasome />
      <Best />
      <News />
      <Creative />
    </div>
  );
};

export default Home;
