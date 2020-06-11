const express = require("express");
const router = express.Router();

/*
                controllers
*/
const UserController = require('../controllers/user/UserController');

/*
                Middleware
 */
const auth = require("../middleware/auth");
const validateUser = require('../middleware/validateUser');


/*
                Routes
 */
router.post("/signup",validateUser, UserController.signup);
router.post("/login", validateUser, UserController.login);
router.get("/me", auth, UserController.getUser);

module.exports = router;