import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

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
                    </tr>
                </thead>
                <tbody>
                    {
                        basket && basket.map((item,index) => (
                            <tr key={index} >
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.image}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Basket
