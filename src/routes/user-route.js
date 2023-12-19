const express = require("express");
const router = express.Router();
const auth = require("../helpers/authenticator");
const controller = require("../controllers/user-controller");

router.get("/login", controller.getLogin);
router.get("/:cpf", controller.getByCode);
router.get("/", controller.get);
router.get("/pagination", controller.getPagination);
router.post("/", controller.post);
router.put("/:cpf", auth.verify, auth.verifyAdmin, controller.put);
router.delete("/:cpf", auth.verify, auth.verifyAdmin, controller.delete);

module.exports = router;
