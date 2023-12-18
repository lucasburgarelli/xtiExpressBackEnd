const express = require("express");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
require("dotenv").config();

const installRoute = require("./helpers/install");
const documentation = require("./docs/swagger-doc.json");

const routeStock = require("./routes/stock-route");
const routeSell = require("./routes/sell-route");
const routeBuy = require("./routes/buy-route");
const routeUser = require("./routes/user-route");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/stock", routeStock);
app.use("/sell", routeSell);
app.use("/buy", routeBuy);
app.use("/user", routeUser);
app.use("/install", installRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(documentation));

app.listen(process.env.PORT, () => {
  console.log("Listenning...");
});
