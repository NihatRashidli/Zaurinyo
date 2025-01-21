import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);

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
        <tbody>{basket && basket.length > 0 ? (
          basket.map ((item)=>(
            <tr>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))
        ) : (
          <tr>
          <td>not basket</td>
          </tr>
        )}</tbody>
      </Table>
    </div>
  );
};

export default Basket;
