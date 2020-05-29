import express from 'express';
import { createConnection } from 'typeorm';


const app = express();
createConnection();

app.listen(3000, () => {
    console.log(`Corriendo en el puerto 3000`)
})

