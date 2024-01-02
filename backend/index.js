// index.js: El punto de entrada principal que utiliza los módulos anteriores.
import express from "express";
import cors from "cors";
import connectDB from "./db/connectdb.js";
import apiRoutes from "./routes/ItemRoute.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
  origin: '*',  // Reemplaza con la URL de tu aplicación cliente
  credentials: true,  // Habilita el intercambio de cookies y encabezados de autenticación
}));

// Conectar a la base de datos
connectDB();

// Usar las rutas de la API
app.use(apiRoutes);

app.listen(port, () => {
  console.log(`Servidor API en http://localhost:${port}`);
});
