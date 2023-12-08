const express = require("express")
const router = express.Router()

const controller = require("../controllers/stock-controller")

router.get("/", controller.get)
router.post("/", controller.post)
router.put("/:code", controller.put)
router.delete("/:code", controller.delete)
router.get("/:code", controller.getByCode)

module.exports = router