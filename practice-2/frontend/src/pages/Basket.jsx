import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  console.log(basket);
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
          {basket && basket.length > 0 ? (
            basket.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>"Pidris"</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Basket;
