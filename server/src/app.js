const path = require("path");
if ((process.env.NODE_ENV = "development")) {
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

app.use("/", indexRouter);

//Express listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
