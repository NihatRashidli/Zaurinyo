import express from 'express';
import { addProduct, deleteProduct, getProducts } from '../controllers/productController.js';

const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.post('/', addProduct)
productRouter.delete('/:id', deleteProduct)


export default productRouter;