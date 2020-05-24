const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


require('dotenv/config');

//CONECT TO DB
mongoose
.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

//IMPORT ROUTES
const routes = require('./src/routes/routes');
const users = require('./src/routes/user');

//MIDDLEWARE
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);
app.use('/user', users);


app.listen(3000);