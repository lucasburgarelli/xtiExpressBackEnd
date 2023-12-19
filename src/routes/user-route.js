const express = require("express");
const router = express.Router();
const auth = require("../helpers/authenticator");
const controller = require("../controllers/user-controller");

router.get("/login", controller.getLogin);
router.get("/:cpf", controller.getByCode);
router.get("/", auth.verify, controller.get);
router.get("/pagination", controller.getPagination);
router.post("/", controller.post);
router.put("/:cpf", controller.put);
router.delete("/:cpf", controller.delete);

module.exports = router;
