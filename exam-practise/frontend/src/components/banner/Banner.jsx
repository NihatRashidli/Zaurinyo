import React from "react";
import "./Banner.scss"

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="banner">
          <div className="photo-section">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp"
              alt=""
            />
            <div className="photo-text">WOMEN</div>
          </div>
          <div className="photo-section">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg.webp"
              alt=""
            />
            <div className="photo-text">ACCESORIES</div>
          </div>
          <div className="photo-section">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg.webp"
              alt=""
            />
            <div className="photo-text">MEN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
