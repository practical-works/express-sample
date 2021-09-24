//==============================================================================
// ■ Feedback-Validator (feedback.validator.js)
//------------------------------------------------------------------------------
//     Feedback data object validation route guard.
//==============================================================================
const { body } = require("express-validator");

module.exports = [
  body("author")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Author is invalid."),
  body("message")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Message is invalid."),
];
