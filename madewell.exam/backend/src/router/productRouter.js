import express from "express";
import {
  addProduct,
  deleteProducts,
  getProduct,
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.post("/", addProduct);
productRouter.get("/", getProduct);
productRouter.delete("/:id", deleteProducts);

export default productRouter;
