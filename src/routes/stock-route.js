const express = require("express");
const router = express.Router();
const auth = require("../helpers/authenticator");
const controller = require("../controllers/stock-controller");
const buycontroller = require("../controllers/buy-controller");
const sellcontroller = require("../controllers/sell-controller");

router.post("/buy", auth.verify, buycontroller.postBuy);
router.post("/sell", auth.verify, sellcontroller.postSell);
router.get("/my", auth.verify, controller.getMy);
router.get("/pagination", controller.getPagination);
router.get("/", controller.get);
router.get("/:code", controller.getByCode);
router.post("/", auth.verify, auth.verifyAdmin, controller.post);
router.put("/:code", auth.verify, auth.verifyAdmin, controller.put);
router.delete("/:code", auth.verify, auth.verifyAdmin, controller.delete);

module.exports = router;
