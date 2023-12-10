const express = require("express");
const router = express.Router();

const controller = require("../controllers/buy-controller");

router.post("/", controller.post);
router.get("/", controller.get);
router.put("/", controller.put);
router.delete("/", controller.delete);
router.get("/", controller.getByCode);

module.exports = router;
