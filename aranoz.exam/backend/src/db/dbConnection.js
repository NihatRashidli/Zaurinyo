import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connect");
  })
  .catch(() => {
    console.log("not connect");
  });
