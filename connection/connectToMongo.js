const mongoose = require("mongoose");
const connectToMongo = () => {
  const conn = mongoose
    .connect("mongodb://127.0.0.1:27017/shorturl", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected"))
    .catch((E) => console.log(E.message));
};
module.exports = connectToMongo;
