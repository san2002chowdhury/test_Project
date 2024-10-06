const { Router, Request, Response, NextFunction } = require("express");
const { body, check, validationResult } = require("express-validator");
const UserController = Router();
UserController.post(
  "/add",
  check("fname").not().isEmpty().withMessage("fname is required"),
  check("lname").not().isEmpty().withMessage("lname is required"),
  async (request, response, next) => {
    try {
      const { body } = request;
      console.log("---------add---------");
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      } else {
        response.status(200).send(body);
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = UserController;
