const express = require("express");
const path = require("path");
require("dotenv").config();

const sequelize = require("./helpers/connection");
//const router = require("./routes")

const app = express();

//middlewares();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//app.use(router)

app.listen(process.env.PORT, () => {
  console.log("Listenning...");
});
