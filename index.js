const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("You hit the homepage! Docekr update check");
});

app.listen(port, () => {
  console.log("Connected open on Port:", port);
});
