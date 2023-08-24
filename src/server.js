const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(router);

mongoose.set('strictQuery', false);

const startServer = async() => {
  try {

    await mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@dachshund.cgrkici.mongodb.net/' + process.env.DB_NAME + '?retryWrites=true&w=majority')

    app.listen(4000, () => {
      console.log('Server started on port 4000.')
    });
  } catch (e) {
    console.log(e.message);
  }  
}

startServer();