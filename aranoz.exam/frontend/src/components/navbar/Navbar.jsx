import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="nav">
          <div className="logo">Aranoz</div>
          <div className="nav">
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="pages">Pages</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              <li>
                <Link to="Contact">Contact</Link>
              </li>
            </ul>
            <div className="wrapper">
              <Link to="wishlist">
                <FaShoppingBasket />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
