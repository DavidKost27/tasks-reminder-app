const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send({ data: "Task Created" });
  console.log("Tasks Route");
});

module.exports = router;
