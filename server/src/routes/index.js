const express = require("express");
const router = express.Router();

const tasksRoute = require("./tasks");
const UsersRoute = require("./users");

router.use("/tasks", tasksRoute);
router.use("/users", UsersRoute);

module.exports = router;
