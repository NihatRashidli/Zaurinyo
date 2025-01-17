import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">ESTORE</div>
          <div>
            <ul className="nav-links">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/category"> Category</Link>
              </li>
              <li>
                <Link to="/latest"> Latest</Link>
              </li>
              <li>
                <Link to="/blog"> Blog</Link>
              </li>
              <li>
                <Link to="/Pages"> Pages</Link>
              </li>
              <li>
                <Link to="/Contact"> Contact</Link>
              </li>
            </ul>
          </div>
          <div className="wrapper">
            <FaShoppingBasket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
