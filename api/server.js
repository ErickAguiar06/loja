const express = require('express');
const cors = require('cors');
require('dotenv').config();

const rota = require('./src/routes'); // ou './routes' dependendo de onde está

const app = express();

app.use(cors());
app.use(express.json());
app.use(rota);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
