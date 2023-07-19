const express = require("express");
const { urlShortController } = require("../controller/urlShortController");
const Url = require("../models/Url");
const router = express.Router();

router.post("/url", urlShortController);
router.get("/url/:id", async (req, res) => {
  const { id } = req.params;
  const url = await Url.findOneAndUpdate(
    { url: id },
    { $push: { isVisited: { timeStamps: Date.now() } } },
    { new: true }
  );
  console.log(url);
  res.redirect(url.validateUrl);
});

module.exports = router;
