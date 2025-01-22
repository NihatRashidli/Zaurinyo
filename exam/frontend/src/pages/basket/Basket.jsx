import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasket } from '../../redux/features/basketSlice';

const Basket = () => {
    const dispatch = useDispatch()
    const { basket } = useSelector((state) => state.basket)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>settings    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basket && basket.map((item,index) => (
                            <tr key={index} >
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <img src={item.image} alt="" />
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=> dispatch(deleteBasket(item._id))}>delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Basket
