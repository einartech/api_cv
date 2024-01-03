// index.js
import express from "express";
import cors from "cors";
import connectDB from "./db/connectdb.js";
import itemRoutes from "./routes/ItemRoute.js";
import companyRoutes from "./routes/CompanyRoute.js";
import logger from "./utils/logger.js";
import { requestLogger } from "./utils/middleware.js";
import dotenv from 'dotenv';

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

app.listen(port, () => {
  logger.info(`Servidor API en http://localhost:${port}`);
});
