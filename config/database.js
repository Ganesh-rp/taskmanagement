const mongoose = require("mongoose");
require('dotenv').config()


const connection = () => {
    mongoose.Promise = global.Promise;

    // Connecting to the database
    mongoose
      .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected successfully to server");
      })
      .catch((err) => {
        console.log("Database connection error", err);
        process.exit();
      });
    
    mongoose.set("useFindAndModify", false);
}


module.exports = connection;