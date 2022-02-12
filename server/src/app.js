const path = require("path");
if ((process.env.NODE_ENV = "development")) {
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

// Requirements
const express = require("express");
const mongoose = require("mongoose");

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Variables
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI;

// Connect mongodb
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log(`connected to db...`))
  .catch((err) => console.log(err));
//

// Router index
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

//Express listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
