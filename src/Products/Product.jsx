import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ([product, products, setProducts]) => {
  const [isEditing, setIsEditing] = useState([false]);
  const [editedProduct, setEditedProduct] = useState({
    title: product.title,
    price: product.price,
  });

  const handleUpdate = async () => {
    if (!editedProduct.title || !editedProduct.price) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${product.id}`,
        editedProduct
      );
      const updatedProducts = products.map((p) =>
        p.id === product.id ? response.data : p
      );
      setProducts(updatedProducts);
      toast.success("Product updated successfully");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${product.id}`);
      const filteredProducts = products.filter((p) => p.id !== product.id);
      setProducts(filteredProducts);
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedProduct.title}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, title: e.target.value })
            }
          />
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Product;
