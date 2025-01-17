import mongoose from "mongoose";
import product from "../models/productModels.js";

export const addProduct = async (req, res) => {
  try {
    const newProduct = new product(req.body);

    await newProduct.save();

    return res
      .status(201)
      .json({ success: true, message: "Product added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    return res.status(200).json({ success: true, products });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await product.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
