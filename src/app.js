const express = require("express");
const path = require("path");
require("dotenv").config();

const sequelize = require("./helpers/connection");

const routeStock = require("./routes/stock-route");
const routeSell = require("./routes/sell-route");
const routeBuy = require("./routes/buy-route");
const rouyeBuy = require("./routes/user-route");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/stock", routeStock);
app.use("/sell", routeSell);
app.use("/buy", routeBuy);

app.listen(process.env.PORT, () => {
  console.log("Listenning...");
});
