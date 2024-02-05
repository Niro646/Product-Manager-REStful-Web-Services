const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new Schema(
  {
    _id: { type: objectId, auto: true }, //auto generates objectid
    name: { type: String, required: true }, // have to write name
  },
  {
    versionKey: false,
  }
);

const category = mongoose.model("categories", categorySchema);
module.exports = category;
