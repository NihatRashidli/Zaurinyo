import express from "express";
import {
  addProduct,
  deleteProducts,
  getProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", addProduct);
router.delete("/", deleteProducts);

export default router;
