import React from "react";
import "./Footer.scss";
import { FaCar } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row footer">
          <div className="col-md-3">
            <h3>Estore</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit?
            </p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <li>About</li>
            <li>Offers</li>
            <li>Discounts Get</li>
            <li>Coupon Contact Us</li>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <li>About</li>
            <li>Offers</li>
            <li>Discounts Get</li>
            <li>Coupon Contact Us</li>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <li>About</li>
            <li>Offers</li>
            <li>Discounts Get</li>
            <li>Coupon Contact Us</li>
          </div>
        </div>
        <div className="footer-end">
          <div className="footer-text">
            <p>
              Copyright ©2025 All rights reserved | This template is made with
              by Colorlib
            </p>
          </div>
          <div className="footer-icons">
            <FaCar />
            <FaCar />
            <FaCar />
            <FaCar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
