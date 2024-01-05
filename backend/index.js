// index.js
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

import connectDB from "./db/connectdb.js";
import logger from "./utils/logger.js";
import { requestLogger, notFoundHandler, errorHandler } from "./utils/middleware.js";

import itemRoutes from "./routes/ItemRoute.js";
import companyRoutes from "./routes/CompanyRoute.js";
import personRoutes from "./routes/PersonRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(requestLogger); // Agregar el middleware de registro

connectDB();

app.use(itemRoutes);
app.use(companyRoutes);
app.use(personRoutes);

app.use(notFoundHandler); // Manejador para rutas no encontradas
app.use(errorHandler);    // Middleware de manejo de errores

app.listen(port, () => {
  logger.info(`Servidor API en http://localhost:${port}`);
});
