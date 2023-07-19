const mongoose = require("mongoose");
const UrlSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      unique: true,
    },
    validateUrl: {
      type: String,
    },
    isVisited: [
      {
        timestamps: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);
const Url = mongoose.model("url", UrlSchema);
module.exports = Url;
