import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteWishlist } from "../../redux/features/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

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
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td><button className="btn btn-danger" onClick={()=> dispatch(deleteWishlist(item))}>Delete</button></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Wishlist;
