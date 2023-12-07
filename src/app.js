const express = require("express")
const path = require("path")
require("dotenv").config()

const sequelize = require("./helpers/connection")

const routeStock = require("./routes/stock-route")

const app = express();

//middlewares();

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
//app.use(router)
app.use("/stock", routeStock)

app.listen(process.env.PORT, () => {
  console.log("Listenning...")
})
