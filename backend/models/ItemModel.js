// ItemModel.js: Contiene la definición del modelo Item.
import mongoose from "mongoose";

const Item = mongoose.model('Item', {
  nombre: String,
  apellido: String,
  edad: Number,
  ciudad: String,
  profesion: String,
});

export default Item;