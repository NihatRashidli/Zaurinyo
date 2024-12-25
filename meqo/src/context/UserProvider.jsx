import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const getProducts = async () => {
    try {
      const response = await axios("https://dummyjson.com/products");
      setProducts(response.data.products);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch posts");
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <UserContext.Provider value={{ loading, error, loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserList = () => useContext(UserContext);
