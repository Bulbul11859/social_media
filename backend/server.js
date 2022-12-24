const express = require("express");
var cors = require("cors");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Running on port 8000");
});
