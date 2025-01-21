import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 content">
            <h1>MADEWELL</h1>
            <p>Summer Collection</p>
            <p>$1,499</p>
            <div className="buttons">
              <button className="btn btn-outline">Shop Now</button>
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
