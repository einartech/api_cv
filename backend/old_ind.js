import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 4000;

app.use(express.json());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/api_cv');
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('NO SE PUDO CONECTAR A LA BASE DE DATOS:', error.message);
  }
};

connectDB();

const Item = mongoose.model('Item', {
  nombre: String,
  apellido: String,
  edad: Number,
  ciudad: String,
  profesion: String,
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor API en http://localhost:${port}`);
});
