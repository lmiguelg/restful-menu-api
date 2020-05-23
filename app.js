const express = require('express');

const app = express();
const mongoose = require('mongoose');

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
const routes = require('./routes/routes');

//MIDDLEWARE
app.use('/', routes);



app.listen(3000);