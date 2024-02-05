const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const productSchema = new Schema(
  {
    _id: { type: objectId, auto: true }, //auto generates objectid
    name: { type: String, required: true }, // have to write name
    unitPrice: { type: Number, required: true },
    categoryId: { type: objectId, ref: "categories" },
  },
  {
    versionKey: false,
  }
);

const product = mongoose.model("products", productSchema);
module.exports = product;
