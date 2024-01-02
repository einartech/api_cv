// ConexionBD.js: Contiene la lógica de conexión a la base de datos.
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('NO SE PUDO CONECTAR A LA BASE DE DATOS:', error.message);
  }
};

export default connectDB;