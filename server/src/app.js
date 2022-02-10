const path = require("path");
if ((process.env.NODE_ENV = "development")) {
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

// Variables
const express = require("express");

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router index
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

//Express listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
