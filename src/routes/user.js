const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");
const auth = require("../middleware/auth");

const signupController = require('../controllers/user/signupController');
const loginController = require('../controllers/user/loginController');
const getUserController = require('../controllers/user/getUserController');



router.post(
    "/signup",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ], signupController
    
);

router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6
      })
    ], loginController
  );

  /**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */


router.get("/me", auth, getUserController);

module.exports = router;