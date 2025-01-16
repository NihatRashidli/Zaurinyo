import express from 'express';
import { addProduct, deleteProduct, getProduct } from '../controller/productController.js';

const productRouter = express.Router()

productRouter.get('/', getProduct)
productRouter.post('/', addProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter;