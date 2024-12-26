import React, { useEffect, useState } from 'react';
import './Products.css';
import Navbar from '../navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, fetchProducts, increment } from '../../redux/store/feature/productsSlice';
import { addItemToBasket } from '../../redux/store/feature/basketSlice';
import { Link } from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const [modalProductId, setModalProductId] = useState(null);
    const count = useSelector((state) => state.products.value);

    const openModal = (id) => {
        setModalProductId(id);
    };

    const closeModal = () => {
        setModalProductId(null);
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Products</h1>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'succeeded' && (
                    <ul className='products'>
                        {products.map((product) => (
                            <li className='cart' key={product.id}>
                                <img src={product.imageUrl} alt="" />
                                <div className='content'>
                                    <p>{product.name}</p>
                                    <p>${product.unitPrice}</p>
                                </div>
                                {modalProductId === product.id ? (
                                    <div className='modal'>
                                        <div className="button">
                                            <button onClick={() => dispatch(increment())}>+</button>
                                            <p>{count}</p>
                                            <button onClick={() => dispatch(decrement())}>-</button>
                                            <button onClick={() => dispatch(addItemToBasket(product))}><Link to={"/basket"}>add</Link></button>
                                        </div>
                                        <button onClick={closeModal}>Close</button>
                                    </div>
                                ) : (
                                    <button onClick={() => openModal(product.id)} className='btn'>add to cart</button>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </div>
    );
};

export default Products;