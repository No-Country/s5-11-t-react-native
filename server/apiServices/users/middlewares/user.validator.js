const { body } = require("express-validator");
const { validateResults } = require("../../../utils/handleValidations");


const userValidator = [

  body("username")
    .notEmpty()
    .withMessage("username can not be empty"),
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("must provide a valid email"),
  body("password")
    .notEmpty()
    .isAlphanumeric()
    .withMessage("password must contain letters and numbers")
    .isLength({ min: 8 }).withMessage("password must be at least 8 characters long"),

  (req, res, next) => {
    return validateResults(req,res,next)
  }
]


module.exports = { userValidator }