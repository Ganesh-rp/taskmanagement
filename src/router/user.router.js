const router = require("express").Router();
const user = require("../controller/user.controller");

// Create a new User
router.post("/", user.createUser);

router.post("/login", user.loginUser);

module.exports = router;
