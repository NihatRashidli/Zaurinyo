import React from 'react'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import './Navbbar.scss'

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            TimeZone
          </div>
          <ul className='nav-list'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
            <li>
              <Link to={'/latest'}>Latest</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li>
              <Link to={'/admin'}>Admin</Link>
            </li>
            <div className="wrapper">
              <Link to={'/basket'}>
              <FaBasketShopping />

              </Link>
              <FaHeart />
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
