import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }, price: {
        type: Number,
        require: true
    }, category: {
        type: String,
        require: true
    }, image: {
        type: String,
        require: true
    }

}, {
    collection: "Products", timestamps: true
})

const product = new mongoose.model("Products", productSchema)
export default product