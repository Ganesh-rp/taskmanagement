const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const connect = require('./config/database')
const app = express();
const router = require('./src/router/router');
require('dotenv').config()




app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

// connection to the database
connect();


// Base routes
router(app);

const port  = process.env.PORT || 4000;
// listen for requests
app.listen(port, () => {
  console.log("Server is listening on port 3002");
});
