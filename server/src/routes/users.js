const express = require("express");
const router = express.Router();

// ##### Router.get should be changed to post later down the line #####
router.get("/", async (req, res, next) => {
  res.send({ data: "User Created" });
  console.log("Users Route");
});

module.exports = router;
