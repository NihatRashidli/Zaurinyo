import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  deleteProducts,
  getProducts,
  searchInput,
  sortHigh,
  sortLow,
} from "../redux/features/productSlice";
import Table from "react-bootstrap/Table";
import { useFormik } from "formik";

const Admin = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { values, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues: {
      image: "",
      name: "",
      category: "",
      price: "",
    },
    onSubmit: (values) => {
      dispatch(addProducts(values));
    },
  });

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="url"
          name="image"
          id="image"
          onChange={handleChange}
          defaultValue={values.image}
        />
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          defaultValue={values.name}
        />
        <input
          type="text"
          name="category"
          id="category"
          onChange={handleChange}
          defaultValue={values.category}
        />
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          defaultValue={values.price}
           
        />

        <button type="submit">Submit</button>
      </form>

      <button onClick={() => dispatch(sortLow())}>Low to High</button>
      <button onClick={() => dispatch(sortHigh())}>High to Low</button>
      <input
        type="text"
        onChange={(e) => dispatch(searchInput(e.target.value))}
      />
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
          {products && products.length > 1 ? (
            products.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteProducts(item._id))}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>"not found"</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
