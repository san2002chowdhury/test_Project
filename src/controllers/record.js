require("express");
require("mongoose");

const { Router } = require("express");
const { body, check, validationResult } = require("express-validator");
const { Record } = require("../models");

const RecordController = Router();
RecordController.post(
  "/add",
  check("name").not().isEmpty().withMessage("question is required"),
  check("address").not().isEmpty().withMessage("Address is required"),
  check("phone_No").not().isEmpty().withMessage("answer is required"),
  check("phone_No")
    .isLength({ min: 10 })
    .withMessage("Phone-Number mustb be 10 digits "),
  async (req, res, next) => {
    console.log("We are in add");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        result: "error",
        errors: errors.array(),
      });
    } else {
      try {
        const data = req.body;
        const nameFound = await Record.findOne({ name: data.name });
        if (nameFound !== null) {
          res.status(404).send({
            result: "Name Already Registered",
          });
        } else {
          console.log("We are in Else");
          let recodData = new Record(data);
          recodData.save();
          res.status(201).send({
            result: "Recorded Successfully",
            data,
          });
        }
      } catch (error) {
        next(error);
      }
    }
  }
);
module.exports = RecordController;
