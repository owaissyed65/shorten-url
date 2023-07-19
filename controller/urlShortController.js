const shortid = require("shortid");
const Url = require("../models/Url");

const urlShortController = async (req, res) => {
  const { validateUrl } = req.body;
  const id = shortid();
  const data = await Url.create({
    url: id,
    validateUrl,
  });
  res.json({ data });
};
module.exports = { urlShortController };
