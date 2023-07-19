const express = require("express");
const connectToMongo = require("./connection/connectToMongo");
const urlRoute = require("./route/urlRoute");
const path = require("path");
const Url = require("./models/Url");
const renderRoute = require("./route/renderRoute");
const app = express();

const Port = 8001 || process.env.Port;
connectToMongo();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/url", urlRoute);
app.use("/", renderRoute);


app.listen(Port, () => {
  console.log("Server is Connected");
});
