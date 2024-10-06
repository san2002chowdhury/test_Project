const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
//For getting json value from postman
app.use(express.json());
//Require All file from another folder
const controller = require("./src/controllers");
const connection = require("./src/connection");
const cookieParser = require("cookie-parser");
//Connect With DataBase-------->
connection.dbConnect();
//use some middlewares-------->
app.use(cors());
app.use(bodyParser.text({ type: ["text/xml", "application/xml"] }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(cookieParser());
app.set("trust proxy", true);
app.use(express.urlencoded({ extended: false }));

//Api Calling--------->
app.use("/api", controller);
//Listennig Port---------->
app.listen(process.env.PORT, () => {
  console.log(`<=====Server Started At Port:${process.env.PORT}=====>`);
});
