// ItemModel.js: Contiene la definición del modelo Item.
import mongoose from "mongoose";

const Company = mongoose.model('Company', {
  name: String,
  city: String,
  info: Number,
});

export default Company;