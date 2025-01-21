import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-md-6">
          <div className="image">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="hero-content">
            <h6>60% Discount</h6>
            <h1>Winter Collection</h1>
            <h6>Best Cloth Collection by 2025!</h6>
            <button className="btn btn-primary shopnow">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
