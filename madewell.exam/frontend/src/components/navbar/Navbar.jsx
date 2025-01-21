import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./NAvbar.scss";

const Navbar = () => {
  return (
    <div className="nav top-fixed bg-light">
      <div className="container">
        <div className="navbar">
          <div className="logo">Dealers</div>
          <ul className="nav-list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/catalogs">Catalogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <div className="wrapper">
              <Link to="/basket">
                <FaShoppingBasket />
              </Link>
              <FaRegHeart />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
