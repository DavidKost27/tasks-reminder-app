const express = require("express");
const router = express.Router();

const tasksRoute = require("./tasks");

router.use("/tasks", tasksRoute);

module.exports = router;
