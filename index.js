const express = require("express");
const connectToMongo = require("./connection/connectToMongo");
const urlRoute = require("./route/urlRoute");
const app = express();
const Port = 8001 || process.env.Port;
app.use(express.json());
connectToMongo();
app.use("/", urlRoute);

app.listen(Port, () => {
  console.log("Server is Connected");
});
