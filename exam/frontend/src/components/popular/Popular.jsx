import React, { useEffect } from 'react'
import './Popular.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/productSlice'
import Cards from '../card/Cards'

const Popular = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])




    return (
        <div>
            <div className="container">
                <div className="header-product">
                    <h2>Popular Items</h2>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    {
                        products && products.length > 0 ? (
                            products.map((product) => (
                                <Cards product={product} key={product._id} />
                            ))
                        ) : (
                            "pidr is neck full"
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Popular
