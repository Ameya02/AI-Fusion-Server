const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
const port = process.env.PORT;
const http = require("http");
const server = http.createServer(app);
const connectDB = require("./db");
connectDB();
const serverRoutes = require("./api/serverRoutes");
app.use([
  cors(
    {
    origin:[""],
    methods:["POST","GET"],
    credentials:true
    }
      
  ),
  bodyparser.json(),
  bodyparser.urlencoded({ extended: false }),
]);

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/api/email", serverRoutes);

module.exports = server;
