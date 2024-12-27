import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "./Basket.css"
import { Link } from 'react-router-dom'

const Basket = () => {
    return (
        <>
            <Navbar />
            <div>
                <header>
                    <h1>Your Basket</h1>
                </header>
                <section className="basket-container">
                    <div className="container">
                        <div className="row">
                            <div className="basket">
                                <div className="basket-item">
                                    <div className="image">
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Product Image"
                                        />
                                    </div>
                                    <h6 className="title">Product Name</h6>
                                    <p className="category">Product category</p>
                                    <p className="price">$50.00</p>
                                    <div className="count-area">
                                        <button className="minus-btn" disabled>-</button>
                                        <p className="count">0</p>
                                        <button className="plus-btn">+</button>
                                    </div>
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                            <div className="bottom">
                                <Link className="link" to="/">back</Link>
                                <h4>Total: <span className="total-price">0</span></h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Basket
