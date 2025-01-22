import express from "express";
import "dotenv/config";
import cors from "cors";
import "./src/db/dbConnection.js";
import router from "./src/route/productRouter.js";

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
