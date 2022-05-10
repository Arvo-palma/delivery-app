const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const router = require('../routes');

const userRoutes = require('../routes/userRoutes');
const adminRoutes = require('../routes/adminRoutes');
const orderRoutes = require('../routes/orderRoutes');

app.use(bodyParser.json());

app.use(cors());

app.use(router);

app.use(userRoutes);
app.use(adminRoutes);
app.use(orderRoutes);

module.exports = app;
