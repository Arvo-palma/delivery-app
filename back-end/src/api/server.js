require('dotenv').config();

const express = require('express');
const path = require('path');
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.use('/images', express.static(path.resolve(__dirname, '../images')));

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
