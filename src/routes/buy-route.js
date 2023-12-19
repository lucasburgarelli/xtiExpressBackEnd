const express = require("express");
const router = express.Router();
const auth = require("../helpers/authenticator");
const controller = require("../controllers/buy-controller");

router.post("/", auth.verify, auth.verifyAdmin, controller.post);
router.get("/", controller.get);
router.get("/pagination", controller.getPagination);
router.put("/", auth.verify, auth.verifyAdmin, controller.put);
router.delete("/", auth.verify, auth.verifyAdmin, controller.delete);
router.get("/", controller.getByCode);

module.exports = router;
