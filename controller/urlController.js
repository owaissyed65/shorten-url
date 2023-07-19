const shortid = require("shortid");
const Url = require("../models/Url");

const urlShortController = async (req, res) => {
  const { validateUrl } = req.body;
  const id = shortid();
  const data = await Url.create({
    url: id,
    validateUrl,
  });
  res.render("home", {
    id: data.url,
  });
};
const urlRedirect = async (req, res) => {
  const { id } = req.params;
  const url = await Url.findOneAndUpdate(
    { url: id },
    { $push: { isVisited: { timeStamps: Date.now() } } },
    { new: true }
  );
  console.log(url);
  res.redirect(url.validateUrl);
};
module.exports = { urlShortController, urlRedirect };
