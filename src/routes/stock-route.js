const express = require("express");
const router = express.Router();

const controller = require("../controllers/stock-controller");
const buycontroller = require("../controllers/buy-controller");
const sellcontroller = require("../controllers/sell-controller");

router.post("/buy", buycontroller.postBuy);
router.post("/sell", sellcontroller.postSell);
router.get("/my", controller.getMy);
router.get("/pagination", controller.getPagination);
router.get("/", controller.get);
router.get("/:code", controller.getByCode);
router.post("/", controller.post);
router.put("/:code", controller.put);
router.delete("/:code", controller.delete);

module.exports = router;
