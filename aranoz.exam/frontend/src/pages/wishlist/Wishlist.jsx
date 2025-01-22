import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteWishlist, minusBtn, plusBtn } from "../../redux/features/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const plus = (item) => {
    dispatch(plusBtn(item))
  }
  const minus = (item) => {
    dispatch(minusBtn(item))
  }
  return (
    <div>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{(item.price).toFixed(2) * item.count}</td>
                <td>
                  <button onClick={() => plus(item)}>+</button>
                  <div>{item.count}</div>
                  <button onClick={() => minus(item)}>-</button>
                </td>
                <td>{item.category}</td>

                <td><button className="btn btn-danger" onClick={() => dispatch(deleteWishlist(item))}>Delete</button></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Wishlist;
