const Router = require("express");
const RecordController = require("./record");
const UserController = require("./user");
const RootController = Router();
console.log("<=============controller=============>");
RootController.use("/record", RecordController);
RootController.use("/user", UserController);
module.exports = RootController;
console.log("hello from controller======>");
