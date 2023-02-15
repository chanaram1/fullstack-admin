import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema( //a user must have this structure of this data in the mongoose DB
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number
  },
  {timestamps:true}
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;