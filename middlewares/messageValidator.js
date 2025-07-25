import { body } from "express-validator";

export const newMessageValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ max: 25 })
    .withMessage("Name must be less than 25 characters."),

  body("text")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ max: 500 })
    .withMessage("Message must be less than 500 characters."),
];
