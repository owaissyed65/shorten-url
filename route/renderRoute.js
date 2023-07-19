const express = require("express");
const Url = require("../models/Url");
const router = express.Router();

router.get("/", async (req, res) => {
  const url = await Url.find();
  console.log(url)
  res.render("home", {
    url
  });
});

module.exports = router;
