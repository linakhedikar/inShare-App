require('dotenv').config();
// const mongoose = require("mongoose");
// password cloud mongodb : jWow7jdwPiQDY9yG
// function connectDB() {
//     //Database connection
//     mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true});
//     const connection = mongoose.connection;

//     connection.once('open',()=>{
//         console.log('Database connected.');
//     }).catch(err =>{
//         console.log('Connection failed.');
//     })
// }

// module.exports = connectDB;

const mongoose = require("mongoose");
function connectDB() {
mongoose.connect(process.env.MONGO_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected.");
  })
  .catch((e) => {
    console.log("Connection Failed");
  });
}
module.exports = connectDB;
