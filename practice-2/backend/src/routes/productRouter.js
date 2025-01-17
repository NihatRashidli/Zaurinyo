import express from 'express';
import { addProduct, deleteProducts, getProducts } from '../controller/productController.js';

const productRouter = express.Router();

productRouter.post("/", addProduct)
productRouter.get("/", getProducts)
productRouter.delete("/:id", deleteProducts)



export default productRouter;