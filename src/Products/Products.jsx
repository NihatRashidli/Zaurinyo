import { useState } from "react";
import Product from "./Products/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ products, setProducts, resetProducts }) => {
  const [newProduct, setNewProduct] = useState({ title: "", price: "" });

  const handleCreate = async () => {
    if (!newProduct.title || !newProduct.price) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        newProduct
      );
      setProducts([...products, response.data]);
      toast.success("Product added successfully");
      setNewProduct({ title: "", price: "" });
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <button onClick={handleCreate}>Add Product</button>
        <button onClick={resetProducts}>Reset Products</button>
      </div>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            products={products}
            setProducts={setProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
