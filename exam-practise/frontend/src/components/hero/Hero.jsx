import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="hero-text">
            <h6>Spring / Summer Collection 2017</h6>
            <div>
              <h1>Get up to 30% Off</h1>
              <h1>New Arrivals</h1>
            </div>
            <button className="btn btn-warning shopnow">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
