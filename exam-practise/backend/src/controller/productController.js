import product from "../model/productModel.js";



export const addProduct = async (req, res) => {
  try {
    const newProduct = new product(req.body);
    await newProduct.save();
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await product.find();
    res.json({ products });
  } catch (err) {
    res.json({ success: false });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const newProduct = await product.findByIdAndDelete(id);
    if (!newProduct) return res.json({ success: false });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
};
