import React from 'react';
import { useSelector } from 'react-redux';

const Basket = () => {
    const basketItems = useSelector((state) => state.basket.items);

    return (
        <div className="basket">
            <h2>Basket</h2>
            {basketItems.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <ul>
                    {basketItems.map((item) => (
                        <li key={item.id} className="basket-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div className="item-details">
                                <p>{item.name}</p>
                                <p>${item.unitPrice}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Basket;