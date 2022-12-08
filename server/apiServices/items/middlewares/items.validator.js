const {body} = require('express-validator')
const {validateResults} = require('../../../utils/handleValidations')

const itemValidator = [
    body('name')
    .notEmpty()
    .withMessage('name can not be empty'),
    body('price')
    .notEmpty()
    .isNumeric()
    .isLength({min: 1})
    .withMessage('price can not be empty'),
    (req, res, next) => {
        return validateResults(req,res,next)
    }   

]

module.exports = {itemValidator}