import React from "react";
import "./Getour.scss";
import Button from "react-bootstrap/Button";


const Getour = () => {
  return (
    <div>
      <div className="container">
        <div className="full-get">
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-offer.png"
            alt=""
          />
          <div className="div-content">
            <div className="left-get">
                <h1>Get Our Latest Offers News</h1>
                <p>Subscribe news latter</p>
            </div>
            <div className="right-get">
                <input type="text" />
                <Button variant="primary">Shop</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getour;
