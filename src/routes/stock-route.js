const express = require("express")
const router = express.Router()

const controller = require("../controllers/stock-controller")

router.get("/pagination", controller.getPagination)
router.get("/", controller.get)
router.get("/:code", controller.getByCode)
router.post("/", controller.post)
router.put("/:code", controller.put)
router.delete("/:code", controller.delete)

module.exports = router