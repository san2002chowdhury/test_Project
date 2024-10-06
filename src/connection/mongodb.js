const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function dbConnect() {
  const mongoUrl = process.env.DB_HOST + process.env.DB_NAME;
  console.log(mongoUrl);
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("<======DB connected=======>"))
    .catch((error) => console.error("Connection error", error));
}

module.exports = {
  dbConnect,
};
console.log("hellow----------->mongodb");
