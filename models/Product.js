import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add the name of product"],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      trim: true,
      default: "SKU",
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "Please add a quantity"],
      trim: true,
    },
    packSize: {
      type: String,
      required: [true, "Please specify the size of each packet"],
      trim: true,
    },
    unit: {
      type: String,
      required: [true, "Please specify the unit"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Please add price"],
      trim: true,
    },
    discount: {
      type: String,
      trim: true,
    },
    discountedPrice: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
    image: {
      type: String,
      default:
        "https://cdn.shopify.com/s/files/1/0483/7484/1507/products/KodoMillet2_1080x.jpg?v=1667813393",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
