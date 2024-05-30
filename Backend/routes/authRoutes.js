const router = require("express").Router();
const {
  LoginController,
  SignUpController,
  LogOutController,
} = require("../controllers/User.controller");

router.post("/register", SignUpController);

router.post("/login", LoginController);

router.post("/logout", LogOutController);
module.exports = router;
