const express = require("express");
const {
  urlShortController,
  urlRedirect,
} = require("../controller/urlController");
const Url = require("../models/Url");
const router = express.Router();

router.post("/", urlShortController);
router.get("/:id", urlRedirect);

module.exports = router;
