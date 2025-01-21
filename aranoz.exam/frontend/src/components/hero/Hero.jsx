import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="hero-content">
              <h1>Wood & Cloth Sofa</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                reiciendis ad temporibus.
              </p>
              <button className="btn btn-warning">Buy Now</button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
