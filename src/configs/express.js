// const express = require("express");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const morgan = require("morgan");
// const cors = require("cors");
// const { RootController } = require("../controllers");
// const { EnvConfig } = require("./environment");
// console.log("Helooooooo----->EXPRESS");

// class App {
//   static app = undefined;
//   static middlewares() {
//     this.app = express();
//     this.app.use(cors());
//     this.app.use(bodyParser.text({ type: ["text/xml", "application/xml"] }));
//     this.app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
//     this.app.use(bodyParser.json({ limit: "500mb" }));
//     this.app.use(cookieParser());
//     // this.app.use(morgan("combined"));
//     // this.app.set("trust proxy", true);
//     this.app.use("/api", RootController);
//   }
//   static init() {
//     this.middlewares();
//     console.log("============Initialize Express Middlewares============");
//     return this.app;
//   }
// }
// module.exports = App;
