const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
const port = process.env.PORT;
const connectDB = require("./db");
const http = require("http");
const sever = http.createServer(app);
connectDB();
const serverRoutes = require("./serverRoutes");
server.use([
  cors(),
  bodyparser.json(),
  bodyparser.urlencoded({ extended: false }),
]);

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/api/email", serverRoutes);

module.exports = server;
