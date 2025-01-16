import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="nav">
          <div className="navbar-logo">COLOSHOP</div>
          <div className="list">
            <ul className="navbar-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/promotion">Promotion</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="wrapper">
            <Link to="/basket">
              <FaShoppingBasket color="black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
