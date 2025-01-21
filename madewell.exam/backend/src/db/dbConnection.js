import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connect pidris");
  })
  .catch(() => {
    console.log("not connect pidris");
  });
