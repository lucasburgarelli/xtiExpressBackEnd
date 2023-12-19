const express = require("express");
const router = express.Router();

const controller = require("../controllers/sell-controller");

router.get("/", controller.get);
router.get("/pagination", controller.getPagination);
router.post("/", controller.post);
router.put("/", controller.put);
router.delete("/", controller.delete);
router.get("/", controller.getByCode);

module.exports = router;
