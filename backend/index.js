import express from "express";
import cors from "cors";
import connectDB from "./db/connectdb.js";
import itemRoutes from "./routes/ItemRoute.js";
import companyRoutes from "./routes/CompanyRoute.js";
import winston from "winston";
import { fileURLToPath } from 'url'; // Importa el módulo 'url'
import path from "path";
import fs from "fs"; // Importa el módulo 'fs'
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// Configuración del directorio de logs
const logsDirectory = path.join(__dirname, 'logs');

// Asegúrate de que el directorio logs exista
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

// Configuración básica de winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(logsDirectory, 'logfile.log') })
  ],
});

app.use(express.json());
app.use(cors({
  origin: '*',
  credentials: true,
}));

// Middleware para registrar solicitudes
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Conectar a la base de datos
connectDB();

// Usar las rutas de la API
app.use(itemRoutes);
app.use(companyRoutes);

app.listen(port, () => {
  logger.info(`Servidor API en http://localhost:${port}`);
});
