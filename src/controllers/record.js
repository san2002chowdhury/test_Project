require("express");
require("mongoose");

const { Router } = require("express");
const { body, check, validationResult } = require("express-validator");
const { Record } = require("../models");

const RecordController = Router();
//Insert data in the dataBase
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
        const allData = await Record.find({});
        const data = req.body;
        const nameFound = await Record.findOne({ name: data.name });
        if (nameFound !== null) {
          res.status(404).send({
            result: "Name Already Registered",
          });
        } else {
          console.log("We are in Else");
          data.sl_No = data.sl_No + allData.length;
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
//Get All data present in the database
RecordController.get("/data", async (req, res, next) => {
  try {
    const allData = await Record.find({});
    res.status(200).json({
      result: `We get total ${allData.length} data`,
      data: [allData],
    });
  } catch (error) {
    next(error);
  }
});
//Update in the data base
RecordController.patch("/update/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const data = await Record.findOne({
      name: { $regex: name, $options: "im" },
    });
    console.log(data);
    if (data) {
      const _id = data._id;

      const dataUpdate = req.body;
      console.log(dataUpdate);

      const updateData = await Record.findByIdAndUpdate(_id, dataUpdate);
      res.status(200).json({
        result: "update done successfully",
        updateData,
      });
    } else {
      res.status(404).json({
        result: "Invalid Data",
      });
    }
  } catch (error) {
    res.status(404).json({
      result: "wrong patching",
      error: error,
    });
  }
});
RecordController.delete("/delete/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const data = await Record.findOne({
      name: { $regex: name, $options: "im" },
    });
    if (data) {
      const _id = data._id;
      const deletedData = await Record.findByIdAndDelete(_id);
      res.status(200).json({
        result: "delete done successfully",
        deletedData,
      });
    } else {
      res.status(404).json({
        result: "Invalid Data",
      });
    }
  } catch (error) {
    res.status(400).json({
      result: "wrong deleting",
      error: error,
    });
  }
});
module.exports = RecordController;
