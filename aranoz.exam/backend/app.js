import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js";
import cors from "cors";
import productRouter from "./src/router/productRouter.js";

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productRouter)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`pidris ${port}`);
});
