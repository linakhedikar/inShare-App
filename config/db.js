require('dotenv').config();

// password cloud mongodb : jWow7jdwPiQDY9yG

const mongoose = require("mongoose");
function connectDB() {
mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true});
    const connection = mongoose.connection;
    connection.once('open', function connectDB() {
      console.log('Database Connected');
    })
    .on('error', function connectDB (err) {
      console.log(err);
    });
  }
module.exports = connectDB;
