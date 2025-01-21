import express from "express";
import "dotenv/config";
import cors from "cors";
import "./src/db/dbConnection.js";
import productRouter from "./src/router/productRouter.js";

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello Pidris!");
});

app.listen(port, () => {
  console.log(`Pidris connect ${port}`);
});
