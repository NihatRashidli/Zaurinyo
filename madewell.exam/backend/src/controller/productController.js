import product from "../models/productModels.js";

export const getProduct = async (req, res) => {
  try {
    const products = await product.find();
    res.json({ products, success: true });
  } catch (error) {
    res.json({ success: false });
  }
};

export const addProduct = async (req, res) => {
  try {
    const newProduct = new product(req.body);
    await newProduct.save();
    res.json({ newProduct, success: true });
  } catch (error) {
    res.json({ success: false });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await product.findByIdAndDelete(id);
    if (!deleteProduct) {
      res.json({ success: false });
    }
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
  }
};
