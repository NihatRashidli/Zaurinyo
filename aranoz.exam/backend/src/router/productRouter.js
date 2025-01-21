import express from "express";
import { addProduct, deleteProducts, getProduct } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get('/', getProduct)
productRouter.post('/', addProduct)
productRouter.delete('/:id', deleteProducts)

export default productRouter