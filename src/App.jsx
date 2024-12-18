import './App.css'
import Products from "./Products/Products"
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);

const fetchProducts = async () => {
  setLoading(true);
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  } catch (error) {
    toast.error("Error fetching products");
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  fetchProducts();
}, []);

const resetProducts = () => {
  setProducts([]);
  toast.success("Products reset successfully");
}


  return (
    <>
      <ToastContainer />
      <h1>Products List</h1>
      {loading ? <p>Loading...</p> : <Products products={products} setProducts={setProducts} resetProducts={resetProducts} />}
    </>
  )
}

export default App
