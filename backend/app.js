import express from 'express';
import cors from 'cors';

import db from './database/db.js';

import clientRouter from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/clientes', clientRouter);

try {
  await db.authenticate();
  console.log('Conexion Exitosa a la DB');
} catch (error) {
  console.log(`El error de conexion es: ${error}`);
}

app.listen(8000, () => {
  console.log('Server UP running in http://localhost:8000/');
});
